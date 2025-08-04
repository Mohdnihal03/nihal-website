import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Youtube, Play, Users, Video } from 'lucide-react';

const YouTubeSection = () => {
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
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="flex items-center mb-6">
              <Youtube className="h-12 w-12 text-red-500 mr-4" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  The Beginner Analyst
                </h2>
                <p className="text-muted-foreground">YouTube Channel</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I break down data analytics for beginners, making complex concepts 
              accessible and practical. Teaching helps me grow too — every explanation 
              deepens my own understanding.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 mb-8 italic text-foreground">
              "Teaching makes me better, too."
            </blockquote>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-primary/20">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xl font-bold">Growing</div>
                  <div className="text-sm text-muted-foreground">Community</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-primary/20">
                <Video className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-xl font-bold">Beginner</div>
                  <div className="text-sm text-muted-foreground">Focused</div>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="neon-glow hover:shadow-neon transition-all duration-300 group"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Follow on YouTube
              </a>
            </Button>
          </div>
          
          {/* Right side - Video placeholder */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="aspect-video bg-card border border-primary/20 rounded-lg overflow-hidden hover:neon-glow transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-surface-darker to-surface flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-lg font-medium text-foreground">Latest Tutorial</p>
                    <p className="text-sm text-muted-foreground">Data Analytics for Beginners</p>
                  </div>
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="lg" className="rounded-full">
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;