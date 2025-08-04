import { useEffect, useRef, useState } from 'react';
import clashIcon from '@/assets/clash-icon.jpg';

const ClashSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-surface-darker relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-8">
            <img 
              src={clashIcon} 
              alt="Clash of Clans TH16" 
              className={`w-32 h-32 mx-auto rounded-full border-4 border-primary/30 shadow-neon ${
                isVisible ? 'animate-float' : ''
              }`}
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Town Hall 16 Strategist
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              <span className="text-primary font-semibold">Clash of Clans player for 5+ years.</span>
            </p>
            <p className="text-xl text-foreground font-medium">
              Strategy, upgrades, and teamwork — just like data science.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Playing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">TH16</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-neon-purple mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Strategic Thinking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClashSection;