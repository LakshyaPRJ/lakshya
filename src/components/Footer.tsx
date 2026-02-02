import { Github, Linkedin, Instagram, Twitter, Youtube, Camera } from 'lucide-react';
import behanceIcon from '@/assets/behance icon.png';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/LakshyaPRJ' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/lakshyaprajapati/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/brodezainer/' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/prjLakshya' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@lakshyaprj' },
  { name: 'Behance', image: behanceIcon, href: 'https://www.behance.net/lakshyaprj' },
  { name: 'Photography', icon: Camera, href: 'https://www.instagram.com/visualjournl/' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all"
                aria-label={social.name}
              >
                {social.image ? (
                  <img src={social.image} alt={social.name} className="w-5 h-5 object-contain" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8" />

        {/* Copyright & Credits */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Designed & Built by{' '}
            <span className="text-gradient-warm font-semibold">Lakshya Prajapati</span>
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
