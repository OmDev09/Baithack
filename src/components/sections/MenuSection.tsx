import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Cookie, CupSoda, Flame, Leaf, Milk, Pizza, Sandwich, Sparkles, Utensils } from "lucide-react";

const menuData = {
  chai: [
    { name: "Regular Chai", price: "₹12/₹20", description: "Classic Indian tea" },
    { name: "Adrak Chai", price: "₹12/₹20", description: "Ginger-infused tea" },
    { name: "Elaichi Chai", price: "₹12/₹20", description: "Cardamom tea" },
    { name: "Pudina Chai", price: "₹12/₹20", description: "Mint flavored tea" },
    { name: "pan Chai", price: "₹15/₹25", description: "Frothy tea" },
    { name: "Rose Chai", price: "₹15/₹25", description: "Rose-infused tea" },
    { name: "Masala Chai", price: "₹20/₹30", description: "Spiced tea blend" },
    { name: "Ukala", price: "₹20/₹25", description: "Special blend" },
    { name: "Kulhad Chai", price: "Extra ₹5", description: "Served in earthen cup" },
  ],
  tea: [
    { name: "Black Tea", price: "₹15", description: "Pure black tea" },
    { name: "Lemon Black Tea", price: "₹20", description: "Black tea with lemon" },
    { name: "Special Black Tea", price: "₹25", description: "Premium blend" },
    { name: "Tea With Honey", price: "₹10 Extra", description: "Sweetened naturally" },
    { name: "Lemon Ice Tea", price: "₹30", description: "Refreshing iced tea" },
    { name: "Peach Ice Tea", price: "₹40", description: "Fruity iced tea" },
    { name: "Watermelon Ice Tea", price: "₹50", description: "Summer special" },
    { name: "Green Apple Bubble Tea", price: "₹80", description: "Fruity bubble tea" },
    { name: "Peach Bubble Tea", price: "₹80", description: "Peach flavored" },
    { name: "Lychee Bubble Tea", price: "₹80", description: "Exotic flavor" },
  ],
  snacks: [
    { name: "Bun Maska", price: "₹20", description: "Butter bun" },
    { name: "Bun Maska Jam", price: "₹30", description: "Bun with butter & jam" },
    { name: "Chocolate Bun Maska", price: "₹35", description: "Chocolate bun" },
    { name: "Salted Fries", price: "₹60", description: "Crispy fries" },
    { name: "Peri Peri Fries", price: "₹70", description: "Spicy fries" },
    { name: "Cheesy Fries", price: "₹80", description: "Cheese loaded" },
    { name: "Veg Momos", price: "₹60", description: "Steamed dumplings" },
    { name: "Paneer Momos", price: "₹70", description: "Paneer dumplings" },
    { name: "Corn Cheese Momos", price: "₹80", description: "Fusion momos" },
  ],
    coffee: [
    { name: "Hot Coffee", price: "₹25", description: "Fresh brewed coffee" },
    { name: "Strong Hot Coffee", price: "₹30", description: "Extra strong brew" },
    { name: "Chocolate Hot Coffee", price: "₹30", description: "Coffee with chocolate" },
    { name: "Black Coffee", price: "₹20", description: "Pure black coffee" },
    { name: "Cold Coffee", price: "₹50", description: "Chilled coffee delight" },
    { name: "Chocolate Cold Coffee", price: "₹60", description: "Chocolate cold coffee" },
    { name: "Special Cold Coffee", price: "₹70", description: "Premium cold brew" },
    { name: "Coffee Without Sugar", price: "₹20", description: "Pure unsweetened" },
  ],
  shakes: [
    { name: "Vanilla Shake", price: "₹60", description: "Classic vanilla" },
    { name: "Strawberry Shake", price: "₹60", description: "Fresh strawberry" },
    { name: "Chocolate Shake", price: "₹60", description: "Rich chocolate" },
    { name: "Mango Shake", price: "₹60", description: "Tropical mango" },
    { name: "Butter Scotch Shake", price: "₹60", description: "Butterscotch delight" },
  ],
  pizza: [
    { name: "Veg Pizza", price: "₹80", description: "Fresh vegetable pizza" },
    { name: "Paneer Pizza", price: "₹100", description: "Indian cottage cheese" },
    { name: "Cheese Pizza", price: "₹100", description: "Classic cheese pizza" },
  ],
  sandwich: [
    { name: "Veg Grilled Sandwich", price: "₹60", description: "Grilled vegetables" },
    { name: "Paneer Majedar Sandwich", price: "₹80", description: "Spicy paneer sandwich" },
  ],
  maggie: [
    { name: "Plain Maggie", price: "₹35", description: "Classic noodles" },
    { name: "Veg Masala Maggie", price: "₹60", description: "Spicy veg noodles" },
    { name: "Peri Peri Maggie", price: "₹70", description: "Peri peri noodles" },
    { name: "Cheese Maggie", price: "₹80", description: "Cheesy noodles" },
  ],
};

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("beverages");

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-primary">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted with Love in Every Sip & Bite
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="flex justify-evenly md:flex-nowrap overflow-x-auto whitespace-nowrap gap-2 mb-8 bg-secondary/50 px-2 scrollbar-hide">
            <TabsTrigger value="chai" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <CupSoda className="mr-2 h-4 w-4" />
              Chai
            </TabsTrigger>
            <TabsTrigger value="tea" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Leaf className="mr-2 h-4 w-4" />
              Tea Collection
            </TabsTrigger>
            <TabsTrigger value="snacks" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Cookie className="mr-2 h-4 w-4" />
              Snacks
            </TabsTrigger>
            <TabsTrigger value="maggie" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Utensils className="mr-2 h-4 w-4" />
              Maggie
            </TabsTrigger>
            <TabsTrigger value="shakes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Milk className="mr-2 h-4 w-4" />
              Shakes
            </TabsTrigger>
            <TabsTrigger value="pizza" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Pizza className="mr-2 h-4 w-4" />
              Pizza
            </TabsTrigger>
            <TabsTrigger value="sandwich" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Sandwich className="mr-2 h-4 w-4" />
              Sandwich
            </TabsTrigger> 
            <TabsTrigger value="coffee" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Coffee className="mr-2 h-4 w-4" />
              Coffee
            </TabsTrigger>           
          </TabsList>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all hover-scale border-border bg-card">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold font-playfair">{item.name}</h3>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
