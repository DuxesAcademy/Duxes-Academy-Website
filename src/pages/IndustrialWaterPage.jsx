import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Smart Water Level Detection</b> System automates pump control and provides <b>visual/audio alerts</b> to optimize water management in industrial and residential setups.
        <br />
 By combining conductive level sensing with intelligent logic control, the system detects water levels, activates pumps when required, and stops them when tanks are full or empty.
 <br />
 LED indicators show tank status in real time, and the integrated flow sensor confirms water movement, improving reliability and conserving energy.

        </p>   
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "PIC16F877A / PIC18F4520" },
            { name: "MPLAB X IDE with XC8" },
            { name: "Conductive Water Level Sensors, Flow Sensor" },
            { name: "LED Indicators, Relay Module, Buzzer" },
            { name: " 5V Regulated DC" },
          

            
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
            { name: "Microcontroller Programming (Embedded C)", level: "90%" },
            { name: "Sensor Interfacing and Calibration", level: "95%" },
            { name: "Relay & Pump Control Logic", level: "85%" },
            { name: "Safety System Design (Overflow & Dry-Run Protection)", level: "88%" },
            { name: "Hardware Debugging and Testing", level: "80%" },
            
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