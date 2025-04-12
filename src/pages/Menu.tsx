
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Classic Burger", description: "Juicy beef patty with lettuce, tomato, and our special sauce", price: "$12.99", category: "mains" },
  { id: 2, name: "Cheese Burger", description: "Classic burger with melted cheddar cheese", price: "$14.99", category: "mains" },
  { id: 3, name: "Chicken Sandwich", description: "Grilled chicken breast with avocado and aioli", price: "$13.99", category: "mains" },
  { id: 4, name: "Caesar Salad", description: "Crisp romaine lettuce with croutons and caesar dressing", price: "$9.99", category: "starters" },
  { id: 5, name: "Bruschetta", description: "Toasted bread topped with tomatoes, garlic, and basil", price: "$8.99", category: "starters" },
  { id: 6, name: "French Fries", description: "Crispy golden fries with sea salt", price: "$5.99", category: "sides" },
  { id: 7, name: "Onion Rings", description: "Crispy battered onion rings", price: "$6.99", category: "sides" },
  { id: 8, name: "Chocolate Cake", description: "Rich chocolate cake with a molten center", price: "$7.99", category: "desserts" },
  { id: 9, name: "Cheesecake", description: "Creamy New York style cheesecake", price: "$8.99", category: "desserts" },
];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("mains");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/lovable-uploads/dc65b579-47fc-426c-a602-9069754e4515.png')" }}
    >
      <Navbar />
      <div className="container mx-auto px-4 pt-32 text-white pb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2 text-center font-script"
        >
          Our Menu
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-white/80"
        >
          Explore our delicious offerings made with fresh ingredients
        </motion.p>

        <Tabs defaultValue="mains" onValueChange={setSelectedCategory} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8 bg-black/40 backdrop-blur-sm">
            <TabsTrigger value="mains">Mains</TabsTrigger>
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="sides">Sides</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
          </TabsList>
          
          {["mains", "starters", "sides", "desserts"].map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {menuItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Card className="glass-card border-yellow-500/20 hover:border-yellow-500/50 transition-colors group">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-white group-hover:text-yellow-300 transition-colors">{item.name}</CardTitle>
                            <span className="text-yellow-400 font-bold">{item.price}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-white/70">{item.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Menu;
