import React, { useState, useEffect } from "react";

const LearnersPage = () => {

    const scriptURL = "https://script.google.com/macros/s/AKfycbzwDXGjuhEce4UIab33wyYxQ2P9UI7GdbLZKCei9QvdZd_OPvtAheHVnjXSApxswZqqcQ/exec";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        status: "",
        program: "",
        notes: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);

    const [statusOpen, setStatusOpen] = useState(false);
    const [programOpen, setProgramOpen] = useState(false);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const validate = () => {

        let newErrors = {};

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10 digit phone number";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }

        return Object.keys(newErrors).length === 0;

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {

            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            setSuccess(true);

            setFormData({
                name: "",
                email: "",
                phone: "",
                status: "",
                program: "",
                notes: ""
            });

        } catch (err) {
            console.log(err);
        }

        setLoading(false);

    };

    return (

        <div
            className="relative w-full min-h-screen bg-cover bg-center flex items-center md:-mt-16"
            style={{ backgroundImage: "url('/images/learn-bg.jpg')" }}
        >

            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-10">

                <div className="text-white max-w-lg text-center md:text-left">

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Join as a Learner
                    </h1>

                    <p className="text-lg opacity-90">
                        Share your interests and begin your learning experience with us.
                    </p>

                </div>

                <div className={`w-full max-w-md md:max-w-[640px] bg-white p-6 shadow-xl rounded-md transition ${shake ? "animate-[shake_0.4s]" : ""}`}>

                    <h2 className="text-3xl font-semibold mb-2">
                        Learner Registration
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Tell us about your interests and we will guide you.
                    </p>

                    {loading && (
                        <div className="flex items-center gap-2 text-[#10899A] mb-4">
                            <div className="w-4 h-4 border-2 border-[#10899A] border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                        </div>
                    )}

                    {success && (
                        <div className="flex items-center gap-2 text-green-600 mb-4">
                            <span className="text-xl">✔</span>
                            <span>Form submitted successfully</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                            />
                            <label className="absolute left-0 -top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm">
                                Your Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                            />
                            <label className="absolute left-0 -top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm">
                                Your Email
                            </label>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                placeholder=" "
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2 placeholder-transparent"
                            />
                           <label className="absolute left-0 -top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm">
                                Your Mobile
                            </label>
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setStatusOpen(true)}
                            onMouseLeave={() => setStatusOpen(false)}
                        >

                            <div className="w-full border-b border-gray-400 py-2 cursor-pointer">
                                {formData.status || "Current Status"}
                            </div>

                            {statusOpen && (
                                <div className="absolute left-0 w-full bg-white shadow-md mt-1 z-50">
                                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => { setFormData({ ...formData, status: "Student" }); setStatusOpen(false); }}>
                                        Student
                                    </div>
                                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => { setFormData({ ...formData, status: "Working Professional" }); setStatusOpen(false); }}>
                                        Working Professional
                                    </div>
                                </div>
                            )}

                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setProgramOpen(true)}
                            onMouseLeave={() => setProgramOpen(false)}
                        >

                            <div className="w-full border-b border-gray-400 py-2 cursor-pointer">
                                {formData.program || "Program Interested In"}
                            </div>

                            {programOpen && (
                                <div className="absolute left-0 w-full bg-white shadow-md mt-1 z-50">
                                    {["Internship", "Course", "Workshop", "Project"].map(item => (
                                        <div
                                            key={item}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => { setFormData({ ...formData, program: item }); setProgramOpen(false); }}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>

                        <textarea
                            name="notes"
                            rows="2"
                            placeholder="Notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="md:col-span-2 w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                        />

                        <div className="md:col-span-2 flex justify-center mt-4">

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#10899A] text-white px-8 py-2 rounded-full hover:bg-[#0c6d78] transition w-full md:w-auto disabled:opacity-70"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default LearnersPage;