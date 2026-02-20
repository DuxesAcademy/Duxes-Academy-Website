import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Header = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role || 'student');
        }
      } else {
        setRole(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (id) => {
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  setAboutOpen(false);
  setMobileAboutOpen(false);
  setMobileMenuOpen(false);
};


  const renderUserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2">
          {user?.photoURL && (
            <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
          )}
          <span className="text-sm">{user.displayName || user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link to="/dashboard" onClick={scrollToTop}>Dashboard</Link>
        </DropdownMenuItem>
        {role === 'admin' && (
          <DropdownMenuItem asChild>
            <Link to="/admin" onClick={scrollToTop}>Admin Panel</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        {/* Row 1 */}
        <div className="container flex items-center justify-between h-16 border-b px-2">
          <Link to="/" onClick={scrollToTop}>
            <img src="/images/logo.png" alt="Logo" className="h-[60px]" />
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <img src="/images/phoneimg.png" alt="Phone" className="w-3 h-3" />
              <a href="tel:+916363672060" className="text-sm font-medium text-[#10899A] hover:underline">
                +91 6363672060
              </a>
            </div>

            {!user ? (
              <Button asChild size="sm" variant="link" className="text-[#DE5769] font-bold p-0">
                <Link to="https://forms.gle/wR776MZgv63c58mWA"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px' }}>
                  Login
                </Link>
              </Button>
            ) : (
              renderUserMenu()
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-[#10899A] container flex h-16 items-center text-white justify-center px-2">
          <nav className="flex items-center gap-10">

            <button onClick={() => handleNavigation("courses")} className="text-lg hover:text-primary transition">
              Courses
            </button>

            <button onClick={() => handleNavigation("internship")} className="text-lg hover:text-primary transition">
              Internships
            </button>

            <button onClick={() => handleNavigation("workshop")} className="text-lg hover:text-primary transition">
              Workshop
            </button>

            <button onClick={() => handleNavigation("running-project")} className="text-lg hover:text-primary transition">
              Running Project
            </button>

            {/* Desktop About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-lg flex items-center gap-1 hover:text-primary transition">
                About
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white text-black rounded-xl shadow-xl py-3 transition-all duration-300
                ${aboutOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible"}`}>
                {["workflow","why-us","community","tools-tech","blogs"].map((id, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {id === "tools-tech" ? "Tools & Technology" :
                     id === "why-us" ? "Why Us" :
                     id === "blogs" ? "Blogs" :
                     id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>

          </nav>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden container flex items-center justify-between h-14 px-2">
        <Link to="/" onClick={scrollToTop}>
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </Link>

        <div className="flex items-center gap-2">
          <a href="tel:+91 8183032638" className="text-sm font-medium text-primary hover:underline">+91 8183032638</a>

          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="bg-[#10899A] text-white">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64 p-3 space-y-2">

              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("courses")}>Courses</button>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("internship")}>Internship</button>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("workshop")}>Workshop</button>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("running-project")}>Running Project</button>
              </DropdownMenuItem>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded-md transition"
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAboutOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  {["workflow","why-us","community","tools-tech","blogs"].map((id, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigation(id)}
                      className="block w-full text-left pl-6 pr-2 py-2 text-sm hover:bg-gray-100 rounded-md transition"
                    >
                      {id === "tools-tech" ? "Tools & Technology" :
                       id === "why-us" ? "Why Us" :
                       id === "blogs" ? "Blogs" :
                       id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t my-2">
                <a
                  role="menuitem"
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  tabIndex={-1}
                  data-orientation="vertical"
                  data-radix-collection-item=""
                  href="https://forms.gle/wR776MZgv63c58mWA"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;