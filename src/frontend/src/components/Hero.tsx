import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-background py-20 sm:py-24 lg:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern text-border/30" />
      
      {/* Geometric Accent Elements */}
      <div className="absolute right-0 top-0 h-96 w-96 bg-primary/5" />
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-accent/5" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 border-2 border-primary bg-primary/5 px-4 py-2 text-sm font-bold text-primary animate-fade-in">
            <CheckCircle className="h-4 w-4" />
            <span>Trusted by thousands of businesses nationwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-display-xl animate-slide-up">
            Payroll Made
            <span className="mt-2 block text-primary">
              Simple & Secure
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-xl leading-relaxed text-muted-foreground sm:text-2xl animate-slide-up stagger-1">
            Complete payroll management, tax filing, and compliance solutions designed for modern businesses. 
            Process payroll in minutes, not hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-start gap-4 sm:flex-row animate-slide-up stagger-2">
            <Button 
              size="lg" 
              className="h-14 bg-accent px-8 text-base font-bold text-accent-foreground hover:bg-accent/90 button-hover"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-2 border-foreground/20 px-8 text-base font-bold text-foreground hover:border-foreground/40 hover:bg-secondary button-hover"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in stagger-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-semibold">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-semibold">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-semibold">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
