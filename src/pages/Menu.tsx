
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
import { ChefHat, Flame, Cheese, Fries, CupSoda, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { 
    id: 1, 
    name: "Atteri-Classic Grilled Chicken Wrap", 
    description: "Tender grilled chicken strips, crisp lettuce, fresh tomato, cool cucumber, and creamy mayonnaise hugged in a soft tortilla wrap. Simple, fresh, delicious!", 
    price: "R68.00", 
    category: "wraps",
    icon: <ChefHat className="text-yellow-300" />
  },
  { 
    id: 2, 
    name: "Pheli-Hot Peri-Peri Chicken Wrap", 
    description: "Zesty grilled chicken strips tossed in our signature peri-peri sauce, with lettuce, tomato, and a hint of red onion, all rolled up for a flavour kick!", 
    price: "R68.00", 
    category: "wraps",
    icon: <Flame className="text-orange-500" />
  },
  { 
    id: 3, 
    name: "Smokey BBQ Chicken & Cheese Wrap", 
    description: "Juicy grilled chicken strips coated in a sweet and smokey BBQ sauce, topped with melted cheddar cheese and crisp lettuce in a warm tortilla. Addictive!", 
    price: "R68.00", 
    category: "wraps",
    icon: <Cheese className="text-yellow-400" />
  },
  { 
    id: 4, 
    name: "Seasoned Chips", 
    description: "Crispy golden fries lightly seasoned with our special blend of spices. The perfect partner for any wrap!", 
    price: "R28.00", 
    category: "sides",
    icon: <Fries className="text-yellow-300" />
  },
  { 
    id: 5, 
    name: "Coca-Cola (330ml Can)", 
    description: "The classic thirst quencher.", 
    price: "R18.00", 
    category: "drinks",
    icon: <CupSoda className="text-red-500" />
  },
  { 
    id: 6, 
    name: "Fanta Orange (330ml Can)", 
    description: "Bubbly and fruity orange refreshment.", 
    price: "R18.00", 
    category: "drinks",
    icon: <CupSoda className="text-orange-400" />
  },
  { 
    id: 7, 
    name: "Sprite (330ml Can)", 
    description: "Crisp lemon-lime flavour.", 
    price: "R18.00", 
    category: "drinks",
    icon: <CupSoda className="text-green-400" />
  },
  { 
    id: 8, 
    name: "Still Water (500ml Bottle)", 
    description: "Pure and simple hydration.", 
    price: "R18.00", 
    category: "drinks",
    icon: <CupSoda className="text-blue-300" />
  },
  { 
    id: 9, 
    name: "Wrap Combo", 
    description: "Your choice of any Chicken Wrap, served with a portion of Seasoned Chips and a 330ml Soft Drink Can.", 
    price: "R105.00", 
    category: "combos",
    icon: <ShoppingCart className="text-yellow-300" />
  },
];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("wraps");
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
          Delicious wraps made with fresh ingredients
        </motion.p>

        <Tabs defaultValue="wraps" onValueChange={setSelectedCategory} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8 bg-black/40 backdrop-blur-sm">
            <TabsTrigger value="wraps">Wraps</TabsTrigger>
            <TabsTrigger value="sides">Sides</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
            <TabsTrigger value="combos">Combos</TabsTrigger>
          </TabsList>
          
          {["wraps", "sides", "drinks", "combos"].map((category) => (
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
                            <CardTitle className="text-white group-hover:text-yellow-300 transition-colors flex items-center gap-2">
                              {item.icon}
                              <span>{item.name}</span>
                            </CardTitle>
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
