
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Clock, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-cover bg-center page-transition"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/dc65b579-47fc-426c-a602-9069754e4515.png')" }}
    >
      <Navbar />
      <div className="container mx-auto px-4 pt-32 text-white pb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2 text-center font-script"
        >
          About Us
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-white/80 max-w-2xl mx-auto"
        >
          At Heights & Bites, we are passionate about bringing you exceptional dining experiences with locally-sourced ingredients and creative recipes.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300 flex items-center">
                  <Utensils className="mr-2" size={20} /> Our Story
                </h3>
                <p className="text-white/80">
                  Heights & Bites was founded in 2020 with a simple mission: to create a restaurant that combines modern culinary techniques with traditional flavors. Our founder, Jane Smith, brought her experience from top restaurants around the world to create a unique dining destination.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300 flex items-center">
                  <Users className="mr-2" size={20} /> Our Team
                </h3>
                <p className="text-white/80">
                  Our team consists of passionate chefs, attentive servers, and dedicated management who all share the same goal: to provide you with an unforgettable dining experience. We take pride in our work and it shows in every dish we serve.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300 flex items-center">
                  <Award className="mr-2" size={20} /> Our Philosophy
                </h3>
                <p className="text-white/80">
                  We believe in sustainable, farm-to-table dining. All our ingredients are locally sourced whenever possible, and we work closely with farmers and suppliers who share our commitment to quality and environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300 flex items-center">
                  <Clock className="mr-2" size={20} /> Our Promise
                </h3>
                <p className="text-white/80">
                  Every time you visit Heights & Bites, we promise to deliver exceptional food, warm service, and a welcoming atmosphere. We're constantly evolving our menu to bring you new and exciting flavors while keeping the classics you love.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 font-script">Visit Us Today</h3>
          <p className="text-white/80">
            We look forward to welcoming you to Heights & Bites soon. Come experience the perfect blend of exceptional food, warm ambiance, and outstanding service.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
