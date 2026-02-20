import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: 'url(/assets/generated/hero-banner.dim_1200x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          {/* Animated Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-light px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg animate-fade-in">
            <Sparkles className="h-4 w-4 animate-pulse-glow" />
            <span>Trusted by thousands of businesses nationwide</span>
          </div>

          {/* Main Headline with Modern Typography */}
          <h1 className="mb-8 text-5xl font-extrabold tracking-tighter text-primary-foreground sm:text-6xl md:text-7xl lg:text-display-xl animate-slide-up">
            Payroll Made
            <span className="mt-2 block bg-gradient-to-r from-accent via-accent/90 to-primary bg-clip-text text-transparent animate-pulse-glow">
              Simple & Secure
            </span>
          </h1>

          {/* Subheadline with Generous Spacing */}
          <p className="mb-12 text-xl leading-relaxed text-primary-foreground/90 sm:text-2xl md:text-3xl lg:px-16 animate-slide-up stagger-1" style={{ letterSpacing: '0.01em' }}>
            Complete payroll management, tax filing, and compliance solutions designed for modern businesses. 
            Process payroll in minutes, not hours.
          </p>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row animate-slide-up stagger-2">
            <Button 
              size="lg" 
              className="group h-14 bg-gradient-to-r from-accent to-accent/90 px-10 text-lg font-bold text-accent-foreground shadow-glow-accent button-hover interactive-glow"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 glass-light border-2 border-primary-foreground/30 px-10 text-lg font-bold text-primary-foreground button-hover"
            >
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators with Modern Styling */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-base text-primary-foreground/85 animate-fade-in stagger-3">
            <div className="flex items-center gap-3 glass-light rounded-full px-5 py-2.5">
              <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No credit card required</span>
            </div>
            <div className="flex items-center gap-3 glass-light rounded-full px-5 py-2.5">
              <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-3 glass-light rounded-full px-5 py-2.5">
              <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full text-background" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
