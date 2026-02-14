import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

const EmbeddedCourse = () => {
  // Registration & modal state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Form fields & validation
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzKk2IZDtLAqDAqW0VBrW9TlNPuJeZtxJyUchjaP8oEMSlyudq3EUNyFEAMfKto2lgUXQ/exec";

  // If you set a SECRET_TOKEN in the Apps Script, put the same value here.
  // If you didn't set one, leave as an empty string.
  const SHEET_SECRET = ""; // e.g. "my-client-secret" or ""

  const upiId = "duxeslabsprivatelimited.9535910144.ibz@icici";
  const whatsappNumber = "916363672060";

  const copyUpi = () => {
    try {
      navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  const validateEmail = (value) => {
    return /^\S+@\S+\.\S+$/.test(value);
  };

  const handleRegisterClick = (course) => {
    setSelectedCourse(course);
    // Open the info-collection form first (not the payment modal)
    setIsFormOpen(true);
    setFormError("");
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleFormSubmit = async (e) => {
    e && e.preventDefault();
    setFormError("");

    // Basic validation
    if (!name.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setFormError("Please enter your phone number.");
      return;
    }
    if (!email.trim() || !validateEmail(email.trim())) {
      setFormError("Please enter a valid e-mail address.");
      return;
    }
    if (!selectedCourse) {
      setFormError("No course selected. Please try registering again.");
      return;
    }

    setSubmitting(true);

    try {
      // Important CORS fix:
      // Make the POST a "simple request" so the browser won't send a preflight OPTIONS.
      // To do that, send form-encoded data (application/x-www-form-urlencoded) and DO NOT set custom headers.
      // Apps Script doPost will receive form data in e.parameter.
      const params = new URLSearchParams();
      params.append("name", name.trim());
      params.append("phone", phone.trim());
      params.append("email", email.trim());
      params.append("courseId", selectedCourse.id ?? "");
      params.append("courseTitle", selectedCourse.title ?? "");
      params.append("timestamp", new Date().toISOString());
      if (SHEET_SECRET) params.append("secret", SHEET_SECRET);

      // Do not set 'Content-Type' header here. Fetch will set it to
      // application/x-www-form-urlencoded which qualifies as a simple request (no preflight).
      const res = await fetch(SHEET_ENDPOINT, {
        method: "POST",
        body: params,
        // mode: "cors" is default; no custom headers allowed for simple request
      });

      // Note: when sending a simple request to Apps Script exec URL (Anyone, even anonymous),
      // the response will generally be OK. Apps Script web apps don't allow custom response headers,
      // but a simple POST avoids the preflight and will succeed.
      if (!res.ok) {
        // Attempt to read response text for more info
        const text = await res.text().catch(() => "");
        throw new Error(
          `Submission failed: ${res.status} ${res.statusText} ${text}`
        );
      }

      // On success: close form and show existing payment modal unchanged
      setIsFormOpen(false);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error submitting form to sheet endpoint:", err);
      setFormError(
        "Failed to submit details. Please try again or contact support."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ---------------- INLINE RESPONSIVE CSS ---------------- */}
      <style>{`
        .section-container {
          padding: clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px);
          max-width: 1200px;
          margin: 0 auto;
          font-family: Inter, sans-serif;
          color: #222;
       
        }

        .heading {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 700;
          line-height: 1.3;
        }

        .banner-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 30px;
        }

        .custom-bullet li::marker {
        font-size: 1.3rem; /* Increase size here */
        }

        .banner-img {
          width: 100%;
          max-width: 350px;
          border-radius: 12px;
          flex: 1 1 45%;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 20px;
        }

        .badge {
          padding: 8px 16px;
          background: #F4F6F7;
          border-radius: 50px;
          font-size: 14px;
        }

        .section-title {
          font-size: clamp(22px, 4vw, 26px);
          font-weight: 700;
          margin-top: 40px;
          margin-bottom: 15px;
        }

        .text-para {
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.6;
          color: #444;
        }

        .enroll-btn {
          background: #DE5769;
          color: #fff;
          padding: 14px 34px;
          border: none;
          border-radius: 8px;
          margin-top: 25px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
        }

        /* ---------- 2 COL RESPONSIVE GRID ---------- */
        .two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-top: 20px;
        }
        @media (min-width: 768px) {
          .two-col {
            grid-template-columns: 1fr 1fr;
          }
        }

        .sub-heading {
          font-size: clamp(18px, 3vw, 22px);
          font-weight: 800;
          margin-bottom: 10px;
        }

        /* ---------- TWO COLUMN LIST ---------- */
        .two-col-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin-top: 20px;
        }
        @media (min-width: 768px) {
          .two-col-list {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ---------- MODULE GRID ---------- */
        .modules-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 600px) {
          .modules-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .modules-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .module-card {
          padding: 20px;
          border: 1px solid #E5E5E5;
          border-radius: 10px;
          background: #fff;
        }

        .module-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .module-text {
          font-size: 15px;
          line-height: 1.6;
        }
      `}</style>

      {/* ------------------ PAGE CONTENT --------------------- */}
      <div>
        {/* Banner Section */}
        <section className="section-container justify-center text-center">
          <div className="lg:-mt-16 -mt-10">
            <h1 className="heading">
              <span style={{ color: "#10899A" }}>Embedded </span>
              <span style={{ color: "#DE5769" }}>System </span>
              Development <br />
              (Generic, IoT, Automotive)
            </h1>

            <div className="banner-wrap justify-center">
              <img src="/images/c1.1.jpg" alt="circuit" className="banner-img" />
              <img src="/images/c1.2.jpg" alt="chip" className="banner-img" />
            </div>
          </div>
          <div className="badge-row justify-center">
            <div className="badge flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#10899A" strokeWidth="4" fill="none"/>
                <line x1="24" y1="24" x2="24" y2="12" stroke="#10899A" strokeWidth="4" strokeLinecap="round"/>
                <line x1="24" y1="24" x2="32" y2="28" stroke="#10899A" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <span>12 Weeks (3–4 hrs/week)</span>
            </div>

            <div className="badge flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L24 10L42 18L24 26L6 18Z"
                      stroke="#10899A" stroke-width="3" stroke-linejoin="round" fill="none"/>
                <path d="M12 22V29C12 34 18 38 24 38C30 38 36 34 36 29V22"
                      stroke="#10899A" stroke-width="3" stroke-linecap="round" fill="none"/>
                <line x1="36" y1="22" x2="36" y2="32"
                      stroke="#10899A" stroke-width="3" stroke-linecap="round"/>
                <line x1="36" y1="32" x2="32" y2="32"
                      stroke="#10899A" stroke-width="3" stroke-linecap="round"/>
              </svg>
              <span>Beginner → Intermediate</span></div>
          </div>

          <h2 className="section-title font-bold text-[#DE5769]">About This Course</h2>
          <p className="text-para">
            A practical, project-driven introduction to embedded systems: microcontrollers,
            peripherals, low-level C, debugging, and embedded software workflow.Ideal for fresh grads and early-career engineers.
          </p>

          {/* <button className="enroll-btn">Enroll Now</button> */}
          <br /> <br />

          <hr class="border-t-2 border-[#C2E8EA]" />
        </section>

        {/* Audience & Prerequisites */}
        <section className="section-container">
          <div className="lg:-mt-24 -mt-10">
            <div className="two-col">
              <div>
                <h3 className="sub-heading text-[#10899A] ">Target Audience</h3>
                <p className="text-para">
                  This course is ideal for beginners, electronics students, and junior firmware
                  engineers looking to specialize in embedded systems.
                </p>
              </div>

              <div>
                <h3 className="sub-heading text-[#10899A]">Prerequisites</h3>
                <p className="text-para">
                  Basic C programming and digital electronics. Microcontroller familiarity is helpful.
                </p>

              </div>
            </div>
            <br /> <hr class="border-t-2 border-[#C2E8EA]" />
          </div>

        </section>

        {/* Learning Outcomes */}
        <section className="section-container">
          <div className="lg:-mt-20 -mt-10">
            <h3 className="sub-heading text-[#10899A]">Learning Outcomes</h3>
            <ul className="two-col-list list-disc pl-4 marker:text-[#10899A] custom-bullet">
              <li>Understand MCU architecture, memory map, and peripheral basics.</li>
              <li>Interface sensors/actuators via GPIO, ADC, UART, I²C, SPI.</li>
              <li>Write clean, idiomatic embedded C and use vendor SDKs.</li>
              <li>Use basic power management and debugging tools (JTAG, SWD, logic analyzer).</li>
            </ul>


          </div>
          <br /> <hr class="border-t-2 border-[#C2E8EA]" />
        </section>

        {/* Modules */}
        <section className="section-container">
          <div className="lg:-mt-20 -mt-10">
            <h3 className="sub-heading text-[#10899A]">Modules</h3>
            <div className="modules-grid">
              {modules.map((m, i) => (
                <div key={i} className="module-card">
                  <h4 className="module-title text-[#DE5769]">{m.title}</h4>
                  <p className="module-text">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <br /> <br /><hr class="border-t-2 border-[#C2E8EA]" />
        </section>

        {/* Capstone */}
        <section className="section-container">
          <div className="lg:-mt-24 -mt-20">
            <div className="grid gap-10"
              style={{ gridTemplateColumns: "1fr", marginTop: "20px" }}>
              <style>
                {`
                /* Mobile spacing */
                .capstone-item {
                    margin-top: 25px;
                }

                /* Remove spacing when switching to 3 columns */
                @media (min-width: 900px) {
                    .capstone-3col {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 60px;
                    }
                    .capstone-item {
                    margin-top: 0;
                    }
                }
                `}
              </style>

              <div className="capstone-3col">
                {/* 1 — Labs / Capstone */}
                <div className="capstone-item">
                  <h3 className="sub-heading text-[#10899A]">Labs / Capstone</h3>
                  <p className="text-para">
                    Build a battery-powered sensor node (temperature + push-button + LED) with sleep/wake, data sampling, and UART logging.
                  </p>
                </div>



                {/* 3 — Suggested hardware/tools */}
                <div className="capstone-item">
                  <h3 className="sub-heading text-[#10899A]">Suggested hardware/tools</h3>
                  <ul className="list-disc pl-4 marker:text-[#10899A] custom-bullet">
                    <li>STM32 Nucleo or STM32F4 Discovery</li>
                    <li>Segger/J-Link or ST-LINK,</li>
                    <li>Multimeter & logic analyzer (Saleae clone)</li>
                    <li>Keil/STM32CubeIDE/VSCode + PlatformIO.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> <br /> <hr class="border-t-2 border-[#C2E8EA]" />
        </section>

        {/* Assessment & Certification */}
        <section className="section-container">
          <div className="capstone-item">
            <div className="lg:-mt-24 -mt-16">
              <h3 className="sub-heading text-[#10899A]">Assessment & Certification</h3>
              <ul>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#10899A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7 12 10 15 17 8" stroke="#10899A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Weekly lab submissions (60%)
                </li>

                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#10899A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 12 10 15 17 8" stroke="#10899A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  Final capstone demo & report (40%)
                </li>

                <li className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#10899A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 12 10 15 17 8" stroke="#10899A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  Certificate on ≥70% aggregate.
                </li>

              </ul>
            </div>
          </div>

        </section>

        {/* ---------- REGISTER BUTTON (centered at the bottom) ---------- */}
        <div className="section-container">
          <div className="lg:-mt-20 flex justify-center -mt-4">
            <button
              onClick={() =>
                handleRegisterClick({
                  id: "Embedded System Development (Generic, IoT, Automotive)",
                  title: "Embedded System Development(Generic, IoT, Automotive)",
                })
              }
              className="bg-[#DE5769] hover:bg-[#10899A] text-white font-semibold px-6 py-2 rounded-lg transition-all"
            >
              Register
            </button>
          </div>
        </div>

        {/* FORM MODAL (shown BEFORE payment modal) */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative animate-scaleIn">
              {/* CLOSE */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
              >
                ✕
              </button>

              <h3 className="text-xl font-bold text-center mb-4">
                Tell us about yourself
              </h3>

              <p className="text-sm text-center text-gray-600 mb-4">
                Please provide your details so we can confirm your registration before payment.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full mt-1 ppx-3 py-2 border rounded-md text-sm"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {formError && (
                  <p className="text-red-600 text-xs text-center">{formError}</p>
                )}

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#DE5769] hover:bg-[#10899A] text-white font-semibold px-6 py-2 rounded-lg transition-all"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL (payment modal — unchanged layout & structure) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative animate-scaleIn">
              {/* CLOSE */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
              >
                ✕
              </button>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-center mb-4">
                Complete Your Registration
              </h3>

              {/* QR CODE */}
              <div className="flex justify-center mb-4">
                <img
                  src="/images/upiqr.jpeg"
                  alt="UPI QR Code"
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* UPI ID */}
              <div
                onClick={copyUpi}
                className="bg-gray-100 cursor-pointer flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium mb-2 hover:bg-gray-200"
              >
                <span>{upiId}</span>

                <FiCopy
                  className="text-gray-500 text-lg hover:text-black"
                  title="Copy UPI ID"
                />
              </div>

              {copied && (
                <p className="text-green-600 text-xs text-center mb-3">
                  UPI ID copied to clipboard
                </p>
              )}

              {/* SHARE PAYMENT */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello Duxes Academy 👋

I would like to register for the course:
📘 *${selectedCourse?.title}*

I have completed the payment via UPI.
Please guide me with the next steps.

Thank you.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#10899A]  text-white py-2 rounded-lg font-semibold transition-all"
              >
                Share Payment Details
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmbeddedCourse;

const modules = [
  { title: "Module 1", desc: "Introduction to embedded systems, toolchains, and development flow" },
  { title: "Module 2", desc: "ARM Cortex-M basics, memory map, interrupts and NVIC." },
  { title: "Module 3", desc: "GPIO, timers, PWM, ADC fundamentals." },
  { title: "Module 4", desc: "Serial comms: UART, I2C, SPI — protocols & drivers." },
  { title: "Module 5", desc: "Peripheral drivers & HAL vs bare-metal design." },
  { title: "Module 6", desc: "Power modes, low-power patterns, RTC, and watchdog." },
  { title: "Module 7", desc: "Debugging & testing: unit tests, hardware-in-loop, logic analyzers" },
  { title: "Module 8", desc: "Final: Integrate components and demo" },
  { title: "Module 9", desc: "Automotive bus systems: CAN, CAN-FD, LIN overview." },
  { title: "Module 10", desc: "CAN stack, frames, filters, and bus sniffing tools." },
  { title: "Module 11", desc: "Diagnostic communication: UDS basics and ECU concepts." },
  { title: "Module 12", desc: "AUTOSAR fundamentals: Classic vs Adaptive." },
  { title: "Module 13", desc: "Safety basics: ISO 26262 introduction and safety lifecycle." },
  { title: "Module 14", desc: "Functional safety techniques: redundancy, diagnostics, and watchdogs."},
  { title: "Module 15", desc: "Real-time design patterns for automotive systems." },
  { title: "Module 16", desc: "Hardware and EMC considerations, ruggedization." },
  { title: "Module 17", desc: "Over-the-air concerns and secure updates in vehicle context." },
  { title: "Module 18", desc: "Final case study: develop a CAN-based ECU demo with diagnostics." },
];