import React, { useState, useEffect } from "react";

const MentorsPage = () => {

    const scriptURL = "https://script.google.com/macros/s/AKfycbxdV3RO-l7GAdc2Ztp6EuUlo4yCM6GiMD4XXua_ktuJjUTs2B6Q7oI1z9Qvfx6y22sY6A/exec";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        experience: "",
        expertise: "",
        mode: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);

    const [modeOpen, setModeOpen] = useState(false);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const validate = () => {

        let newErrors = {};

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter valid email";
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter valid phone number";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setShake(true);
            setTimeout(() => setShake(false), 400);
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
                qualification: "",
                experience: "",
                expertise: "",
                mode: ""
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

                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Become a Mentor
                    </h1>

                    <p className="text-lg opacity-90">
                        Share your knowledge and guide future innovators.
                    </p>

                </div>

                <div className={`w-full max-w-md md:max-w-[640px] bg-white p-6 shadow-xl rounded-md ${shake ? "animate-[shake_0.3s]" : ""}`}>

                    <h2 className="text-3xl font-semibold mb-2">
                        Mentor Registration
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Join our mentor network and support learners.
                    </p>

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

                            <label className="absolute left-0 -top-3 text-sm text-gray-500
peer-placeholder-shown:top-2
peer-placeholder-shown:text-base
peer-placeholder-shown:text-gray-400
peer-focus:-top-3
peer-focus:text-sm transition-all">
                                Name
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

                            <label className="absolute left-0 -top-3 text-sm text-gray-500
peer-placeholder-shown:top-2
peer-placeholder-shown:text-base
peer-placeholder-shown:text-gray-400
peer-focus:-top-3
peer-focus:text-sm transition-all">
                                Email
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
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                            />

                            <label className="absolute left-0 -top-3 text-sm text-gray-500
peer-placeholder-shown:top-2
peer-placeholder-shown:text-base
peer-placeholder-shown:text-gray-400
peer-focus:-top-3
peer-focus:text-sm transition-all">
                                Phone
                            </label>

                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="qualification"
                                placeholder=" "
                                value={formData.qualification}
                                onChange={handleChange}
                                required
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                            />

                            <label className="absolute left-0 -top-3 text-sm text-gray-500
peer-placeholder-shown:top-2
peer-placeholder-shown:text-base
peer-placeholder-shown:text-gray-400
peer-focus:-top-3
peer-focus:text-sm transition-all">
                                Qualification
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="experience"
                                placeholder=" "
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                            />

                            <label className="absolute left-0 -top-3 text-sm text-gray-500
peer-placeholder-shown:top-2
peer-placeholder-shown:text-base
peer-placeholder-shown:text-gray-400
peer-focus:-top-3
peer-focus:text-sm transition-all">
                                Experience
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="expertise"
                                placeholder=" "
                                value={formData.expertise}
                                onChange={handleChange}
                                required
                                className="peer w-full border-b border-gray-400 focus:border-[#10899A] outline-none py-2"
                            />

                            <label className="absolute left-0 -top-3 text-sm text-gray-500
peer-placeholder-shown:top-2
peer-placeholder-shown:text-base
peer-placeholder-shown:text-gray-400
peer-focus:-top-3
peer-focus:text-sm transition-all">
                                Expertise
                            </label>
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setModeOpen(true)}
                            onMouseLeave={() => setModeOpen(false)}
                        >

                            <div className="w-full border-b border-gray-400 py-2 cursor-pointer">
                                {formData.mode || "Work Mode"}
                            </div>

                            {modeOpen && (
                                <div className="absolute left-0 w-full bg-white shadow-md mt-1 z-50">

                                    {["Full Time", "Part Time", "Hybrid"].map(item => (
                                        <div
                                            key={item}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => { setFormData({ ...formData, mode: item }); setModeOpen(false); }}>
                                            {item}
                                        </div>
                                    ))}

                                </div>
                            )}

                        </div>

                        <div className="md:col-span-2 flex flex-col items-center mt-4">

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#10899A] text-white px-8 py-2 rounded-full hover:bg-[#0c6d78] transition disabled:opacity-60"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>

                            {success && (
                                <div className="flex items-center justify-center gap-2 text-green-600 mt-3">
                                    <span className="text-lg">✔</span>
                                    <span>Form submitted successfully</span>
                                </div>
                            )}

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default MentorsPage;