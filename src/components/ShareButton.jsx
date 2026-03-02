import React, { useState, useEffect, useRef } from "react";
import { Link2, Mail, Check } from "lucide-react";
import {
  FaShareAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const ShareButton = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const closeTimer = useRef(null);
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Smooth open
  const handleOpen = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  // Delayed close (prevents flicker)
  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150); // 150ms delay
  };

  // Hide near footer + close on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 360) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-4 md:right-10 z-50 flex flex-col items-end">
      
      {/* ICON STACK */}
      {open && (
        <div
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="flex flex-col items-end space-y-3 mb-3 transition-all duration-200"
        >
          {/* Copy */}
          <div className="relative flex items-center">
            {copied && (
              <div className="absolute right-12 bg-black text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap shadow-md">
                <Check size={12} className="text-green-400" />
                Link Copied
              </div>
            )}

            <button
              onClick={copyToClipboard}
              className="bg-white text-[#DE5769] w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
              <Link2 size={16} />
            </button>
          </div>

          <a
            href={`https://wa.me/?text=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#DE5769] w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <FaWhatsapp size={16} />
          </a>

          <a
            href={`mailto:?subject=Check this blog&body=${currentUrl}`}
            className="bg-white text-[#DE5769] w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <Mail size={16} />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#DE5769] w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#DE5769] w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      )}

      {/* MAIN BUTTON */}
      <button
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className="bg-[#DE5769] w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      >
        <FaShareAlt size={22} />
      </button>
    </div>
  );
};

export default ShareButton;