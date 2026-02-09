import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Virtual Lab</b> is an innovative remote hardware-access system that enables learners and developers to perform <b>real-time embedded experiments</b> over the internet.
        Each workstation (Virtual Board) consists of an <b>ESP32 controller</b>, sensors, and actuators such as LEDs, buzzers, and motors.
        All boards are linked to a <b>central Virtual Machine (VM)</b> that acts as a server for communication, control, and feedback.
        Users can upload code, observe hardware behavior, and monitor live sensor data through remote desktop tools such as <b>TeamViewer</b> or <b>AnyDesk.</b>
        This setup replicates a physical lab experience online — allowing global learners to test, debug, and validate embedded systems without being physically present in the lab.
        The platform is scalable and supports future extensions for <b>automated test reporting and cloud-based IoT simulations.</b>
        </p> 
        <p className="text-gray-700">
          <strong>Website:</strong> <a href="https://www.virtuallabx.com" target="_blank" rel="noopener noreferrer">www.virtuallabx.com</a>
        </p>
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "ESP32-WROOM-32" },
            { name: "Virtual Machine (Linux/Windows VM)" },
            { name: " Wi-Fi" },
            { name: "IR Sensor, Buzzer, DC Motor, LED Indicators" },
            { name: "UART, GPIO, PWM" },
            { name: "Arduino IDE / PlatformIO" },
            { name: "TeamViewer, AnyDesk for remote access" },
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
            { name: "Remote Hardware Access & Control Concepts", level: "90%" },
            { name: "ESP32 Programming and Peripheral Handling", level: "95%" },
            { name: "Network Configuration and Serial Communication", level: "85%" },
            { name: "Real-Time Sensor and Actuator Management", level: "88%" },
            { name: "Virtual Machine Setup and Remote Interface Deployment", level: "80%" },
            { name: "Multi-User Experiment Management and Debugging", level: "92%" },
            { name: "Embedded System Integration and Test Automation", level: "87%" },
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
                    role: " System Design & Firmware Developer",
                    
                    linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/jeevan.jpeg",
                },
                
                {
                    name: "Varun",
                    role: "Testing, Monitoring & Remote Validation",
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