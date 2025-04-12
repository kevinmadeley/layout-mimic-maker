
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hover: { scale: 1.05, textShadow: "0px 0px 8px rgb(255,255,255)" }
  };

  return (
    <>
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-white text-4xl logo hover:text-yellow-300 transition-colors">
            Heights & Bites
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Menu', 'About', 'Contact', 'Login'].map((item, index) => (
              <motion.div key={item} whileHover="hover" variants={linkVariants}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="nav-link text-lg"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Link to="/order">
              <Button className="btn-primary hover:scale-105 transition-transform">Order Now</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" className="text-white p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {['Home', 'Menu', 'About', 'Contact', 'Login'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="nav-link text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link to="/order" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="btn-primary mt-4">Order Now</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
