import { Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Generate app identifier for UTM tracking
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'able-payroll';

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Able Internet Payroll</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Complete payroll management solutions for modern businesses. Simple, secure, and compliant.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground transition-colors hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground transition-colors hover:text-primary">Pricing</a></li>
              <li><a href="#integrations" className="text-muted-foreground transition-colors hover:text-primary">Integrations</a></li>
              <li><a href="#mobile" className="text-muted-foreground transition-colors hover:text-primary">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground transition-colors hover:text-primary">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">Contact</a></li>
              <li><a href="#careers" className="text-muted-foreground transition-colors hover:text-primary">Careers</a></li>
              <li><a href="#blog" className="text-muted-foreground transition-colors hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-muted-foreground transition-colors hover:text-primary">Help Center</a></li>
              <li><a href="#docs" className="text-muted-foreground transition-colors hover:text-primary">Documentation</a></li>
              <li><a href="#security" className="text-muted-foreground transition-colors hover:text-primary">Security</a></li>
              <li><a href="#compliance" className="text-muted-foreground transition-colors hover:text-primary">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 border-t border-border/50 pt-8">
          <a href="#facebook" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
            <SiFacebook className="h-5 w-5" />
          </a>
          <a href="#twitter" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
            <SiX className="h-5 w-5" />
          </a>
          <a href="#linkedin" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
            <SiLinkedin className="h-5 w-5" />
          </a>
          <a href="#instagram" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
            <SiInstagram className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {currentYear} Able Internet Payroll. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
