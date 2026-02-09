import React from "react";
import { motion } from 'framer-motion'

const ProfessionalPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        
      <div className="fade-in">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-800/30 rounded-lg mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Advanced Embedded Software Development – Professional Skillset

        </h1>
      </motion.section>
      </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Real-Time Operating Systems (RTOS) – Advanced"
            img="https://media.licdn.com/dms/image/v2/D5612AQF5-jLujPgxIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714396288645?e=2147483647&v=beta&t=_5pPdGq_VhKGyWJpFtTv2GtD3jAs0D7pPgAD1q9ZiZU"
          />
          <SkillCard
            title="Embedded Linux Development (Yocto, Kernel, Drivers)"
            img="https://i.ytimg.com/vi/DnAbIkry-oA/maxresdefault.jpg"
          />
          <SkillCard
            title="Automotive Embedded Systems (AUTOSAR)"
            img="https://promwad.com/sites/default/files/1-autosar-architecture-layers.png"
          />
          <SkillCard
            title="Baremetal Programming for Performance Optimization"
            img="https://intechhouse.com/wp-content/uploads/2024/06/new-metal-bar-1024x631.jpg"
          />
          <SkillCard
            title="Device Driver Development"
            img="https://www.incrux.in/images/windows-driver-development.jpg"
          />
          <SkillCard
            title="Advanced Debugging Techniques (JTAG, SWD, Trace)"
            img="https://143667342.fs1.hubspotusercontent-eu1.net/hub/143667342/hubfs/WEB%202025/Images/Developers%20Debugging/blue%20board%20and%20debugging%20a%20renesas%20board..jpg?width=900&height=600&name=blue%20board%20and%20debugging%20a%20renesas%20board..jpg"
          />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, img }) => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-cover rounded-t-2xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      </div>
    </div>
  );
};

export default ProfessionalPage;
