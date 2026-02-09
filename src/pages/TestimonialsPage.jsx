
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Placeholder data - Use more detailed testimonials here
const testimonials = [
  { id: 1, name: 'Alice Johnson', course: 'Embedded C', rating: 5, quote: 'This platform completely changed the trajectory of my career. The instructors were knowledgeable, the curriculum was up-to-date, and the community support was invaluable. I landed a great job shortly after graduating!', imageAlt: 'Alice Johnson smiling', imageDesc: 'Professional headshot of Alice Johnson' },
  { id: 2, name: 'Bob Williams', course: 'IoT & Smart Devices', rating: 5, quote: 'I was new to Embedded, but this course made complex topics easy to understand. The hands-on projects were crucial for building my portfolio. Highly recommended for anyone starting in the field.', imageAlt: 'Bob Williams portrait', imageDesc: 'Headshot of Bob Williams' },
  { id: 3, name: 'Charlie Brown', course: 'Linux for Embedded Systems', rating: 4, quote: 'Learned so much practical information that I could immediately apply to my job. The flexibility of the online format was perfect for my busy schedule. Some modules could be slightly more in-depth, but overall a great experience.', imageAlt: 'Charlie Brown headshot', imageDesc: 'Professional photo of Charlie Brown' },
  { id: 4, name: 'Diana Garcia', course: 'Python for Microcontrollers', rating: 5, quote: 'The design principles taught were excellent, and the feedback from instructors on my projects was incredibly helpful. I feel much more confident in my design skills now.', imageAlt: 'Diana Garcia smiling', imageDesc: 'Headshot of Diana Garcia' },
  { id: 5, name: 'Ethan Lee', course: 'Automotive Software Engineering', rating: 5, quote: 'The design principles taught were excellent, and the feedback from instructors on my projects was incredibly helpful. I feel much more confident in my design skills now.', imageAlt: 'Ethan Lee portrait', imageDesc: 'Professional photo of Ethan Lee' },
  { id: 6, name: 'Fiona Chen', course: 'Data Structures and Algorithms', rating: 4, quote: 'Challenging but rewarding course. It pushed my DSA skills to the next level. The community forum was also a great place to discuss complex problems.', imageAlt: 'Fiona Chen headshot', imageDesc: 'Headshot of Fiona Chen' },
];

const TestimonialsPage = () => {
  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Student Success Stories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hear directly from our learners about their experiences and achievements.</p>
      </motion.section>

      {/* Testimonials Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="relative pb-4">
                   <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                   <div className="flex items-center gap-4">
                       <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                           <img  class="w-full h-full object-cover" alt={testimonial.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                       </div>
                       <div>
                           <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                           <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                       </div>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between pt-0">
                  <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted-foreground'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{testimonial.rating}.0</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Call to Action */}
       <section className="text-center container border-t pt-16">
           <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Success Story?</h2>
           <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Join thousands of learners who have transformed their careers with Duxes Academy.</p>
           <Button size="lg" asChild className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white">
               <Link to="/courses">Find Your Course</Link>
           </Button>
       </section>
    </div>
  );
};

export default TestimonialsPage;
  