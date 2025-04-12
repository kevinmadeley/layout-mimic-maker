
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40">
        {/* This overlay gives text better contrast */}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-7xl font-bold text-white mb-4 font-logo"
        >
          Heights & Bites
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-sans"
        >
          Elevate Your Dining Experience: Gourmet Flavors, Breathtaking Flavours
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center space-x-4"
        >
          <Link to="/menu">
            <Button className="bg-[#87986A] hover:bg-[#738359] text-white text-lg px-8 hover:scale-105 transition-transform">View Menu</Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
