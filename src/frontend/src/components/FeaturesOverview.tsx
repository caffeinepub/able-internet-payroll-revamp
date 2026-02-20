import { Button } from '@/components/ui/button';
import FeatureCard from './FeatureCard';
import { Users, DollarSign, FileText, Clock, Shield, BarChart3, Smartphone, Zap, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturesOverview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Centralized employee database with onboarding, offboarding, and document management.',
    },
    {
      icon: DollarSign,
      title: 'Automated Payroll',
      description: 'Run payroll in minutes with automatic calculations, deductions, and direct deposits.',
    },
    {
      icon: FileText,
      title: 'Tax Filing',
      description: 'Automatic federal, state, and local tax calculations with guaranteed accuracy.',
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Integrated time and attendance tracking with overtime calculations and PTO management.',
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Stay compliant with labor laws, tax regulations, and reporting requirements.',
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analytics',
      description: 'Comprehensive reports and insights to help you make informed business decisions.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Manage payroll on the go with our mobile apps for iOS and Android.',
    },
    {
      icon: Zap,
      title: 'Integrations',
      description: 'Connect with your favorite accounting, HR, and time tracking software.',
    },
  ];

  return (
    <section className="bg-secondary py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-4 inline-block border-2 border-primary bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary">
            FEATURES
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-display-lg">
            Everything You Need to Run Payroll
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to simplify payroll management and keep your business compliant
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`mt-16 text-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button 
            size="lg" 
            className="h-14 bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-primary/90 button-hover"
          >
            View All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
