import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohd.nihalll03@gmail.com",
      href: "mailto:mohd.nihalll03@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8217071314",
      href: "tel:+918217071314"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mohdnihal03",
      href: "https://github.com/Mohdnihal03"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohdnihal03",
      href: "https://linkedin.com/in/mohdnihal03"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next data project or need creative design solutions? 
            Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-primary/20 hover:neon-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-surface border-primary/20 focus:neon-glow transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-surface border-primary/20 focus:neon-glow transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-surface border-primary/20 focus:neon-glow transition-all duration-300 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full neon-glow hover:shadow-neon transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborations, or just 
                chat about data, technology, and creative projects. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-primary/20 hover:neon-glow transition-all duration-300 hover:scale-105 group"
                >
                  <item.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  <div>
                    <div className="font-medium text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-primary/20">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium text-foreground">Location</div>
                <div className="text-sm text-muted-foreground">Karnataka, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;