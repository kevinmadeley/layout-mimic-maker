
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2 text-center font-script"
        >
          Contact Us
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-white/80 max-w-2xl mx-auto"
        >
          We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or are interested in catering services, we're here to help.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-yellow-300 flex items-center text-xl">
                    <MapPin className="mr-2" size={20} /> Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">123 Culinary Lane, Foodie District</p>
                  <p className="text-white/80">New York, NY 10001</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-yellow-300 flex items-center text-xl">
                    <Phone className="mr-2" size={20} /> Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">Reservations: (123) 456-7890</p>
                  <p className="text-white/80">Catering: (123) 456-7891</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-yellow-300 flex items-center text-xl">
                    <Mail className="mr-2" size={20} /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">info@heightsandbites.com</p>
                  <p className="text-white/80">reservations@heightsandbites.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-card overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-yellow-300 flex items-center text-xl">
                    <Clock className="mr-2" size={20} /> Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p className="text-white/80">Friday - Saturday: 11:00 AM - 11:00 PM</p>
                  <p className="text-white/80">Sunday: 10:00 AM - 9:00 PM</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-card p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-yellow-300 text-xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white/90 mb-1">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/90 mb-1">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/90 mb-1">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/90 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
