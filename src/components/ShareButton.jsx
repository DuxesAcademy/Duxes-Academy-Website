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
  const isMobile = window.innerWidth <= 768;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleOpen = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const toggleMobile = () => {
    if (isMobile) {
      setOpen((prev) => !prev);
    }
  };

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
      <div
        onMouseEnter={!isMobile ? handleOpen : undefined}
        onMouseLeave={!isMobile ? handleClose : undefined}
        className={`flex flex-col items-end space-y-3 mb-3
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* COPY */}
        <div className="relative flex items-center">
          {copied && (
            <div className="absolute right-12 bg-black text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap shadow-md animate-fadeIn">
              <Check size={12} className="text-green-400" />
              Link Copied
            </div>
          )}

          <button
            onClick={copyToClipboard}
            className="icon-btn hover:bg-[#DE5769] hover:text-white hover:shadow-[0_0_12px_rgba(222,87,105,0.5)]"
          >
            <Link2 size={16} />
          </button>
        </div>

        <a
          href={`https://wa.me/?text=${currentUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_12px_rgba(37,211,102,0.5)]"
        >
          <FaWhatsapp size={16} />
        </a>

        <a
          href={`mailto:?subject=Check this blog&body=${currentUrl}`}
          className="icon-btn hover:bg-[#EA4335] hover:text-white hover:shadow-[0_0_12px_rgba(234,67,53,0.5)]"
        >
          <Mail size={16} />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn hover:bg-[#1877F2] hover:text-white hover:shadow-[0_0_12px_rgba(24,119,242,0.5)]"
        >
          <FaFacebookF size={16} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_12px_rgba(10,102,194,0.5)]"
        >
          <FaLinkedinIn size={16} />
        </a>
      </div>

      {/* MAIN SHARE BUTTON (Restored Color) */}
      <button
        onClick={toggleMobile}
        onMouseEnter={!isMobile ? handleOpen : undefined}
        onMouseLeave={!isMobile ? handleClose : undefined}
        className="main-share-btn"
      >
        <FaShareAlt size={15} />
      </button>

      {/* STYLES */}
      <style>{`
        .icon-btn {
          background: white;
          color: #DE5769;
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .icon-btn:hover {
          transform: scale(1.15);
        }

        .icon-btn:active {
          transform: scale(0.92);
        }

        .main-share-btn {
          background: #DE5769;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 14px rgba(222,87,105,0.35);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .main-share-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 0 18px rgba(222,87,105,0.6);
        }

        .main-share-btn:active {
          transform: scale(0.92);
        }

        .icon-btn::after,
        .main-share-btn::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.4);
          opacity: 0;
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.4s ease, opacity 0.6s ease;
        }

        .icon-btn:active::after,
        .main-share-btn:active::after {
          opacity: 1;
          transform: scale(1.8);
          transition: 0s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShareButton;