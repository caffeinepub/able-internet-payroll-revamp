import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileCheck, Lock, Award, CheckCircle2, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ComplianceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-5 py-2 text-sm font-bold text-primary">
            <Shield className="h-5 w-5" />
            Security & Compliance
          </div>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-display-lg">
            Built on Trust & Security
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl" style={{ letterSpacing: '0.01em' }}>
            Enterprise-grade security and compliance features to protect your business and employee data
          </p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={cardsRef}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Tax Filing & Compliance */}
          <div className={`transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="glass-card h-full transition-all duration-500 hover:scale-105 hover:shadow-glow">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-glow">
                  <FileCheck className="h-9 w-9" />
                </div>
                <h3 className="mb-5 text-3xl font-bold tracking-tight text-foreground">
                  Automated Tax Filing
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  Stay compliant with federal, state, and local tax requirements. We handle all the complexity so you don't have to.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">W-2 & 1099 Forms</p>
                      <p className="text-sm text-muted-foreground">Automatic generation and e-filing of year-end tax forms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Quarterly Reports</p>
                      <p className="text-sm text-muted-foreground">941, 940, and state unemployment tax filings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Multi-State Support</p>
                      <p className="text-sm text-muted-foreground">Handle employees across all 50 states with ease</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Tax Penalty Protection</p>
                      <p className="text-sm text-muted-foreground">We cover penalties if we make a filing error</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security & Data Protection */}
          <div className={`transition-all duration-1000 delay-200 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="glass-card h-full transition-all duration-500 hover:scale-105 hover:shadow-glow">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-glow">
                  <Lock className="h-9 w-9" />
                </div>
                <h3 className="mb-5 text-3xl font-bold tracking-tight text-foreground">
                  Enterprise Security
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  Your sensitive payroll data is protected with bank-level encryption and industry-leading security protocols.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">256-bit Encryption</p>
                      <p className="text-sm text-muted-foreground">Military-grade encryption for data at rest and in transit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">SOC 2 Type II Certified</p>
                      <p className="text-sm text-muted-foreground">Independently audited security controls and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">GDPR Compliant</p>
                      <p className="text-sm text-muted-foreground">Full compliance with international data protection regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl glass-light p-4 transition-all duration-300 hover:scale-105">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Multi-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Additional security layer for all user accounts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div 
          ref={badgesRef}
          className={`mt-16 transition-all duration-1000 ${
            badgesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="glass-card border-2 transition-all duration-500 hover:shadow-glow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-glow">
                    <Award className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Certified & Trusted</h3>
                    <p className="text-lg text-muted-foreground">Industry-leading compliance and security standards</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-3 glass-light rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-base font-bold">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-3 glass-light rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <Lock className="h-6 w-6 text-primary" />
                    <span className="text-base font-bold">GDPR</span>
                  </div>
                  <div className="flex items-center gap-3 glass-light rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <FileCheck className="h-6 w-6 text-primary" />
                    <span className="text-base font-bold">IRS Approved</span>
                  </div>
                  <div className="flex items-center gap-3 glass-light rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                    <AlertCircle className="h-6 w-6 text-primary" />
                    <span className="text-base font-bold">PCI DSS</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground">
            Our security and compliance team works around the clock to ensure your data is protected and your business stays compliant with all regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
