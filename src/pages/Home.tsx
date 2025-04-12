
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/dc65b579-47fc-426c-a602-9069754e4515.png';
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-cover bg-center page-transition" 
      style={{ backgroundImage: "url('/lovable-uploads/dc65b579-47fc-426c-a602-9069754e4515.png')" }}
    >
      <Navbar />
      <Hero />
    </motion.div>
  );
};

export default Home;
