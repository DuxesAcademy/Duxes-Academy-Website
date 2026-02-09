
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Users } from 'lucide-react'; // Added Users icon import

const AboutPage = () => {
  // Placeholder timeline data
  const timeline = [
    { year: '2022', event: 'Platform Conception', description: 'Initial idea and planning phase.' },
    { year: '2023', event: 'Beta Launch', description: 'Launched with a small set of courses to gather feedback.' },
    { year: '2024', event: 'Public Release', description: 'Official launch with expanded course offerings.' },
    { year: '2025', event: '10,000+ Learners', description: 'Reached a significant milestone in our community growth.' },
  ];

  return (
    <div className="space-y-16 md:space-y-24 fade-in">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Duxes Academy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">At Duxes Academy, we believe in empowering minds with practical skills. Our mission is to make embedded software education accessible, hands-on, and industry-relevant..</p>
      </motion.section>

      {/* Vision and Mission */}
      <section className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
          Empowering future innovators through hands-on embedded systems education, bridging the gap between theory and real-world application.
          We strive to make industry-grade learning accessible, fostering growth for aspiring engineers worldwide.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
          To deliver industry-relevant embedded systems education through hands-on learning, expert mentorship, and real-world projects.
          We are committed to equipping learners with the skills and confidence to excel in today’s embedded technology landscape.
          </p>
        </motion.div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="w-full md:w-1/2 p-4 md:p-6 bg-card border rounded-lg shadow-sm md:border-0 md:shadow-none md:bg-transparent">
                <h3 className="text-xl font-semibold text-primary mb-1">{item.event}</h3>
                <time className="text-sm font-medium text-muted-foreground mb-2 block">{item.year}</time>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
               {/* Mobile Dot & Line */}
               <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background translate-x-[-8px] mt-1 md:hidden"></div>
               <div className="absolute left-0 top-4 bottom-[-3rem] w-0.5 bg-border translate-x-[-6px] md:hidden"></div>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Optional: Core Values Section */}
       <section className="bg-secondary/50 dark:bg-secondary/20 py-16 md:py-20">
           <div className="container text-center">
               <h2 className="text-3xl font-bold mb-10">Core Values</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {/* Example Values */}
                   <div className="p-4">
                       <Zap className="w-10 h-10 text-primary mx-auto mb-3"/>
                       <h3 className="font-semibold mb-1">Innovation</h3>
                       <p className="text-sm text-muted-foreground">Continuously improving our platform and offerings.</p>
                   </div>
                    <div className="p-4">
                       <Target className="w-10 h-10 text-primary mx-auto mb-3"/>
                       <h3 className="font-semibold mb-1">Student Success</h3>
                       <p className="text-sm text-muted-foreground">Prioritizing learner outcomes and support.</p>
                   </div>
                    <div className="p-4">
                       <Eye className="w-10 h-10 text-primary mx-auto mb-3"/>
                       <h3 className="font-semibold mb-1">Accessibility</h3>
                       <p className="text-sm text-muted-foreground">Making quality education available to everyone.</p>
                   </div>
                    <div className="p-4">
                       <Users className="w-10 h-10 text-primary mx-auto mb-3"/>
                       <h3 className="font-semibold mb-1">Community</h3>
                       <p className="text-sm text-muted-foreground">Fostering collaboration and connection.</p>
                   </div>
               </div>
           </div>
       </section>
    </div>
  );
};

export default AboutPage;
  