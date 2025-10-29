import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { OrderSection } from "@/components/sections/OrderSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <OrderSection />
        <LocationSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
