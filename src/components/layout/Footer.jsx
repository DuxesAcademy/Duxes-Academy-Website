import React from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full font-roboto">
      {/* CTA Section */}
      <div className="bg-[#10899A] text-center py-16 px-4">    {/* #189A8A */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Start Your Tech Journey?
        </h2>
        <p className="text-white/90 max-w-[600px] mx-auto mb-8">
          Join Duxes Academy today and take the first step towards a rewarding
          career in technology. Our team is ready to assist you.
        </p>

        {/* Email Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          {/*}
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-4 py-3 rounded-md outline-none border-none"
          />
          */}
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            <a href="/contact">Get in Touch</a>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between px-6 py-6">
        {/* Left - Quick Links & Support 
        <div className="flex gap-6 text-sm font-semibold text-black mb-4 md:mb-0">
          <span className="cursor-pointer">Quick Links</span>
          <span className="cursor-pointer">Support</span>
        </div>
        */}

        {/* Right - Social Icons */}
        <div className="flex gap-6 text-black">
          <a href="https://whatsapp.com/channel/0029VaXb6F7FSAsxgjOs7C40" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.linkedin.com/company/duxes-academy/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/duxes.academy/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@LearnwithDuxesAcademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
