import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileCheck, Lock, Award, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ComplianceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative bg-secondary py-20 sm:py-24 lg:py-28">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-4 inline-block border-2 border-primary bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary">
            SECURITY & COMPLIANCE
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-display-lg">
            Built on Trust & Security
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security and compliance features to protect your business and employee data
          </p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={cardsRef}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Tax Filing & Compliance */}
          <div className={`transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="clean-card h-full">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                  <FileCheck className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Automated Tax Filing
                </h3>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Stay compliant with federal, state, and local tax requirements. We handle all the complexity so you don't have to.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-bold text-foreground">W-2 & 1099 Forms</p>
                      <p className="text-sm text-muted-foreground">Automatic generation and e-filing of year-end tax forms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-bold text-foreground">Quarterly Reports</p>
                      <p className="text-sm text-muted-foreground">941, 940, and state unemployment tax filings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-bold text-foreground">Multi-State Support</p>
                      <p className="text-sm text-muted-foreground">Handle employees across all 50 states with ease</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
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
          <div className={`transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="clean-card h-full">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                  <Lock className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Enterprise Security
                </h3>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Your sensitive payroll data is protected with bank-level encryption and industry-leading security protocols.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-bold text-foreground">256-bit Encryption</p>
                      <p className="text-sm text-muted-foreground">Military-grade encryption for data at rest and in transit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-bold text-foreground">SOC 2 Type II Certified</p>
                      <p className="text-sm text-muted-foreground">Independently audited security controls and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <div>
                      <p className="font-bold text-foreground">GDPR Compliant</p>
                      <p className="text-sm text-muted-foreground">Full compliance with international data protection regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-l-4 border-accent bg-background p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
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
          className={`mt-12 transition-all duration-700 ${
            badgesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="clean-card border-4 border-primary">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Certified & Trusted</h3>
                    <p className="text-base text-muted-foreground">Industry-leading compliance and security standards</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="flex items-center gap-2 border-2 border-primary bg-primary/5 px-4 py-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-2 border-2 border-primary bg-primary/5 px-4 py-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">GDPR</span>
                  </div>
                  <div className="flex items-center gap-2 border-2 border-primary bg-primary/5 px-4 py-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">IRS Approved</span>
                  </div>
                  <div className="flex items-center gap-2 border-2 border-primary bg-primary/5 px-4 py-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold">PCI DSS</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Our security and compliance team works around the clock to ensure your data is protected and your business stays compliant with all regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
