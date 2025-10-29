import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cafeInterior from "@/assets/cafe-interior.webp";
import bunmaska from "@/assets/bunmaska.webp";
import pizza from "@/assets/pizza.webp";
import sandwich from "@/assets/sandwich.avif";
import momos from "@/assets/momos.webp";
import fries from "@/assets/fries.webp";
import rose from "@/assets/rose.avif";

const galleryImages = [
  {
    src: cafeInterior,
    alt: "Baithack Café Interior",
    caption: "Our cozy café space",
  },
  {
    src: bunmaska,
    alt: "Bun Maska",
    caption: "Classic Irani café treat with butter and chai",
  },
  {
    src: pizza,
    alt: "Veg Pizza",
    caption: "Cheesy delight loaded with fresh veggies",
  },
  {
    src: sandwich,
    alt: "Veg Grilled Sandwich",
    caption: "Crispy, golden and stuffed with goodness",
  },
  {
    src: momos,
    alt: "Veg Momos",
    caption: "Steamed perfection with spicy chutney",
  },
  {
    src: fries,
    alt: "Salted Fries",
    caption: "Crispy, golden fries for every craving",
  },
  {
    src: rose,
    alt: "Rose Chai",
    caption: "Aromatic rose-infused tea for a soothing sip",
  },
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-primary">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            A Glimpse of Our Space
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white text-xl font-semibold p-8">
                {galleryImages[currentIndex].caption}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent rounded-full"
          >
            <ChevronLeft className="h-10 w-10 text-white opacity-70 hover:opacity-100 transition" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent rounded-full"
          >
            <ChevronRight className="h-10 w-10 text-white opacity-70 hover:opacity-100 transition" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
