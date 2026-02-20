import { Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Generate app identifier for UTM tracking
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'able-payroll';

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-muted/30 to-muted/50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-5 text-xl font-bold tracking-tight text-foreground">Able Internet Payroll</h3>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              Complete payroll management solutions for modern businesses. Simple, secure, and compliant.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-foreground">Product</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#features" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="#integrations" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Integrations</a></li>
              <li><a href="#mobile" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#about" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Contact</a></li>
              <li><a href="#careers" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#blog" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-foreground">Support</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#help" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#docs" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#security" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Security</a></li>
              <li><a href="#compliance" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6 border-t border-border/50 pt-10">
          <a href="#facebook" className="glass-card rounded-full p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-primary hover:shadow-glow" aria-label="Facebook">
            <SiFacebook className="h-6 w-6" />
          </a>
          <a href="#twitter" className="glass-card rounded-full p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-primary hover:shadow-glow" aria-label="Twitter">
            <SiX className="h-6 w-6" />
          </a>
          <a href="#linkedin" className="glass-card rounded-full p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-primary hover:shadow-glow" aria-label="LinkedIn">
            <SiLinkedin className="h-6 w-6" />
          </a>
          <a href="#instagram" className="glass-card rounded-full p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-primary hover:shadow-glow" aria-label="Instagram">
            <SiInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-border/50 pt-10 text-base text-muted-foreground sm:flex-row">
          <p className="font-medium">© {currentYear} Able Internet Payroll. All rights reserved.</p>
          <p className="flex items-center gap-2 font-medium">
            Built with <Heart className="h-5 w-5 fill-red-500 text-red-500 animate-pulse" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary transition-all duration-300 hover:text-accent hover:scale-105 inline-block"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
