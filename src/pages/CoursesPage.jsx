import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { Star, Filter, Search, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, getFirestore } from 'firebase/firestore';
import {auth, db } from '../firebase'; // adjust the path as per your firebase.js config



const allCourses =
[
  {
    id: 1,
    title: 'Embedded C',
    category: 'Embedded Systems Programming',
    rating: 4.8,
    imageAlt: 'Embedded C Code',
    imageUrl: '/images/embeddedc.jpg',
    imageDesc: 'Code on a computer screen'
  },
  {
    id: 2,
    title: 'IoT with ESP32',
    category: 'IoT (Internet of Things)',
    rating: 4.9,
    imageAlt: 'IoT Device Setup',
    imageUrl: 'images/iotwithesp32.jpg',
    imageDesc: 'ESP32 microcontroller and IoT setup'
  },
  {
    id: 3,
    title: 'Linux for Embedded Systems',
    category: 'Embedded Systems Programming',
    rating: 4.7,
    imageAlt: 'Linux Command Line',
    imageUrl: 'images/linux.jpg',
    imageDesc: 'Linux terminal command line'
  },
  {
    id: 4,
    title: 'Automotive Software Engineering',
    category: 'Automotive Embedded Software',
    rating: 4.6,
    imageAlt: 'Car Embedded System',
    imageUrl: 'https://www.devprojournal.com/wp-content/uploads/2024/04/automotive-software-development-2-e1713884244613.jpg',
    imageDesc: 'Embedded systems in automotive technology'
  },
  {
    id: 5,
    title: 'Python for Microcontrollers',
    category: 'Embedded Systems Programming',
    rating: 4.8,
    imageAlt: 'Python and Microcontroller',
    imageUrl: 'https://i.kickstarter.com/assets/011/591/465/2de115d40b068db02a2186953fd970ac_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&v=1463684927&width=1552&sig=UfAdSzly393j0YMFndnDCsK2lFjJjI7mV8MOOXmUBAA%3D',
    imageDesc: 'Python coding on a microcontroller board'
  }
];

const categories = ['Embedded Systems Programming', 'IoT (Internet of Things)', 'Automotive Embedded Software'];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleEnroll = async (course) => {
    if (!user) {
      alert('You must be logged in to enroll in a course.');
      navigate('/login');
      return;
    }

    try {
      setEnrolling(true);
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const enrolled = userData.enrolledCourses || [];

        const alreadyEnrolled = enrolled.some((c) => c.id === course.id);
        if (alreadyEnrolled) {
          alert('You are already enrolled in this course.');
          return;
        }

        await updateDoc(userRef, {
          enrolledCourses: arrayUnion(course),
        });
      } else {
        await setDoc(userRef, {
          enrolledCourses: [course],
        });
      }

      alert(`Successfully enrolled in ${course.title}!`);
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Error enrolling in course. Please try again.');
    } finally {
      setEnrolling(false);
    }
  };

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="fade-in px-4 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 sm:py-14 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl mb-10"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-primary">Our Courses</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">Find the perfect course to advance your skills and career.</p>
      </motion.section>

      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="space-y-6 p-4 sm:p-6 bg-card border rounded-lg lg:sticky lg:top-24 h-fit">
          <h2 className="text-xl font-semibold flex items-center gap-2"><Filter className="w-5 h-5" /> Filters</h2>

          {/* Mobile: Category First */}
          <div className="lg:hidden space-y-2">
            <h3 className="font-medium">Category</h3>
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`mobile-category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={`mobile-category-${category}`} className="text-sm font-normal cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>

          {/* Mobile: Search Filter after category */}
          <div className="lg:hidden space-y-2">
            <Label htmlFor="mobile-search-course">Search Courses</Label>
            <div className="relative">
              <Input
                id="mobile-search-course"
                type="text"
                placeholder="e.g., Python, Marketing"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Desktop: Search Filter */}
          <div className="hidden lg:block space-y-2">
            <Label htmlFor="search-course">Search Courses</Label>
            <div className="relative">
              <Input
                id="search-course"
                type="text"
                placeholder="e.g., Python, Marketing"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Desktop: Category Filter */}
          <div className="hidden lg:block space-y-2">
            <h3 className="font-medium">Category</h3>
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </aside>


        {/* Courses Grid */}
        <main className="lg:col-span-3">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
  <div className="relative h-48 sm:h-50 w-full bg-transparent flex items-center justify-center">
    <img
      className="max-h-full max-w-full object-contain"
      alt={course.imageAlt}
      src={course.imageUrl}
    />
    <div className="absolute top-2 right-2 bg-background/80 text-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {course.rating}
    </div>
  </div>
  <CardHeader className="pb-2">
    <CardTitle className="text-lg">{course.title}</CardTitle>
    <CardDescription>{course.category}</CardDescription>
  </CardHeader>
  <CardContent className="flex-grow flex flex-col justify-end gap-2">
    <div className="flex flex-col sm:flex-row gap-2 mt-auto">
      <Button
        onClick={() => handleEnroll(course)}
        disabled={enrolling}
        className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
      >
        {enrolling ? 'Enrolling...' : 'Enroll Now'}
      </Button>
      <Button variant="outline" asChild className="flex-1">
        <Link to={`/courses/${course.id}`}>
          Details <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </CardContent>
</Card>

                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <p>No courses found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CoursesPage;
