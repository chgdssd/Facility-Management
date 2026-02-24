import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  features?: string[];
  isLink?: boolean;
  color?: string;
}

export function ServiceCard({
  id,
  name,
  description,
  icon,
  features,
  isLink = true,
  color,
}: ServiceCardProps) {
  const base = 'group h-full rounded-lg p-6 transition-all duration-300 hover:shadow-lg';
  const colorful = color ? `bg-gradient-to-br ${color} text-white` : 'border border-border bg-card';

  const content = (
    <div className={`${base} ${colorful} `}>
      <div className="mb-4 flex items-start justify-between">
        <div className="text-4xl">{icon}</div>
        {isLink && (
          <ArrowRight className={color ? 'h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100' : 'h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100'} />
        )}
      </div>
      <h3 className={`mb-2 text-xl font-semibold ${color ? 'text-white' : 'text-card-foreground'}`}>{name}</h3>
      <p className={`mb-4 text-sm ${color ? 'text-white/85' : 'text-muted-foreground'}`}>{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className={`flex items-center gap-2 text-xs ${color ? 'text-white/90' : 'text-muted-foreground'}`}>
              <span className={`h-1 w-1 rounded-full ${color ? 'bg-white/90' : 'bg-primary'}`} />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (!isLink) {
    return content;
  }

  return (
    <Link href={`/services/${id}`} className="block">
      {content}
    </Link>
  );
}
