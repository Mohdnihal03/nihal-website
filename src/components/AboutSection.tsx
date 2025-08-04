import { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'SQL', icon: Database, level: 85 },
    { name: 'Power BI', icon: Target, level: 80 },
    { name: 'Machine Learning', icon: Brain, level: 75 },
    { name: 'Docker', icon: Code, level: 70 },
    { name: 'Web Scraping', icon: Database, level: 85 }
  ];

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
    <section ref={sectionRef} className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                AI/ML Undergraduate at Yenepoya Institute of Technology
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate data enthusiast who believes in the power of data to transform businesses 
                and solve real-world problems. My journey combines technical expertise with creative thinking, 
                whether I'm building machine learning models, creating educational content, or designing 
                visual experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-card border border-primary/20 hover:neon-glow transition-all duration-300">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Collaboration</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-primary/20 hover:neon-glow transition-all duration-300">
                <Lightbulb className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Innovation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-primary/20 hover:neon-glow transition-all duration-300">
                <Target className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <p className="text-sm font-medium">Growth</p>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-surface-darker rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;