import React from "react";
import { motion } from 'framer-motion';


const FresherPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        {/* Title Section with Background */}
       

        <div className="fade-in">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary"> Embedded Systems – Fresher Skillset
        </h1>
      </motion.section>
      </div>

        {/* Core Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Core Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              title="Embedded C Programming"
              img="https://www.edutechlearning.com/myaccount/uploader/uploaded/4/files/learn-c-programming-for-beginners-course201712061822480821290.jpg"
            />
            <SkillCard
              title="Microcontrollers & Firmware Basics"
              img="https://arshon.com/blog/wp-content/uploads/2024/09/Untitled-design-2-1-scaled.jpg"
            />
            <SkillCard
              title="Debugging & Testing"
              img="https://techdifferences.com/wp-content/uploads/2019/06/Testing-Vs-Debugging.jpg"
            />
          </div>
        </section>

        {/* Applied Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Applied Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              title="IoT Projects with Embedded Systems"
              img="https://set.jainuniversity.ac.in/uploads/blog/Embedded-vs-IOT.jpg"
            />
            <SkillCard
              title="Embedded Python"
              img="https://www.mouser.com/blog/Portals/11/Python_shutterstock_288042338.png"
            />
          </div>
        </section>

        {/* Specialization */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Optional Advanced Specialization
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <SkillCard
              title="Automotive Embedded"
              img="https://www.taaltech.com/wp-content/uploads/2023/08/8-current-future-trends-disrupting-automotive-embedded-systems-web-banner.jpg"
            />
            <SkillCard
              title="Embedded Linux"
              img="https://info.itemis.com/hubfs/Embedded-Linux1-1.png"
            />
            <SkillCard
              title="BLE & Wireless Comm."
              img="https://predictabledesigns.com/wp-content/uploads/2022/07/WirelessNetwork-1-1024x567.jpg"
            />
            <SkillCard
              title="AI Tools for Efficiency"
              img="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Generative_AI_Tools.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const SkillCard = ({ title, img }) => {
  return (
    <div className="bg-gray-50 border rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      </div>
    </div>
  );
};

export default FresherPage;