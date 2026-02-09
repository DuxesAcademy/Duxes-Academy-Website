import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Prostir Smart Stirrer</b> provides accurate speed regulation using 
       <b> PWM-based BLDC motor control.</b>
        <br />
 A <b>rotary knob interface</b> allows users to set desired speed, while sensors measure actual RPM to maintain precise stirring performance.
 <br />
 The device is compact, energy-efficient, and ideal for chemical, pharmaceutical, and academic laboratories.


        </p>   
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "PIC18F Series" },
            { name: "12 V DC BLDC Motor (340 RPM nominal)" },
            { name: " PWM Speed Control" },
            { name: " Anders Smart Rotary Knob / Potentiometer" },
            { name: "16×2 LCD Display" },
            { name: "12 V Regulated DC" },
            {name: "KiCad, Proteus, Arduino Serial Monitor"}
          

            
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
            { name: "PWM Generation for Motor Control", level: "90%" },
            { name: "Analog Input Handling and Sensor Integration", level: "95%" },
            { name: "RPM Measurement using Interrupts", level: "85%" },
            { name: "LCD Interfacing and Display Logic", level: "88%" },
            { name: "Embedded C Programming and Testing", level: "80%" },
            { name: "PCB Design, Hardware Debugging, and System Integration", level: "92%" },
         
            
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
                    name: "Prithviraj M H",
                    desc: "Oversees system architecture, development, and technical roadmap. Leads team coordination, quality assurance, and infrastructure planning.",
                    role: "Technical Lead",
                    linkedin: "https://www.linkedin.com/in/prithviraj-mh-40020889?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/prithviraj.jpeg",
                },
                {
                    name: "Varsha",
                    role: " Embedded Software Developer",  
                    desc: "Firmware and sensor programming, performance optimization, and validation.",   
                    linkedin: "https://www.linkedin.com/in/varsha-shetty-b46ba1250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/varsha.jpeg",
                },
                
                {
                    name: "Hemanth",
                    role: " Hardware Engineer",
                    desc: "Circuit design, component selection, PCB layout, and prototype testing.",
                    linkedin: "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/hemanth.jpeg",
                }
            ].map((member, idx) => (
                <div
                    key={idx}
                    className="md:h-80 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
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