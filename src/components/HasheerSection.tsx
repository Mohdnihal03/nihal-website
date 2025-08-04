import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Instagram, Palette, Image, Video, Zap } from 'lucide-react';

const HasheerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger glitch effect
          setTimeout(() => setGlitchActive(true), 500);
          setTimeout(() => setGlitchActive(false), 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    { icon: Palette, name: "Posters", color: "text-primary" },
    { icon: Image, name: "Banners", color: "text-accent" },
    { icon: Video, name: "Reels", color: "text-neon-purple" },
    { icon: Zap, name: "Visuals", color: "text-neon-pink" }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-surface relative overflow-hidden">
      {/* Glitch transition effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-neon-purple/20 transition-opacity duration-1000 ${
        glitchActive ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${glitchActive ? 'glitch-effect' : 'text-gradient'}`} data-text="Not just data. I design too.">
              Not just data. I design too.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-neon-purple mx-auto mb-8"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Cofounder @ Hasheer Creative
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Where data meets design. We create stunning visual content that tells stories, 
                builds brands, and engages audiences across digital platforms.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div 
                  key={service.name}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-primary/20 hover:neon-glow transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              variant="outline"
              className="border-accent/30 hover:neon-glow hover:border-accent transition-all duration-300 group"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Our Work
              </a>
            </Button>
          </div>

          {/* Right side - Visual showcase */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              {/* Portfolio samples - using colored rectangles as placeholders */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/20 hover:neon-glow transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-neon-purple/20 rounded-lg border border-accent/20 hover:neon-glow transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Image className="h-8 w-8 text-accent" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-lg border border-neon-purple/20 hover:neon-glow transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Video className="h-8 w-8 text-neon-purple" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-neon-pink/20 to-primary/20 rounded-lg border border-neon-pink/20 hover:neon-glow transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Zap className="h-8 w-8 text-neon-pink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HasheerSection;