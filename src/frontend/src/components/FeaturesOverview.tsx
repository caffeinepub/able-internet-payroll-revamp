import FeatureCard from './FeatureCard';
import { Button } from '@/components/ui/button';
import { Users, DollarSign, FileText, CreditCard, Clock, Heart, BarChart3, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeaturesOverview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: <Users className="h-9 w-9" />,
      iconImage: '/assets/generated/icon-employees.dim_64x64.png',
      title: 'Employee Management',
      description: 'Centralize employee data, track hours, manage PTO, and maintain comprehensive records all in one secure platform.',
      category: 'Core'
    },
    {
      icon: <DollarSign className="h-9 w-9" />,
      title: 'Payroll Processing',
      description: 'Run payroll in minutes with automated calculations, direct deposits, and instant pay stubs for your entire team.',
      category: 'Core'
    },
    {
      icon: <FileText className="h-9 w-9" />,
      iconImage: '/assets/generated/icon-tax.dim_64x64.png',
      title: 'Tax Filing & Compliance',
      description: 'Automated tax calculations, quarterly filings, W-2s, 1099s, and year-end reporting. Stay compliant effortlessly.',
      category: 'Core'
    },
    {
      icon: <CreditCard className="h-9 w-9" />,
      iconImage: '/assets/generated/icon-payment.dim_64x64.png',
      title: 'Direct Deposit',
      description: 'Fast, secure direct deposits to employee bank accounts. Support for multiple payment methods and schedules.',
      category: 'Payments'
    },
    {
      icon: <Clock className="h-9 w-9" />,
      title: 'Time Tracking Integration',
      description: 'Seamlessly integrate with popular time tracking tools. Automatically sync hours worked for accurate payroll.',
      category: 'Integration'
    },
    {
      icon: <Heart className="h-9 w-9" />,
      title: 'Benefits Administration',
      description: 'Manage health insurance, retirement plans, and other benefits. Automate deductions and enrollment.',
      category: 'Benefits'
    },
    {
      icon: <BarChart3 className="h-9 w-9" />,
      iconImage: '/assets/generated/icon-reports.dim_64x64.png',
      title: 'Reporting & Analytics',
      description: 'Comprehensive reports and real-time analytics. Track labor costs, tax liabilities, and payroll trends.',
      category: 'Analytics'
    },
    {
      icon: <Shield className="h-9 w-9" />,
      title: 'Security & Compliance',
      description: 'Bank-level encryption, SOC 2 certified, and GDPR compliant. Your data is protected with industry-leading security.',
      category: 'Security'
    }
  ];

  return (
    <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="mb-6 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-display-lg">
            Everything You Need to Run Payroll
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl" style={{ letterSpacing: '0.01em' }}>
            Powerful features designed to simplify payroll management and keep your business compliant
          </p>
        </div>

        {/* Features Grid with Staggered Animation */}
        <div 
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                iconImage={feature.iconImage}
                title={feature.title}
                description={feature.description}
                category={feature.category}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          ref={ctaRef}
          className={`mt-20 text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="mb-8 text-xl font-medium text-muted-foreground">
            Join thousands of businesses that trust Able Internet Payroll
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button 
              size="lg" 
              className="h-14 bg-gradient-to-r from-primary to-primary/90 px-10 text-lg font-bold text-primary-foreground shadow-glow button-hover interactive-glow"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-2 px-10 text-lg font-bold button-hover"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
