import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileCheck, Lock, Award, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ComplianceSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Shield className="mr-2 h-4 w-4" />
            Security & Compliance
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built on Trust & Security
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Enterprise-grade security and compliance features to protect your business and employee data
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Tax Filing & Compliance */}
          <Card className="border-border/50 bg-card">
            <CardContent className="p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Automated Tax Filing
              </h3>
              <p className="mb-6 text-muted-foreground">
                Stay compliant with federal, state, and local tax requirements. We handle all the complexity so you don't have to.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">W-2 & 1099 Forms</p>
                    <p className="text-sm text-muted-foreground">Automatic generation and e-filing of year-end tax forms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Quarterly Reports</p>
                    <p className="text-sm text-muted-foreground">941, 940, and state unemployment tax filings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Multi-State Support</p>
                    <p className="text-sm text-muted-foreground">Handle employees across all 50 states with ease</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Tax Penalty Protection</p>
                    <p className="text-sm text-muted-foreground">We cover penalties if we make a filing error</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & Data Protection */}
          <Card className="border-border/50 bg-card">
            <CardContent className="p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Enterprise Security
              </h3>
              <p className="mb-6 text-muted-foreground">
                Your sensitive payroll data is protected with bank-level encryption and industry-leading security protocols.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">256-bit Encryption</p>
                    <p className="text-sm text-muted-foreground">Military-grade encryption for data at rest and in transit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">SOC 2 Type II Certified</p>
                    <p className="text-sm text-muted-foreground">Independently audited security controls and processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">GDPR Compliant</p>
                    <p className="text-sm text-muted-foreground">Full compliance with international data protection regulations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Multi-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Additional security layer for all user accounts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="mt-12">
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Certified & Trusted</h3>
                    <p className="text-muted-foreground">Industry-leading compliance and security standards</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">GDPR</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">IRS Approved</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-4 py-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">PCI DSS</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Our security and compliance team works around the clock to ensure your data is protected and your business stays compliant with all regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
