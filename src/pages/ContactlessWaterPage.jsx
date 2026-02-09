import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Contactless Water Level Indicator</b> detects water levels through tank walls using <b>capacitive sensors</b> — eliminating direct liquid contact.
        <br />
 The system processes data via a <b>PIC microcontroller</b> to control pumps, trigger buzzers, and display water level status on a 3-digit <b>7-segment display.</b>
 <br />
 It supports error detection and alert mechanisms to ensure safe and precise operation in demanding environments.

        </p>   
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "PIC16F877A / PIC18F4520" },
            { name: "3-Digit 7-Segment via 74HC595" },
            { name: "Capacitive Water Level Sensors" },
            { name: "Relay Module, Buzzer" },
            { name: "4 MHz Crystal Oscillator" },
            { name: "5 V Regulated DC" }
          

            
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
            { name: "Embedded C Programming (XC8 Compiler)", level: "90%" },
            { name: "Contactless Sensor Integration", level: "95%" },
            { name: "Display Control Using Shift Registers", level: "85%" },
            { name: "Relay & Buzzer Control", level: "88%" },
            { name: "Interrupt Handling and Signal Filtering", level: "80%" },
            { name: "Error Detection and Debouncing Techniques", level: "92%" },
            { name: "System Integration and Testing", level: "87%" },
            
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