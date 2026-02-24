import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, title, text, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-card p-6 text-card-foreground shadow-sm">
      <div className="mb-4 flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-6 leading-relaxed text-muted-foreground">"{text}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}
