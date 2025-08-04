import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Shopify Sales Dashboard",
      description: "Interactive Power BI dashboard analyzing e-commerce sales data with real-time insights, customer segmentation, and revenue forecasting.",
      tags: ["Power BI", "SQL", "Data Analysis", "E-commerce"],
      github: "#",
      demo: "#",
      color: "from-primary to-neon-cyan"
    },
    {
      title: "IPL Match Winner Predictor",
      description: "Machine learning model predicting IPL match outcomes using historical data, player statistics, and venue analysis with 85% accuracy.",
      tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      github: "#",
      demo: "#",
      color: "from-accent to-neon-purple"
    },
    {
      title: "Patient Management Dashboard",
      description: "Healthcare analytics dashboard for tracking patient metrics, appointment scheduling, and medical records with secure data handling.",
      tags: ["Power BI", "Healthcare", "Data Visualization", "SQL"],
      github: "#",
      demo: "#",
      color: "from-neon-purple to-neon-pink"
    }
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
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in data analysis, machine learning, and visualization 
            through real-world projects that solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-card border-primary/20 hover:neon-glow transition-all duration-500 hover:scale-105 group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-4 group-hover:animate-pulse-neon`} />
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:neon-glow transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary/30 hover:neon-glow group"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 neon-glow hover:shadow-neon group"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;