import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="font-bold text-primary">{companyInfo.name}</span>
        </Link>
        
        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/clients" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Clients
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <a
          href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
