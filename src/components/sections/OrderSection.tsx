import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const orderPlatforms = [
  {
    name: "Zomato",
    color: "bg-red-500 hover:bg-red-600",
    link: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-dombivali-west-thane/order",
  },
  {
    name: "Swiggy",
    color: "bg-orange-500 hover:bg-orange-600",
    link: "https://www.swiggy.com/city/mumbai/baithack-taste-of-kulhad-dombivli-west-dombivli-rest1082192?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder",
  },
  {
    name: "MagicPin",
    color: "bg-purple-500 hover:bg-purple-600",
    link: "https://magicpin.in/profilemerchant?userId=55381307&searchQuery=Baithack+Taste+of+Kulhad+Dombivali+West&suggestionType=MERCHANTNAME&utm_source=search&utm_medium=suggester&utm_campaign=$suggester&utm_term=Baithack+Taste+of+Kulhad+Dombivali+West&enableYSF=false&tabType=delivery&filter=order_online",
  },
];

export const OrderSection = () => {
  return (
    <section id="order" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-primary">
            Order Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Order Your Favorite Chai from the Comfort of Your Home
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          {orderPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-64"
            >
              <Button
                onClick={() => window.open(platform.link, "_blank")}
                className={`w-full h-24 text-xl font-semibold ${platform.color} text-white shadow-lg hover:shadow-xl transition-all hover-scale`}
              >
                <ExternalLink className="mr-3 h-6 w-6" />
                {platform.name}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Available for delivery in Dombivli and surrounding areas
        </motion.p>
      </div>
    </section>
  );
};
