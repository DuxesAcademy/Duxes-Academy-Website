
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder data
const facultyMembers = [
  { id: 1, name: 'Raju', title: 'Lead Instructor, Embedded C', expertise: 'Embedded and Advance C', linkedin: '#', email: 'e.reed@eduplatform.com', imageAlt: 'Dr. Evelyn Reed portrait', imageDesc: 'Professional headshot of Dr. Evelyn Reed' },
  { id: 2, name: 'Dilip', title: 'Instructor, LINUX for MicroControllers', expertise: 'Linux Systems', linkedin: '#', email: 'm.chen@eduplatform.com', imageAlt: 'Mark Chen portrait', imageDesc: 'Professional headshot of Mark Chen smiling' },
  { id: 3, name: 'Ayesha', title: 'Instructor, IoT', expertise: 'IoT Devices', linkedin: '#', email: 'a.khan@eduplatform.com', imageAlt: 'Aisha Khan portrait', imageDesc: 'Professional headshot of Aisha Khan' },
  { id: 4, name: 'Akash', title: 'Instructor, Automotive Software Engineering', expertise: 'RTOS, ADAS', linkedin: '#', email: 'd.lee@eduplatform.com', imageAlt: 'David Lee portrait', imageDesc: 'Professional headshot of David Lee in a suit' },
];

const FacultyPage = () => {
  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Meet Our Experts</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Learn from passionate instructors with real-world experience.</p>
      </motion.section>

      {/* Faculty Grid */}
      <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center pt-6">
                   <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                       <img  class="w-full h-full object-cover" alt={member.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                   </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">Expertise: {member.expertise}</p>
                  <div className="flex justify-center gap-3 mt-auto">
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn Profile`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                     <Button variant="outline" size="icon" asChild>
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Optional: Join Our Team Section */}
       <section className="bg-secondary/50 dark:bg-secondary/20 py-16 md:py-20 text-center">
           <div className="container">
               <h2 className="text-3xl font-bold mb-4">Interested in Joining Our Team?</h2>
               <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                   We're always looking for passionate experts to share their knowledge. If you're interested in becoming an instructor, we'd love to hear from you.
               </p>
               <Button size="lg" asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                   <Link to="/careers">View Open Positions</Link>
               </Button>
           </div>
       </section>
    </div>
  );
};

export default FacultyPage;
  