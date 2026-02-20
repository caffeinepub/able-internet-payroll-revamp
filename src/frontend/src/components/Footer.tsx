import { Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Generate app identifier for UTM tracking
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'payroll-app';
  
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="border-t-4 border-primary bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Able Internet Payroll</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Modern payroll solutions designed for businesses of all sizes. Simple, secure, and compliant.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-foreground/20 bg-background text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-foreground/20 bg-background text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-foreground/20 bg-background text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-foreground/20 bg-background text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#mobile" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#docs" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#status" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  System Status
                </a>
              </li>
              <li>
                <a href="#security" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t-2 border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Able Internet Payroll. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 fill-accent text-accent" /> using{' '}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground transition-colors hover:text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
