import React, { useState } from "react";
import { FiCopy, FiChevronDown } from "react-icons/fi";

const EmbeddedCourse = () => {
  // Registration & modal state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedPhase, setExpandedPhase] = useState(0);

  // Form fields & validation
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzKk2IZDtLAqDAqW0VBrW9TlNPuJeZtxJyUchjaP8oEMSlyudq3EUNyFEAMfKto2lgUXQ/exec";

  const SHEET_SECRET = "";

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
    setIsFormOpen(true);
    setFormError("");
    setName("");
    setPhone("");
    setEmail("");
  };

  const handleFormSubmit = async (e) => {
    e && e.preventDefault();
    setFormError("");

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
      const params = new URLSearchParams();
      params.append("name", name.trim());
      params.append("phone", phone.trim());
      params.append("email", email.trim());
      params.append("courseId", selectedCourse.id ?? "");
      params.append("courseTitle", selectedCourse.title ?? "");
      params.append("timestamp", new Date().toISOString());
      if (SHEET_SECRET) params.append("secret", SHEET_SECRET);

      const res = await fetch(SHEET_ENDPOINT, {
        method: "POST",
        body: params,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
          `Submission failed: ${res.status} ${res.statusText} ${text}`
        );
      }

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

  const phases = [
    {
      title: "Phase 1: Embedded Systems Foundations",
      subtitle: "Core Skills Alignment",
      points: [
        "Embedded C programming fundamentals",
        "Microcontroller architecture & peripherals",
        "Interrupts, timers, memory management",
        "Bare-metal programming concepts",
        "Introduction to RTOS & task scheduling",
        "Debugging, logging, and fault handling",
      ],
      outcome:
        "Participants gain a strong foundation in deterministic, low-level embedded development.",
      color: "#10899A",
    },
    {
      title: "Phase 2: Aerospace Systems & Avionics Basics",
      subtitle: "Domain Entry",
      points: [
        "Aerospace industry overview & system landscape",
        "Aircraft systems & avionics architecture",
        "Federated vs Integrated Modular Avionics (IMA)",
        "Redundancy, fault tolerance & fail-safe design",
        "Deterministic communication in avionics",
      ],
      outcome:
        "Engineers understand how software fits inside an aircraft, not just inside a board.",
      color: "#10899A",
    },
    {
      title: "Phase 3: Aerospace Standards & Compliance",
      subtitle: "Industry Reality Check",
      points: [
        "Introduction to DO-178C & safety-critical software",
        "Design Assurance Levels (DAL A–E)",
        "Software life cycle & certification expectations",
        "Requirement-based development principles",
        "Coding standards (MISRA-C overview)",
      ],
      standards: ["DO-178C", "ARINC 429", "ARINC 664 (AFDX)", "MIL-STD-1553"],
      outcome:
        "Participants learn why aerospace software is built differently and how compliance drives design.",
      color: "#10899A",
    },
    {
      title: "Phase 4: Verification, Testing & Quality Assurance",
      subtitle: "Where Most Engineers Struggle",
      points: [
        "Verification vs validation",
        "Requirement traceability",
        "Unit, integration & system testing",
        "Structural coverage concepts (Statement, Decision, MC/DC)",
        "Reviews, audits & certification mindset",
      ],
      outcome:
        "Engineers develop a verification-first thinking required in regulated environments.",
      color: "#10899A",
    },
    {
      title: "Phase 5: Live Aerospace-Style Projects",
      subtitle: "Proof of Capability",
      points: [
        "Requirement-driven embedded project",
        "DO-178C-aligned documentation set",
        "Coding, testing & traceability",
        "Review & audit simulation",
        "Configuration & change management",
      ],
      projects: [
        "Sensor monitoring & fault detection module",
        "Deterministic communication interface simulation",
        "Safety-critical control logic with test evidence",
      ],
      outcome:
        "Participants leave with real project artifacts, not just certificates.",
      color: "#10899A",
    },
  ];

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
          font-size: 1.3rem;
        }

        .banner-img {
          width: 100%;
          height: 320px;
          max-width: 310px;
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

        /* PHASE ACCORDION STYLES */
        .phase-accordion {
          border: 2px solid #E5E5E5;
          border-radius: 10px;
          margin-bottom: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: #fff;
        }

        .phase-accordion:hover {
          border-color: #10899A;
          box-shadow: 0 4px 12px rgba(16, 137, 154, 0.1);
        }

        .phase-header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: linear-gradient(135deg, #f8fafb 0%, #f0f5f7 100%);
          user-select: none;
        }

        .phase-header:hover {
          background: linear-gradient(135deg, #f0f5f7 0%, #e8f1f3 100%);
        }

        .phase-header-content h4 {
          font-size: 18px;
          font-weight: 700;
          color: #10899A;
          margin-bottom: 5px;
        }

        .phase-header-content p {
          font-size: 13px;
          color: #888;
          font-style: italic;
        }

        .phase-icon {
          transition: transform 0.3s ease;
          color: #10899A;
          font-size: 20px;
        }

        .phase-icon.open {
          transform: rotate(180deg);
        }

        .phase-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .phase-content.open {
          max-height: 1000px;
        }

        .phase-body {
          padding: 20px;
          border-top: 1px solid #E5E5E5;
        }

        .phase-body ul {
          list-style: none;
          padding: 0;
          margin: 0 0 15px 0;
        }

        .phase-body li {
          padding-left: 25px;
          margin-bottom: 10px;
          position: relative;
          font-size: 15px;
          line-height: 1.5;
          color: #555;
        }

        .phase-body li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10899A;
          font-weight: bold;
          font-size: 16px;
        }

        .phase-outcome {
          background: #f0f5f7;
          padding: 15px;
          border-radius: 8px;
          margin-top: 15px;
          font-size: 14px;
          line-height: 1.6;
          color: #333;
          border-left: 4px solid #10899A;
        }

        .standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
          margin: 15px 0;
        }

        .standard-badge {
          background: #E8F4F6;
          color: #10899A;
          padding: 10px 15px;
          border-radius: 6px;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid #10899A;
        }

        .phase-projects {
          background: #FFF9E6;
          padding: 15px;
          border-radius: 8px;
          margin-top: 15px;
          border-left: 4px solid #DE5769;
        }

        .phase-projects-title {
          font-weight: 700;
          color: #DE5769;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .phase-projects ul {
          margin: 0;
          padding-left: 20px;
        }

        .phase-projects li {
          padding-left: 1;
          margin-bottom: 8px;
          color: #555;
          font-size: 14px;
        }

        .phase-projects li:before {
          content: "→";
          margin-right: 10px;
          color: #DE5769;
          font-weight: bold;
        }

        .course-overview {
          background: linear-gradient(135deg, #f0f5f7 0%, #e8f1f3 100%);
          padding: 25px;
          border-radius: 10px;
          margin: 30px 0;
          border-left: 5px solid #10899A;
        }

        .course-overview p {
          font-size: 15px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 0;
        }

        .tools-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .tool-item {
          background: #fff;
          border: 1px solid #E5E5E5;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #10899A;
          transition: all 0.3s ease;
        }

        .tool-item:hover {
          border-color: #10899A;
          box-shadow: 0 4px 12px rgba(16, 137, 154, 0.15);
        }

        .target-audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .audience-card {
          background: linear-gradient(135deg, #fef5f7 0%, #fef0f3 100%);
          border: 1px solid #FFD9E0;
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #DE5769;
        }

        .audience-card h5 {
          color: #DE5769;
          font-weight: 700;
          margin-bottom: 10px;
          font-size: 15px;
        }

        .audience-card p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .capstone-item {
          margin-top: 25px;
        }

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
      `}</style>

      {/* ------------------ PAGE CONTENT --------------------- */}
      <div>
        {/* Banner Section */}
        <section className="section-container justify-center text-center">
          <div className="lg:-mt-16 -mt-10">
            <h1 className="heading">
              <span style={{ color: "#10899A" }}>Embedded Aerospace</span>
              <span style={{ color: "#DE5769" }}> Development & Testing </span>
            </h1>

            <div className="banner-wrap justify-center">
              <img src="/images/embeddedaerospace2.png" alt="aerospace" className="banner-img" />
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
                      stroke="#10899A" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                <path d="M12 22V29C12 34 18 38 24 38C30 38 36 34 36 29V22"
                      stroke="#10899A" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <line x1="36" y1="22" x2="36" y2="32"
                      stroke="#10899A" strokeWidth="3" strokeLinecap="round"/>
                <line x1="36" y1="32" x2="32" y2="32"
                      stroke="#10899A" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <span>Beginner → Intermediate</span></div>
          </div>

          <h2 className="section-title font-bold text-[#DE5769]">About This Course</h2>
          <p className="text-para">
            A hands-on, industry-oriented program designed to train engineers in embedded software fundamentals and transition them into aerospace-grade development and verification environments.
          </p>

          <br /> <br />

          <hr className="border-t-2 border-[#C2E8EA]" />
        </section>

        {/* NEW: Course Overview Section */}
        <section className="section-container">
          <div className="lg:-mt-32 -mt-10">
            <h2 className="section-title font-bold text-[#10899A]">Course Overview</h2>
            <div className="course-overview">
              <p>
                <strong>A hands-on, industry-oriented program</strong> designed to train engineers in <strong>embedded software fundamentals</strong> and transition them into <strong>aerospace-grade development and verification</strong> environments.
              </p>
              <p style={{ marginTop: "15px" }}>
                The course blends <strong>core embedded systems, aerospace standards, and live, certification-oriented projects</strong>, preparing participants for roles in avionics and safety-critical software teams.
              </p>
            </div>
            <br /> <hr className="border-t-2 border-[#C2E8EA]" />
          </div>
        </section> 

        {/* NEW: Course Agenda / Phases Section */}
        <section className="section-container">
          <div className="lg:-mt-32 -mt-10">
            <h2 className="section-title font-bold text-[#10899A]">Course Agenda</h2>
            <p className="text-para" style={{ marginBottom: "30px" }}>
              Our comprehensive curriculum is structured in 5 progressive phases, each building on foundational knowledge to advanced aerospace standards.
            </p>

            {phases.map((phase, idx) => (
              <div key={idx} className="phase-accordion">
                <div
                  className="phase-header"
                  onClick={() => setExpandedPhase(expandedPhase === idx ? -1 : idx)}
                >
                  <div className="phase-header-content">
                    <h4>{phase.title}</h4>
                    <p>{phase.subtitle}</p>
                  </div>
                  <FiChevronDown
                    className={`phase-icon ${expandedPhase === idx ? "open" : ""}`}
                  />
                </div>

                <div className={`phase-content ${expandedPhase === idx ? "open" : ""}`}>
                  <div className="phase-body">
                    <ul>
                      {phase.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    {phase.standards && (
                      <div>
                        <h5 style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#10899A",
                          marginBottom: "10px",
                          marginTop: "15px"
                        }}>Standards Covered:</h5>
                        <div className="standards-grid">
                          {phase.standards.map((std, i) => (
                            <div key={i} className="standard-badge">
                              {std}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.projects && (
                      <div className="phase-projects">
                        <div className="phase-projects-title">Example Projects:</div>
                        <ul>
                          {phase.projects.map((proj, i) => (
                            <li key={i}>{proj}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="phase-outcome">
                      <strong>Outcome:</strong> {phase.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <br /> <hr className="border-t-2 border-[#C2E8EA]" />
          </div>
        </section>

        {/* NEW: Tools & Practices Section */}
        <section className="section-container">
          <div className="lg:-mt-32 -mt-10">
            <h2 className="section-title font-bold text-[#10899A]">Tools & Practices</h2>
            <p className="text-para" style={{ marginBottom: "20px" }}>
              You'll gain hands-on experience with industry-standard tools and best practices:
            </p>
            <div className="tools-section">
              <div className="tool-item">Embedded C / C++</div>
              <div className="tool-item">Version Control & Git</div>
              <div className="tool-item">Configuration Management</div>
              <div className="tool-item">Static Analysis Tools</div>
              <div className="tool-item">Test Frameworks</div>
              <div className="tool-item">Requirement Traceability</div>
              <div className="tool-item">Review Practices</div>
              <div className="tool-item">Audit Preparation</div>
            </div>

            <br /> <hr className="border-t-2 border-[#C2E8EA]" />
          </div>
        </section>

        {/* NEW: Who Should Attend & What You Get Section */}
        <section className="section-container">
          <div className="lg:-mt-24 -mt-10">
            <div className="two-col">
              <div>
                <h3 className="sub-heading text-[#10899A]">Who Should Attend</h3>
                <div className="target-audience-grid">
                  <div className="audience-card">
                    <h5>🚀 Embedded Engineers</h5>
                    <p>Transitioning to aerospace</p>
                  </div>
                  <div className="audience-card">
                    <h5>🔧 Automotive Engineers</h5>
                    <p>Entering safety-critical domains</p>
                  </div>
                  <div className="audience-card">
                    <h5>👨‍🎓 Final-Year Students</h5>
                    <p>Seeking avionics roles</p>
                  </div>
                  <div className="audience-card">
                    <h5>✔️ QA Engineers</h5>
                    <p>Targeting DO-178C projects</p>
                  </div>
                </div>
              </div>

              <div className="lg:ml-24">
                <h3 className="sub-heading text-[#10899A]">What You Walk Away With</h3>
                <ul className="list-disc pl-4 marker:text-[#10899A] custom-bullet" style={{ marginTop: "20px" }}>
                  <li className="text-para">Strong embedded fundamentals</li>
                  <li className="text-para">Aerospace domain fluency</li>
                  <li className="text-para">Hands-on certification-oriented workflows</li>
                  <li className="text-para">Live project artifacts aligned to industry</li>
                  <li className="text-para">Career-ready skills & portfolio</li>
                </ul>
              </div>
            </div>

           
          </div>
        </section>

        

        {/* ---------- REGISTER BUTTON (centered at the bottom) ---------- */}
        <div className="section-container">
          <div className="lg:-mt-16 flex justify-center -mt-4">
            <button
              onClick={() =>
                handleRegisterClick({
                  id: "Embedded Aerospace Development & Testing",
                  title: "Embedded Aerospace Development & Testing",
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
                    className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
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
