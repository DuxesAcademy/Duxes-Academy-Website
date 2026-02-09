import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Bio-Medical Surgical Glove Pinhole Detection System</b> automates the quality-testing process for surgical gloves by using <b>pressure-based sensing technology</b>.
          Each glove is inflated to a controlled pressure, and any deviation is analyzed to detect leaks or pinholes.
          The setup comprises <b>16 STM32-based test modules</b>, each equipped with multiple actuators, pressure sensors, and solenoid valves for automated air-filling and measurement.
          Results are classified as <b>Good, Bad, or Retest</b> based on the pressure data captured through the sensor array.
          The system eliminates manual inspection, ensuring higher accuracy, speed, and consistency in glove quality testing.

        </p> 
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: " STM32" },
            { name: " UART (RS-232), ADC, Timers" },
            { name: " LCD Display, Pressure Sensors" },
            { name: "Actuators, Solenoid Valves, Relays" },
            { name: "STM32CubeIDE" },
            { name: "Embedded C" },
            { name: "Data logging and result visualization" },

            
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
            { name: "Embedded C Programming & Peripheral Configuration", level: "90%" },
            { name: "UART Communication (RS-232) and Multi-Module Coordination", level: "95%" },
            { name: "ADC-based Pressure Sensor Interfacing", level: "85%" },
            { name: "Actuator Control & Timing Management", level: "88%" },
            { name: "Hardware Integration & Debugging", level: "80%" },
            { name: "System Validation and Fault Diagnosis", level: "92%" },
            { name: "Documentation & Test Procedure Design", level: "87%" },
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