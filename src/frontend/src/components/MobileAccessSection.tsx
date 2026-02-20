import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Monitor, Globe } from 'lucide-react';

export default function MobileAccessSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile First
            </div>
            
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Manage Payroll Anywhere, Anytime
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Access your payroll system from any device. Our responsive platform works seamlessly 
              on desktop, tablet, and mobile, giving you the flexibility to manage payroll on the go.
            </p>

            {/* Platform Features */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Native Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground">
                    iOS and Android apps with full functionality and offline support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Monitor className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Desktop Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-featured web application optimized for productivity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Tablet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Tablet Optimized</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for managers on the floor or working remotely
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Cloud-Based Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure access from anywhere with automatic syncing across devices
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Download Mobile App
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
              
              {/* Device Mockup */}
              <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-3 w-3/4 rounded-full bg-primary-foreground/30" />
                  <div className="h-3 w-1/2 rounded-full bg-primary-foreground/30" />
                  <div className="mt-6 space-y-3 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                    <div className="h-2 w-full rounded-full bg-primary-foreground/40" />
                    <div className="h-2 w-5/6 rounded-full bg-primary-foreground/40" />
                    <div className="h-2 w-4/6 rounded-full bg-primary-foreground/40" />
                  </div>
                  <div className="mt-4 space-y-3 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm">
                    <div className="h-2 w-full rounded-full bg-primary-foreground/40" />
                    <div className="h-2 w-3/4 rounded-full bg-primary-foreground/40" />
                  </div>
                  <div className="mt-6 flex gap-2">
                    <div className="h-10 flex-1 rounded-lg bg-accent/80" />
                    <div className="h-10 flex-1 rounded-lg bg-primary-foreground/20" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 top-8 rounded-lg bg-card p-3 shadow-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -left-4 bottom-12 rounded-lg bg-card p-3 shadow-lg">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
