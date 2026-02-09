import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Smart Breadboard</b> project aims to address one of the most common challenges faced by electronics learners — <b>debugging on traditional breadboards.</b>
        While breadboards are invaluable for prototyping, they often lead to <b>clustered wiring, difficult voltage tracing, and confusing debugging processes.</b>
        <br /> <br />
        The Smart Breadboard introduces an <b>intelligent monitoring system</b> that helps users identify incorrect connections, shorts, or open circuits quickly.
        This system enhances learning by allowing students to <b>focus on circuit logic rather than wiring complexity,</b> making it ideal for classrooms, labs, and beginner-level embedded training.
        <br /><br />
        Through integrated indicators and simple sensor feedback, the Smart Breadboard promotes a cleaner prototyping experience and faster hardware debugging.
        </p>   
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "ESP32 / Arduino Nano" },
            { name: "Voltage and continuity detection circuits" },
            { name: "LEDs for short/open detection" },
            { name: "GPIO, ADC, I2C" },
            { name: "Arduino IDE" },
            { name: " Embedded C / C++" },

            
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
            { name: "Circuit Design and Breadboard Debugging Concepts", level: "90%" },
            { name: "Signal Detection and Monitoring", level: "95%" },
            { name: "Sensor-Based Error Indication", level: "85%" },
            { name: "Embedded C Programming for Real-Time Monitoring", level: "88%" },
            { name: "Analog Voltage Reading and Continuity Testing", level: "80%" },
            { name: "Circuit Prototyping and Error Handling", level: "92%" },
            { name: "Educational Product Design Thinking", level: "87%" },
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
                    name: "Ashwini",
                    role: "Firmware Developer & Testing",
                    linkedin: "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                    image: "/images/ashwini.png",
                },
                {
                    name: "Jeevan",
                    role: " Circuit Design, Hardware Assembly, Sensor Integration & Debug Logic",
                    
                    linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/jeevan.jpeg",
                },
                
                
                ].map((member, idx) => (
                <div
                    key={idx}
                    className="md:h-64 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
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