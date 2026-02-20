import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  iconImage?: string;
  title: string;
  description: string;
  category?: string;
}

export default function FeatureCard({ icon, iconImage, title, description, category }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <CardContent className="p-6">
        {/* Category Badge */}
        {category && (
          <Badge variant="secondary" className="mb-4 text-xs">
            {category}
          </Badge>
        )}

        {/* Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
          {iconImage ? (
            <img src={iconImage} alt={title} className="h-8 w-8" />
          ) : (
            icon
          )}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Hover Effect Border */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
      </CardContent>
    </Card>
  );
}
