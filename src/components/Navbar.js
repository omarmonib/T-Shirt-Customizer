import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Login from "./Login";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);  
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__brand">T-Shirt Customizer</Link>

        <button 
          className="navbar__toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <motion.div 
            initial={{ rotate: 0, scale: 1 }} 
            animate={{ rotate: menuOpen ? 180 : 0, scale: menuOpen ? 1.2 : 1 }} 
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </button>

        <ul className={classNames("navbar__menu", { "navbar__menu--open": menuOpen })}>
          {[
            { to: "#", label: "الرئيسية", scrollY: 0 },
            { to: "#about", label: "تعرف علينا", scrollY: 800 },
            { to: "#services", label: "خدماتنا", scrollY: 1600 },
          ].map(({ to, label, scrollY }) => (
            <li key={to}>
              <Link 
                to={to} 
                smooth 
                onClick={() => {
                  if (scrollY !== undefined) {
                    window.scrollTo({ top: scrollY, behavior: "smooth" });
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}

          <li>
            <button className="login-btn" onClick={() => setLoginOpen(true)}>
              دخول
            </button>
          </li>
        </ul>
      </nav>

      {isLoginOpen && <Login onClose={() => setLoginOpen(false)} />}
    </>
  );
};

export default Navbar;
