import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Baithack-logo.svg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-secondary/30 to-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Baithack" className="h-16 w-16 rounded-full" />
              <div>
                <h3 className="text-2xl font-bold font-playfair text-primary">Baithack</h3>
                <p className="text-sm text-muted-foreground">Taste of Kulhad</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Experience the authentic taste of India with every sip. Serving the finest kulhad chai
              and snacks in Dombivli.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold font-playfair mb-6">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "Menu", "Gallery", "Order Online", "Location"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold font-playfair mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 89716 81974</span>
              </a>
              <a
                href="mailto:hello@baithackcafe.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>hello@baithackcafe.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={() => window.open("https://www.instagram.com/baithack_dombivliwest/", "_blank")}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={() => window.open("https://facebook.com", "_blank")}
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Baithack Café. Crafted with ❤️ and Kulhad Chai.
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
