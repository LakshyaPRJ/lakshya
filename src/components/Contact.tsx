import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-[10%] w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-[10%] w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float-delay-1" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Card */}
          <div className="glass p-8 md:p-12 rounded-3xl text-center">
            {/* Message */}
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a friendly chat about AI, data science, and technology. 
              Feel free to reach out!
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:lakshyaprj15@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  lakshyaprj15@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+917906582646" 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +91 7906582646
                </a>
              </div>
              <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Greater Noida, India</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:lakshyaprj15@gmail.com">
                <Send className="w-5 h-5" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
