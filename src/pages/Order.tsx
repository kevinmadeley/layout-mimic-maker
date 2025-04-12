
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, ShoppingCart, Clock, CheckCircle2 } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const popularItems: MenuItem[] = [
  { id: 1, name: "Classic Burger", description: "Juicy beef patty with lettuce, tomato, and our special sauce", price: 12.99, image: "", category: "mains" },
  { id: 2, name: "Cheese Burger", description: "Classic burger with melted cheddar cheese", price: 14.99, image: "", category: "mains" },
  { id: 3, name: "Chicken Sandwich", description: "Grilled chicken breast with avocado and aioli", price: 13.99, image: "", category: "mains" },
  { id: 4, name: "Caesar Salad", description: "Crisp romaine lettuce with croutons and caesar dressing", price: 9.99, image: "", category: "starters" },
  { id: 5, name: "French Fries", description: "Crispy golden fries with sea salt", price: 5.99, image: "", category: "sides" },
  { id: 6, name: "Chocolate Cake", description: "Rich chocolate cake with a molten center", price: 7.99, image: "", category: "desserts" },
];

const Order: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState<'select' | 'checkout' | 'confirmation'>('select');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your order.`,
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before proceeding to checkout.",
        variant: "destructive",
      });
      return;
    }
    
    setStep('checkout');
  };

  const handlePlaceOrder = () => {
    if (!address) {
      toast({
        title: "Address required",
        description: "Please enter your delivery address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('confirmation');
      setCart([]);
      setAddress('');
      setNotes('');
      
      toast({
        title: "Order placed successfully!",
        description: "Your delicious food is on its way.",
      });
    }, 1500);
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
          {step === 'select' ? 'Order Now' : step === 'checkout' ? 'Checkout' : 'Order Confirmed'}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-white/80 max-w-2xl mx-auto"
        >
          {step === 'select' 
            ? 'Select your favorite dishes and place your order for delivery or pickup' 
            : step === 'checkout'
            ? 'Complete your order details below'
            : 'Thank you for your order!'}
        </motion.p>

        {step === 'select' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6 text-yellow-300">Popular Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularItems.map(item => (
                  <Card key={item.id} className="glass-card border-yellow-500/20 overflow-hidden group">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white group-hover:text-yellow-300 transition-colors flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-yellow-400">${item.price.toFixed(2)}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <CardDescription className="text-white/70">{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => addToCart(item)} 
                        className="w-full btn-primary flex items-center gap-2"
                      >
                        <ShoppingCart size={16} /> Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-300 flex items-center gap-2">
                    <ShoppingCart size={18} /> Your Order
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {cart.length === 0 ? 'Your cart is empty' : `${cart.length} item${cart.length !== 1 ? 's' : ''} in cart`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {cart.length > 0 ? (
                    <div className="space-y-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-b border-white/10 pb-3">
                          <div>
                            <h4 className="font-medium text-white">{item.name}</h4>
                            <p className="text-sm text-white/70">${item.price.toFixed(2)} each</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-white/50">
                      <ShoppingCart className="mx-auto mb-2" size={32} />
                      <p>Add items to your cart</p>
                    </div>
                  )}
                </CardContent>
                {cart.length > 0 && (
                  <CardFooter className="flex-col space-y-4">
                    <div className="w-full flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-yellow-400">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button 
                      onClick={handleCheckout} 
                      className="w-full btn-primary"
                    >
                      Proceed to Checkout
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          </div>
        )}

        {step === 'checkout' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass-card border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-300">Delivery Details</CardTitle>
                <CardDescription className="text-white/70">Complete your order information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Order Summary</h3>
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-white/80">{item.quantity}x {item.name}</span>
                      <span className="text-white/80">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 border-t border-white/10 text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-yellow-400">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Delivery Information</h3>
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-white/90">Delivery Address</label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your full address"
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-white/90">Special Instructions (Optional)</label>
                    <Input
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any delivery notes or special requests"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contactless" />
                    <label
                      htmlFor="contactless"
                      className="text-sm font-medium leading-none text-white/90 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Contactless delivery
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setStep('select')}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Back to Menu
                </Button>
                <Button 
                  onClick={handlePlaceOrder} 
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {step === 'confirmation' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-md mx-auto text-center"
          >
            <Card className="glass-card border-yellow-500/20">
              <CardHeader>
                <div className="mx-auto rounded-full bg-green-500/20 p-3 w-16 h-16 flex items-center justify-center mb-2">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl text-yellow-300">Order Confirmed!</CardTitle>
                <CardDescription className="text-white/70">Your order has been placed successfully</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <p className="text-white font-medium">Estimated Delivery: 30-45 minutes</p>
                </div>
                <p className="text-white/80">
                  Thank you for ordering with Heights & Bites! You'll receive a confirmation email shortly with your order details.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button 
                  onClick={() => setStep('select')} 
                  className="btn-primary"
                >
                  Order Something Else
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Order;
