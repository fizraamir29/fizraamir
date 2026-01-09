import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main headline */}
        <div className="text-center pt-12 pb-16 animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Creative Graphic Design
            <br />
            <span className="italic text-gradient">for Your Brand</span>
          </h1>
          
          <Button className="mt-10 rounded-full px-8 py-6 text-base glow-primary hover-scale" onClick={() => scrollToSection('projects')}>
            EXPLORE WORKS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* About section */}
        <div id="about" className="grid md:grid-cols-2 gap-12 items-center mt-8 pt-16">
          <div className="space-y-6 animate-fade-up-delay-1">
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight">
              Let's get know
              <br />
              about me closer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Fizra Amir is a passionate graphic designer specializing in 
              thumbnails, logos, social media designs, carousels, and complete 
              brand identity. I bring your vision to life with creativity and precision.
            </p>
            <Button variant="outline" className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale" onClick={() => scrollToSection('services')}>
              Discover My Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative flex justify-center md:justify-end animate-fade-up-delay-2">
            <div className="relative animate-float">
              {/* Decorative frame */}
              <div className="absolute -right-4 -top-4 w-24 h-32 border-2 border-primary rounded-full opacity-60" />
              <div className="absolute -left-2 -bottom-2 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
              <img
                src={heroImage}
                alt="Fizra Amir"
                className="w-72 h-80 object-cover rounded-t-full rounded-b-lg grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
