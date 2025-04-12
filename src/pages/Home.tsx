
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-cover bg-center" 
         style={{ backgroundImage: "url('/lovable-uploads/dc65b579-47fc-426c-a602-9069754e4515.png')" }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
