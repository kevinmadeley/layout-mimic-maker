
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background image will be handled by the user */}
      <div className="absolute inset-0 bg-black/40">
        {/* This overlay gives text better contrast */}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-7xl font-bold text-white mb-4">Delicious Food</h1>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur alpiscing elit sed do
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link to="/menu">
            <Button className="btn-primary text-lg px-8">View Menu</Button>
          </Link>
          <Link to="/order">
            <Button className="btn-secondary text-lg px-8">Order Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
