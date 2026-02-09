import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Header = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
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

  // Scroll or navigate to section
  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // If navigated with state, scroll after mount
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  const renderUserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2">
          {user?.photoURL && <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />}
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
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Row 1 */}
        <div className="container flex items-center justify-between h-16 border-b px-2">
          <Link to="/" onClick={scrollToTop}>
            <img src="/images/logo.png" alt="Logo" className="h-[60px] md:-mt-0" />
          </Link>

          <div className="flex items-center md:-mt-2 gap-4">
            <div className="flex items-center gap-1">
              <img src="/images/phoneimg.png" alt="Phone" className="w-3 h-3" />
              <a href="tel:+916363672060" className="text-sm font-medium text-[#10899A] hover:underline">
                +91 6363672060
              </a>
            </div>

            {!user ? (
              <Button asChild size="sm" variant="link" className="text-[#DE5769] font-bold p-0">
                <Link
                  to="https://forms.gle/wR776MZgv63c58mWA"
                  onClick={scrollToTop}
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px' }}
                >
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
            <button onClick={() => handleNavigation("courses")} className="text-lg hover:text-primary">Courses</button>
            <button onClick={() => handleNavigation("internship")} className="text-lg hover:text-primary">Internships</button>
             <button onClick={() => handleNavigation("workshop")} className="text-lg hover:text-primary">Workshop</button>
              <button onClick={() => handleNavigation("running-project")} className="text-lg hover:text-primary">Running Project</button>
            <button onClick={() => handleNavigation("workflow")} className="text-lg hover:text-primary">Workflow</button>
            <button onClick={() => handleNavigation("why-us")} className="text-lg hover:text-primary">Why Us</button>
            <button onClick={() => handleNavigation("community")} className="text-lg hover:text-primary">Community</button>
            <button onClick={() => handleNavigation("tools-tech")} className="text-lg hover:text-primary">Tools & Technology</button>

            {/* Courses Dropdown 
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-lg hover:text-primary flex items-center gap-1">
                  Courses <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black p-2 rounded-md shadow-md">
                <DropdownMenuItem asChild>
                  <Link to="/freshers">For Freshers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/professionals">For Professionals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/corporates">For Corporates</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            */}
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden container flex items-center justify-between h-14 px-2">
        <Link to="/" onClick={scrollToTop}>
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="tel:+91 8183032638"
            className="text-sm font-medium text-primary hover:underline"
          >
            +91 8183032638
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="bg-[#10899A] text-primary hover:bg-transparent">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 p-2 space-y-2">
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
              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("workflow")}>Workflow</button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("why-us")}>Why Us</button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("community")}>Community</button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => handleNavigation("tools-tech")}>Tools & Technology</button>
              </DropdownMenuItem>

              {/* Courses Dropdown 
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="w-full">Courses</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="ml-2 space-y-1">
                  <DropdownMenuItem asChild>
                    <Link to="/freshers">For Freshers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/professionals">For Professionals</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/corporates">For Corporates</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              */}

              {/* Divider */}
              <div className="border-t my-2" />

              {/* Auth section */}
              {!user ? (
                <DropdownMenuItem asChild>
                  <Link to="https://forms.gle/wR776MZgv63c58mWA">Login</Link>
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  {role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin">Admin Panel</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
