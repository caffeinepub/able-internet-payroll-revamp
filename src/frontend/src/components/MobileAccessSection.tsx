import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Monitor, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MobileAccessSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-muted/50 to-muted/30 py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-5 py-2 text-sm font-bold text-primary">
              <Smartphone className="h-5 w-5" />
              Mobile First
            </div>
            
            <h2 className="mb-8 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-display-lg">
              Manage Payroll Anywhere, Anytime
            </h2>
            
            <p className="mb-10 text-xl leading-relaxed text-muted-foreground" style={{ letterSpacing: '0.01em' }}>
              Access your payroll system from any device. Our responsive platform works seamlessly 
              on desktop, tablet, and mobile, giving you the flexibility to manage payroll on the go.
            </p>

            {/* Platform Features with Glassmorphism */}
            <div className="mb-10 space-y-5">
              <div className="flex items-start gap-5 glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Native Mobile Apps</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    iOS and Android apps with full functionality and offline support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Desktop Experience</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Full-featured web application optimized for productivity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Tablet className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Tablet Optimized</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Perfect for managers on the floor or working remotely
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">Cloud-Based Access</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Secure access from anywhere with automatic syncing across devices
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="h-14 bg-gradient-to-r from-primary to-primary/90 px-10 text-lg font-bold text-primary-foreground shadow-glow button-hover interactive-glow"
            >
              Download Mobile App
            </Button>
          </div>

          {/* Visual with Enhanced Glassmorphism */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative mx-auto max-w-md">
              {/* Decorative Glow */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 blur-3xl" />
              
              {/* Device Mockup with Glassmorphism */}
              <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-accent p-10 shadow-glow-lg">
                <div className="space-y-5">
                  <div className="h-4 w-3/4 rounded-full glass-light" />
                  <div className="h-4 w-1/2 rounded-full glass-light" />
                  <div className="mt-8 space-y-4 rounded-2xl glass-card p-5">
                    <div className="h-3 w-full rounded-full bg-primary-foreground/40" />
                    <div className="h-3 w-5/6 rounded-full bg-primary-foreground/40" />
                    <div className="h-3 w-4/6 rounded-full bg-primary-foreground/40" />
                  </div>
                  <div className="mt-5 space-y-4 rounded-2xl glass-card p-5">
                    <div className="h-3 w-full rounded-full bg-primary-foreground/40" />
                    <div className="h-3 w-3/4 rounded-full bg-primary-foreground/40" />
                  </div>
                  <div className="mt-8 flex gap-3">
                    <div className="h-12 flex-1 rounded-xl bg-gradient-to-r from-accent to-accent/90 shadow-glow-accent" />
                    <div className="h-12 flex-1 rounded-xl glass-light" />
                  </div>
                </div>
              </div>

              {/* Floating Icons with Animation */}
              <div className="absolute -right-6 top-12 glass-card rounded-2xl p-4 shadow-glow animate-float">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -left-6 bottom-16 glass-card rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: '1s' }}>
                <Monitor className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
