import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <div className="-mt-8 max-w-6xl mx-auto p-8 space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-4">Project Description</h2>
        <p className="text-gray-700 mb-4">
        The <b>ROBOL (RORA)</b> project introduces an interactive educational robot built to teach <b>coding and problem-solving skills</b> to children aged 7–12 — without exposing them to screens or radiation-emitting devices.
        <br /><br />
The system consists of two main parts:
<br />
<b>The Slate –</b> where children place “command coins,” each representing a programming keyword.
<br />

<b>The Bot –</b> a robot that executes the commands in sequence after receiving them wirelessly from the slate.
<br /><br />

Each coin corresponds to a keyword derived from real programming syntax (e.g., move, turn, loop).
<br />
 Once a command sequence is arranged, the slider scans the tokens, transmits data to the controller, and sends it to the bot via a 433 MHz RF module for execution.
 <br /><br />
The system also supports <b>Braille-encoded command tokens,</b> allowing <b>visually-impaired children</b>to participate.
<br />
 The entire experience promotes logical thinking, sequencing, and creativity — making programming as simple as writing words in one’s native language.
        </p> 
     
        <p className="text-gray-700">
          <strong>Website:</strong> <a href="http://robo-l.com/" target="_blank" rel="noopener noreferrer">www.robo-l.com</a>
        </p>  
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-2xl font-bold text-[#DE5769] mb-6">Technologies Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-6">
          {[
            { name: " Arduino UNO / Arduino MEGA" },
            { name: "433 MHz RF Transmitter & Receiver" },
            { name: "Touch Sensor, Rain Sensor" },
            { name: "Sound Detection, Object Detection (IR), LDR" },
            { name: " Motors (DC & Servo), Buzzer, LEDs" },
            { name: "Command Coins with Braille 3×2 Matrix" },
            { name: "Arduino IDE, Embedded C" },

            
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
            { name: "Embedded System Design & Firmware Development", level: "90%" },
            { name: "RF Communication and Wireless Command Transmission", level: "95%" },
            { name: "Sensor Interfacing and Calibration", level: "85%" },
            { name: "Actuator Control using Motor Drivers (L293D)", level: "88%" },
            { name: "Hardware Debugging and State-Machine Implementation", level: "80%" },
            { name: "Accessibility Integration using Braille-based Inputs", level: "92%" },
            { name: "Educational Product Design and User Interaction Engineering", level: "87%" },
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
                    role: " Firmware Developer: Firmware and sensor programming, performance optimization, and validation(Slate & Bot Integration).",
                    linkedin: "https://www.linkedin.com/in/jadhav-ashwini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                    image: "/images/raju.jpeg",
                },
                {
                    name: "Ayesha Firdous",
                    role: " Hardware Interface, Sensor Integration, Testing, Debugging & Documentation",
                    linkedin: "https://www.linkedin.com/in/jeevan-r-m-504a70355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    image: "/images/ayesha.jpeg",
                },
                
                
                ].map((member, idx) => (
                <div
                    key={idx}
                    className="md:h-65 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
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