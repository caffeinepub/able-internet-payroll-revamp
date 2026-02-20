import FeatureCard from './FeatureCard';
import { Button } from '@/components/ui/button';
import { Users, DollarSign, FileText, CreditCard, Clock, Heart, BarChart3, Shield } from 'lucide-react';

export default function FeaturesOverview() {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      iconImage: '/assets/generated/icon-employees.dim_64x64.png',
      title: 'Employee Management',
      description: 'Centralize employee data, track hours, manage PTO, and maintain comprehensive records all in one secure platform.',
      category: 'Core'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Payroll Processing',
      description: 'Run payroll in minutes with automated calculations, direct deposits, and instant pay stubs for your entire team.',
      category: 'Core'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      iconImage: '/assets/generated/icon-tax.dim_64x64.png',
      title: 'Tax Filing & Compliance',
      description: 'Automated tax calculations, quarterly filings, W-2s, 1099s, and year-end reporting. Stay compliant effortlessly.',
      category: 'Core'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      iconImage: '/assets/generated/icon-payment.dim_64x64.png',
      title: 'Direct Deposit',
      description: 'Fast, secure direct deposits to employee bank accounts. Support for multiple payment methods and schedules.',
      category: 'Payments'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Time Tracking Integration',
      description: 'Seamlessly integrate with popular time tracking tools. Automatically sync hours worked for accurate payroll.',
      category: 'Integration'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Benefits Administration',
      description: 'Manage health insurance, retirement plans, and other benefits. Automate deductions and enrollment.',
      category: 'Benefits'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      iconImage: '/assets/generated/icon-reports.dim_64x64.png',
      title: 'Reporting & Analytics',
      description: 'Comprehensive reports and real-time analytics. Track labor costs, tax liabilities, and payroll trends.',
      category: 'Analytics'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security & Compliance',
      description: 'Bank-level encryption, SOC 2 certified, and GDPR compliant. Your data is protected with industry-leading security.',
      category: 'Security'
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to Run Payroll
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Powerful features designed to simplify payroll management and keep your business compliant
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconImage={feature.iconImage}
              title={feature.title}
              description={feature.description}
              category={feature.category}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Join thousands of businesses that trust Able Internet Payroll
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
