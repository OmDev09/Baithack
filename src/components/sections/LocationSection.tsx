import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export const LocationSection = () => {
  const address = "Shop No - 5, Ground Floor, Tanisha Heights, Below Vedanta Multispeciality Hospital, Subhash Road, Vishnu Nagar, Dombivli (West) - 421 202";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d73.0!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
      "_blank"
    );
  };

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-primary">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">Find Us at Our Cozy Location</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]"
            >
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baithack Café Location"
              />
            </motion.div>

            {/* Address Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-playfair mb-2">Our Address</h3>
                    <p className="text-muted-foreground leading-relaxed">{address}</p>
                  </div>
                </div>

                <Button
                  onClick={handleDirections}
                  className="w-full bg-primary hover:bg-accent text-primary-foreground"
                  size="lg"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </div>

              <div className="bg-secondary/50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold font-playfair mb-4">Opening Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span className="font-semibold">9:00 AM - 11:00 PM</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Open all days of the week. Come visit us anytime!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
