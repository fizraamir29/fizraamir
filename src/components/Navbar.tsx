import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={() => scrollToSection('home')} className="font-display text-2xl font-bold tracking-tight hover:text-primary transition-colors">
          FIZRA<span className="text-primary">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            HOME
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            ABOUT ME
          </button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            SERVICES
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            MY WORKS
          </button>
          <Button size="sm" className="rounded-full px-6" onClick={() => scrollToSection('contact')}>
            CONTACT
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium py-2 hover:text-primary transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium py-2 hover:text-primary transition-colors">
              ABOUT ME
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium py-2 hover:text-primary transition-colors">
              SERVICES
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium py-2 hover:text-primary transition-colors">
              MY WORKS
            </button>
            <Button className="rounded-full" onClick={() => scrollToSection('contact')}>
              CONTACT
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
