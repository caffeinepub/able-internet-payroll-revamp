import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Monitor, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MobileAccessSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative bg-background py-20 sm:py-24 lg:py-28">
      {/* Geometric Background */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-4 inline-block border-2 border-primary bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary">
              MOBILE FIRST
            </div>
            
            <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-display-lg">
              Manage Payroll Anywhere, Anytime
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Access your payroll system from any device. Our responsive platform works seamlessly 
              on desktop, tablet, and mobile, giving you the flexibility to manage payroll on the go.
            </p>

            {/* Platform Features */}
            <div className="mb-8 space-y-4">
              <div className="accent-bar flex items-start gap-4 border-l-4 border-accent bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-foreground">Native Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground">
                    iOS and Android apps with full functionality and offline support
                  </p>
                </div>
              </div>

              <div className="accent-bar flex items-start gap-4 border-l-4 border-accent bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <Monitor className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-foreground">Desktop Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-featured web application optimized for productivity
                  </p>
                </div>
              </div>

              <div className="accent-bar flex items-start gap-4 border-l-4 border-accent bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <Tablet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-foreground">Tablet Optimized</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for managers on the floor or working remotely
                  </p>
                </div>
              </div>

              <div className="accent-bar flex items-start gap-4 border-l-4 border-accent bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-foreground">Cloud-Based Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure access from anywhere with automatic syncing across devices
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="h-14 bg-accent px-8 text-base font-bold text-accent-foreground hover:bg-accent/90 button-hover"
            >
              Download Mobile App
            </Button>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative mx-auto max-w-md">
              {/* Device Mockup */}
              <div className="relative border-8 border-primary bg-primary p-8 shadow-strong">
                <div className="space-y-4 bg-background p-6">
                  <div className="h-3 w-3/4 bg-muted" />
                  <div className="h-3 w-1/2 bg-muted" />
                  <div className="mt-6 space-y-3 border-2 border-border p-4">
                    <div className="h-2 w-full bg-muted" />
                    <div className="h-2 w-5/6 bg-muted" />
                    <div className="h-2 w-4/6 bg-muted" />
                  </div>
                  <div className="mt-4 space-y-3 border-2 border-border p-4">
                    <div className="h-2 w-full bg-muted" />
                    <div className="h-2 w-3/4 bg-muted" />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="h-10 flex-1 bg-accent" />
                    <div className="h-10 flex-1 border-2 border-border" />
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -right-4 top-8 border-2 border-primary bg-background p-3 shadow-soft">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -left-4 bottom-12 border-2 border-primary bg-background p-3 shadow-soft">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
