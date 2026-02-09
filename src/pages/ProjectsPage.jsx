
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added missing import

// Placeholder data
const studentProjects = [
  { id: 1, title: 'Embedded C', student: 'Kiran',  description: 'Embedded C projects involve developing software for embedded systems to control hardware and perform real-time tasks efficiently..', imageAlt: 'E-commerce website screenshot', imageDesc: 'Clean and modern online store interface', link: '#' },
  { id: 2, title: 'IoT with ESP 32', student: 'Varun', description: 'IoT ESP32 projects involve using the ESP32 microcontroller to build connected devices that communicate over the internet for various smart applications..', imageAlt: 'Data dashboard screenshot', imageDesc: 'Colorful charts showing climate data trends', link: '#' },
  { id: 3, title: 'Linux for Embedded Systems', student: 'Sanjay',  description: 'Linux for embedded systems projects involve using a lightweight Linux distribution to develop software for resource-constrained devices with specific hardware functionalities..', imageAlt: 'Mobile app screenshot', imageDesc: 'Screenshots of a recipe app interface on a phone', link: '#' },
  { id: 4, title: 'Python for MicroControllers', student: 'Prajwal',  description: 'Python for microcontrollers projects involve using Python (typically MicroPython) to program microcontrollers for building embedded systems and IoT applications..', imageAlt: 'Marketing report graph', imageDesc: 'Bar chart showing marketing campaign results', link: '#' },
];

const ProjectsPage = () => {
  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Student Showcase</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore the incredible projects created by our talented students.</p>
      </motion.section>

      {/* Projects Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                 <div className="relative h-48 w-full bg-secondary">
                    <img  class="absolute inset-0 w-full h-full object-cover" alt={project.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                     <div className="absolute bottom-2 left-4 text-white">
                         <CardTitle className="text-lg mb-0">{project.title}</CardTitle>
                         <CardDescription className="text-sm text-gray-200">by {project.student}</CardDescription>
                     </div>
                 </div>
                <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-sm mb-4">{project.description}</p>
                  </div>
                  {project.link && project.link !== '#' && (
                    <Button variant="outline" size="sm" asChild className="mt-auto w-fit">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Call to Action */}
       <section className="text-center container">
           <h2 className="text-2xl font-semibold mb-4">Ready to build your own amazing projects?</h2>
           <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Enroll in our courses and start creating your portfolio today.</p>
           <Button size="lg" asChild className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
               <Link to="/courses">Explore Courses</Link>
           </Button>
       </section>
    </div>
  );
};

export default ProjectsPage;
  