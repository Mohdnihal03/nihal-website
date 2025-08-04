import { ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-darkest border-t border-primary/20 py-12 px-4 relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="lg"
        className="fixed bottom-8 right-8 rounded-full neon-glow hover:shadow-neon transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">Mohammed Nihal</h3>
            <p className="text-muted-foreground">Data Analyst • YouTuber • Creative Designer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#youtube" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
            <a href="#hasheer" className="text-muted-foreground hover:text-primary transition-colors">Hasheer Creative</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="text-primary font-medium neon-text">Mohammed Nihal</span>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;