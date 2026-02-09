import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>Automated Storage Tower</b> is a smart, self-operating system that automates the process of storing and retrieving luggage.
        <br />
        It leverages<b> embedded control logic</b> to coordinate motors, sensors, and communication modules to handle storage tasks accurately and efficiently.
        <br />
        The system includes a  <b> remote access feature with OTP verification</b>, ensuring safe and authorized access for users.
        <br />
        This innovation significantly reduces manual intervention, offering a futuristic solution for luggage management in airports, malls, and corporate environments.

        </p> 
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: " STM32" },
            { name: " STM3232CubeIDE" },
            { name: "SPI, GPIO, UART" },
            { name: "Stepper Motor, DC Motor (custom driver circuits)" },
            { name: "RFID Reader, IR Sensor, Proximity Sensor, Tilt Sensor" },
            { name: " GUI-based control and OTP authentication system" },
            
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
            { name: "Motor control driver design and PWM handling", level: "95%" },
            { name: "Sensor calibration and integration (RFID, IR, Tilt, Proximity)", level: "85%" },
            { name: "Communication protocol design (SPI, GPIO, UART)", level: "88%" },
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
                    name: "Sidhanth",
                    role: "Firmware Developer",
                    
                    linkedin: "https://www.linkedin.com/in/siddhanth1809",
                    image: "/images/sidhanth.jpg",
                },
                {
                    name: "Hemanth",
                    role: "Hardware Engineer",
                    linkedin: "https://www.linkedin.com/in/hemanth-naik-811009356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/hemanth.jpeg",
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