
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const { toast } = useToast();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to Heights & Bites!",
    });
    setLoginData({ email: '', password: '' });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Registration Successful",
      description: "Your account has been created. You can now log in.",
    });
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
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
      <div className="container mx-auto px-4 pt-32 text-white pb-20 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 bg-black/40 backdrop-blur-sm">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="glass-card border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-300">Welcome Back</CardTitle>
                  <CardDescription className="text-white/70">Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-white/90">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label htmlFor="password" className="text-sm text-white/90">Password</label>
                        <Link to="#" className="text-xs text-yellow-300 hover:underline">Forgot password?</Link>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Your password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <Button type="submit" className="btn-primary w-full">Sign In</Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-white/70">
                    Don't have an account? <Link to="#" className="text-yellow-300 hover:underline">Sign up</Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="glass-card border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-300">Create an Account</CardTitle>
                  <CardDescription className="text-white/70">Join Heights & Bites to order online and more</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-white/90">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={registerData.name}
                        onChange={handleRegisterChange}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reg-email" className="text-sm text-white/90">Email</label>
                      <Input
                        id="reg-email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reg-password" className="text-sm text-white/90">Password</label>
                      <Input
                        id="reg-password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm text-white/90">Confirm Password</label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        required
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <Button type="submit" className="btn-primary w-full">Create Account</Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-white/70">
                    Already have an account? <Link to="#" className="text-yellow-300 hover:underline">Sign in</Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
