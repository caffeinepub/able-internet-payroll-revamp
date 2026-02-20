import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category?: string;
}

export default function FeatureCard({ icon: Icon, title, description, category }: FeatureCardProps) {
  return (
    <Card className="clean-card clean-card-hover h-full">
      <CardContent className="p-6">
        {category && (
          <div className="mb-3 inline-block border border-primary/30 bg-primary/5 px-2 py-0.5 text-xs font-bold text-primary">
            {category}
          </div>
        )}
        <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-lg font-bold text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
