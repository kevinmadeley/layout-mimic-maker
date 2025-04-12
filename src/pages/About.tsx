
import React from 'react';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-cover bg-center"
         style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/dc65b579-47fc-426c-a602-9069754e4515.png')" }}>
      <Navbar />
      <div className="container mx-auto px-4 pt-32 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <p className="text-center mb-12">Coming soon...</p>
      </div>
    </div>
  );
};

export default About;
