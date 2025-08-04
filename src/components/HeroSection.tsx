import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Hi, I'm Nihal 👋",
    "I'm a Data Analyst.",
    "I teach on YouTube.",
    "I clash at TH16.",
    "I design at Hasheer Creative."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="h-20 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient typing-cursor">
              {roles[currentRole]}
            </h1>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
          Data Analyst • YouTube Educator • Creative Designer • Gaming Strategist
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button size="lg" className="neon-glow hover:shadow-neon transition-all duration-300 group">
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Let's Work Together
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:neon-glow transition-all duration-300">
            View My Work
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a 
            href="https://github.com/Mohdnihal03" 
            className="p-3 rounded-full border border-primary/30 hover:neon-glow transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/mohdnihal03" 
            className="p-3 rounded-full border border-primary/30 hover:neon-glow transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:mohd.nihalll03@gmail.com" 
            className="p-3 rounded-full border border-primary/30 hover:neon-glow transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full border border-primary/30 hover:neon-glow transition-all duration-300 hover:scale-110"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;