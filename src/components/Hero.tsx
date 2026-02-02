import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-twilight" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-[15%] w-48 h-48 bg-twilight-coral/15 rounded-full blur-3xl animate-float-delay-1" />
        <div className="absolute bottom-40 left-[20%] w-56 h-56 bg-twilight-purple/20 rounded-full blur-3xl animate-float-delay-2" />
        <div className="absolute bottom-20 right-[10%] w-40 h-40 bg-twilight-gold/10 rounded-full blur-3xl animate-float-subtle" />
      </div>

      {/* Stars/Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="relative animate-fade-in-scale order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-twilight-coral to-twilight-gold opacity-60 blur-2xl animate-pulse-glow" />
              
              {/* Photo Container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary via-twilight-coral to-twilight-gold animate-float-slow">
                <div className="w-full h-full rounded-full overflow-hidden glass-strong">
                  <img
                    src={profilePhoto}
                    alt="Lakshya Prajapati"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-full animate-float-subtle">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <span className="text-2xl">👋</span>
              <span className="text-muted-foreground">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 animate-fade-in-up animation-delay-100">
              <span className="text-foreground">Lakshya</span>{' '}
              <span className="text-gradient-warm glow-text">Prajapati</span>
            </h1>

            {/* Role */}
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in-up animation-delay-200">
              AI & Data Science Student{' '}
              <span className="text-primary">|</span> ML Enthusiast
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-300">
              Result-oriented Computer Science undergraduate with a strong foundation in 
              Machine Learning, Data Science, and Python-based development. Building 
              data-driven solutions that make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
