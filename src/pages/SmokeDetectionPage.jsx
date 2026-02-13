import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
          <b>Smart Smoke Detector with Adaptive Calibration </b>
 project implements an intelligent smoke detection system using an STM32L433 microcontroller and a TPS8802 photoelectric smoke sensor. The system continuously monitors air quality by sampling the sensor's analog output at 50 Hz, applies digital filtering (moving average + exponential filter), and dynamically calibrates a baseline clean-air level. When smoke particles cause the sensor reading to rise significantly above the calibrated baseline, the system triggers an audible alarm via the TPS8802's integrated horn driver. Additional features include rapid-rise detection for fast‑response events, periodic sensor health monitoring, and a debug interface over UART for real‑time status logging. The device transitions through boot, baseline calibration, and normal operation states, with a fixed LED (PB13) indicating power‑on status.
        </p> 
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: "Microcontroller: STMicroelectronics STM32L433 (ARM Cortex‑M4, 80 MHz)" },
            { name: "Smoke Sensor: Texas Instruments TPS8802 analog photoelectric smoke detector" },
            { name: "Communication Interfaces: I²C (sensor configuration), UART (debug output)" },
            { name: "Analog Interface: 12‑bit ADC (channel 5) for reading sensor output" },
            { name: "GPIO: PB13 configured as a static high output (formerly LED, repurposed)" },
            { name: "Power Management: On‑board SMPS enable pins controlled by GPIO" },
            { name:"IDE: STM32CubeIDE (or any ARM GCC toolchain)"},
            { name: "HAL Library: STM32L4 HAL drivers for peripheral abstraction"},
            { name: "Programming Language: C++ (with GCC extensions)"},
            { name: "Real‑time Sampling: 50 Hz fixed‑interval sampling using HAL_GetTick()"},
            { name: "Digital Filtering: Moving average (10 samples) + exponential filter (α = 0.1"},
            { name: "State Machine: Boot → Baseline → Ready (three states)"},
            
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
           
            { name: "Sensor calibration and integration (RFID, IR, Tilt, Proximity)", level: "85%" },
            { name: "Communication protocol design (I²C, GPIO, UART)", level: "88%" },
            { name: "Board bring-up and hardware debugging", level: "80%" },
            { name: "System integration and real-time testing", level: "92%" },
            { name: "Design/code review and collaborative development practices", level: "87%" },
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
                    name: "Raju",
                    role: "Technical Lead",
                    
                    linkedin: "https://www.linkedin.com/in/raju-chaluva",
                    image: "/images/raju.jpeg",
                },
                {
                    name: "Jeevan",
                    role: "Hardware Engineer",
                    linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/jeevan.jpeg",
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