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
    "https://script.google.com/macros/s/AKfycbwvrIFyxt30ZUp1dZCEgT_dbgYdqJerlk5-vAkrd7oLboi6BX5wEG_BMomoLcTkhtu8/exec";

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
              <span style={{ color: "#10899A" }}>Embedded Product </span>

              <span style={{ color: "#DE5769" }}>Development Bootcamp </span>
              <br />
            </h1>

            <div className="banner-wrap justify-center">
              <img src="/images/embeddedproduct1.png" alt="circuit" className="banner-img -mt-8" />
            </div>
          </div>

          <div className="-mt-4">
          <div className="badge-row justify-center">
            <div className=" badge flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="#10899A" strokeWidth="4" fill="none"/>
                <line x1="24" y1="24" x2="24" y2="12" stroke="#10899A" strokeWidth="4" strokeLinecap="round"/>
                <line x1="24" y1="24" x2="32" y2="28" stroke="#10899A" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <span>4 Days</span>
            </div>
       
            <div className="badge flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L24 10L42 18L24 26L6 18Z"
                      stroke="#10899A" stroke-width="3" stroke-linejoin="round" fill="none"/>
                <path d="M12 22V29C12 34 18 38 24 38C30 38 36 34 36 29V22"
                      stroke="#10899A" stroke-width="3" stroke-linecap="round" fill="none"/>
                <line x1="36" y1="22" x2="36" y2="32"
                      stroke="#10899A" stroke-width="3" stroke-linecap="round"/>
                <line x1="36" y1="32" x2="32" y2="32"
                      stroke="#10899A" stroke-width="3" stroke-linecap="round"/>
              </svg>
              <span>Intermediate</span></div>
          </div>
            </div>
          <h2 className="section-title font-bold text-[#DE5769]">🚀 About the Bootcamp</h2>
          <p className="text-para">
            This Embedded Product Development Bootcamp is designed for those who want to go beyond tutorials and understand how real embedded products are created end-to-end.
            Unlike traditional workshops that focus only on coding, this bootcamp covers the complete product lifecycle, from ideation to market launch, using real industry practices.
          </p>

          {/* <button className="enroll-btn">Enroll Now</button> */}
          <br />

          <hr class="border-t-2 border-[#C2E8EA]" />
        </section>

        {/* Boot Camp*/}
        <section className="section-container">
          <div className="lg:-mt-28 -mt-10">
            <div className="two-col">
              <div>
                <h3 className="sub-heading text-[#10899A]">🎯Who This Bootcamp Is For</h3>
                <p className="text-para">
                  This bootcamp is ideal for:
                </p>
                <p>
                  •	Engineering students (ECE / EEE / CSE / Mechatronics)
                </p>
                <p>
                  •	Working professionals in embedded, firmware, or testing roles
                </p>
                <p>
                  •	Startup founders and product enthusiasts
                </p>
                <p>
                  •	Anyone aspiring to build real-world embedded products
                </p>
              </div>
              {/* 🧩 What You Will Learn*/}
              <div>
                <h3 className="sub-heading text-[#10899A]">🧩 What You Will Learn</h3>
                <p className="text-para">
                  We combine theory and guided practical sessions to cover:
                </p>
                <p>
                  •	Ideation & product conceptualization
                </p>
                <p>
                  •	Product requirement definition (PRD)
                </p>
                <p>
                  •	System architecture & design
                </p>
                <p>
                  •	Hardware and firmware overview
                </p>
                <p>
                  •	Embedded firmware development concepts
                </p>
                <p>
                  •	Testing & validation approach
                </p>
                <p>
                  •	Manufacturing & certification basics
                </p>
                <p>
                  •	Marketing, positioning & product launch
                </p>
              </div>
            </div>
            <br /> <hr class="border-t-2 border-[#C2E8EA]" />
          </div>
        </section>

        {/* 🗓️ Bootcamp Structure (4 Days) */}
        <section className="section-container">
          <div className="capstone-item">
            <div className="lg:-mt-24 -mt-10">
              <h3 className="sub-heading text-[#10899A] mb-6">
                🗓️ Bootcamp Structure (4 Days)
              </h3>

              {/* UL ROW CONTAINER */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">

                {/* DAY 1 */}
                <ul className="space-y-2">
                  <li className="font-bold">Day 1 — Ideation & Product Thinking</li>
                  <li>• Identifying real problems worth solving</li>
                  <li>• Product vs project mindset</li>
                  <li>• User personas & feature prioritization</li>
                  <li>• Requirement analysis & MVP definition</li>
                </ul>

                {/* DAY 2 */}
                <ul className="space-y-2">
                  <li className="font-bold">Day 2 — System Design & Prototyping</li>
                  <li>•	Hardware vs firmware responsibility split</li>
                  <li>	•	Component & MCU selection</li>
                  <li>	•	Interface & power considerations</li>
                  <li>	•	System and firmware architecture</li>
                </ul>

                {/* DAY 3 */}
                <ul className="space-y-2">
                  <li className="font-bold">Day 3 — Firmware Development & Testing</li>
                  <li>	•	Firmware lifecycle & structure</li>
                  <li>	•	Bare-metal vs RTOS overview</li>
                  <li>	•	Debugging techniques</li>
                  <li>	•	Testing mindset for embedded products</li>
                </ul>

                {/* DAY 4 */}
                <ul className="space-y-2">
                  <li className="font-bold">Day 4 — Validation, Manufacturing & Marketing</li>
                  <li>	•	Product validation & field testing</li>
                  <li>	•	Manufacturing readiness & cost optimization</li>
                  <li>	•	Certifications overview</li>
                  <li>	•	Go-to-market strategy</li>
                </ul>

              </div>
            </div>
          </div>
        </section>

        {/* ---------- REGISTER BUTTON (centered at the bottom) ---------- */}
        <div className="section-container">
          <div className="flex justify-center lg:-mt-20 -mt-4">
            <button
              onClick={() =>
                handleRegisterClick({
                  id: "Embedded Product Development Bootcamp",
                  title: "Embedded Product Development Bootcamp",
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
