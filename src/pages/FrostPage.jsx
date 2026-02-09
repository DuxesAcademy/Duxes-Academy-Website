import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>FROST</b> system is a smart hydration reminder that uses IoT and embedded intelligence to track hydration habits. It integrates sensors, display modules, and Bluetooth-based audio feedback to encourage healthy routines.
        </p>
        <p className="text-gray-700">
          <strong>Website:</strong> <a href="https://www.frostactive.com" target="_blank" rel="noopener noreferrer">www.frostactive.com</a>
        </p>
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "ESP32-WROOM-32" },
            { name: "GC9A01 Display (LovyanGFX)" },
            { name: "BLE" },
            { name: "Wi-Fi" },
            { name: "FreeRTOS" },
            { name: "SD Card Storage" },
            { name: "Audio I2S Interface" },
            { name: "Arduino IDE"},
            { name: "C/C++"},
          ].map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              className="border border-gray-200 rounded-xl bg-[#EFFDFE] p-4 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{tech.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Skills Learned */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Skills Learned</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Embedded C Programming", level: "90%" },
            { name: "RTOS Task Management", level: "95%" },
            { name: "IoT Architecture", level: "85%" },
            { name: "Bluetooth Communication", level: "88%" },
            { name: "Hardware Debugging", level: "80%" },
            { name: "Display Interface Design", level: "92%" },
            { name: "SD Card File Systems", level: "87%" },
            { name: "Version Control (Git)", level: "85%" },
            { name: "Documentation", level: "90%" },
          ].map((skill, i) => (
            <div key={i}>
              <p className="text-gray-800 font-medium mb-1">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#10899A] h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section>
            <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                {
                    name: "Jeevan",
                    role: "Display & UI Integration Firmware Developer",
                    
                    linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/jeevan.jpeg",
                },
                {
                    name: "Ayesha Firdous",
                    role: " Embedded Firmware Developer",
                    linkedin: "https://www.linkedin.com/in/ayeshafirdous786?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                    image: "/images/ayesha.jpeg",
                },
                {
                    name: "Varun",
                    role: "Frontend Developer",
                    linkedin: "https://www.linkedin.com/in/varun-j-t-8b3a571b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm6dv0Xt9SSqrRuWPi%2BROtg%3D%3D",
                    image: "/images/varun.jpg",
                },
                
                ].map((member, idx) => (
                <div
                    key={idx}
                    className="md:h-60 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
                >
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-gray-200"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.desc}</p>
                    <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} className="text-gray-500 hover:text-blue-600">
                        <FaLinkedin size={18} />
                    </a>
                    </div>
                </div>
                ))}
            </div>
            </section>

    </div>
  );
};

export default ProjectDetails;