interface TrustBadgeProps {
  icon: string;
  text: string;
  description?: string;
}

export function TrustBadge({ icon, text, description }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="font-semibold text-card-foreground">{text}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
