import { motion } from "framer-motion";
import { Coffee, Heart, Award } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const features = [
  {
    icon: Coffee,
    title: "Authentic Kulhad",
    description: "Every cup served in traditional earthen kulhad for that authentic taste",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each beverage crafted with care and the finest ingredients",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source the best tea leaves and coffee beans for our customers",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={patternBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-primary">
            Welcome to Baithack
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              At Baithack Café, we serve the true taste of India — brewed in kulhad, served with warmth.
              Our mission is to bring you an authentic chai experience that reminds you of home.
            </p>
            <p className="text-lg text-muted-foreground">
              From the first sip of our masala chai to the last bite of our fresh snacks, every moment at
              Baithack is crafted to create lasting memories.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
