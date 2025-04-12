
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-4xl logo">
          Heights & Bites
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/login" className="nav-link">Log in</Link>
          <Button className="btn-primary">Order Now</Button>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <Button variant="ghost" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
