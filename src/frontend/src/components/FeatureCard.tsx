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
    <Card className="group relative overflow-hidden glass-card transition-all duration-500 hover:scale-105 hover:shadow-glow interactive-glow">
      <CardContent className="p-7">
        {/* Category Badge */}
        {category && (
          <Badge variant="secondary" className="mb-5 bg-primary/10 text-primary text-xs font-bold tracking-wide">
            {category}
          </Badge>
        )}

        {/* Icon with Enhanced Glassmorphism */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow">
          {iconImage ? (
            <img src={iconImage} alt={title} className="h-9 w-9" />
          ) : (
            icon
          )}
        </div>

        {/* Title with Modern Typography */}
        <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Animated Gradient Border */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 group-hover:w-full" />
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:to-accent/5 group-hover:opacity-100" />
      </CardContent>
    </Card>
  );
}
