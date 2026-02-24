import { clients } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Clients | FaciliCare Solutions',
  description: 'Trusted by leading businesses and organizations across multiple industries',
};

export default function ClientsPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-card-foreground sm:text-5xl">Our Clients</h1>
          <p className="text-lg text-muted-foreground">
            Trusted by over 500 businesses nationwide across diverse industries
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Featured Clients</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center hover:border-primary transition-colors"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">
                      {client.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.industry}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Clients Note */}
          <div className="rounded-lg bg-secondary/50 p-8 text-center">
            <p className="text-muted-foreground">
              These are just a few of our valued clients. We proudly serve over 500 businesses across multiple
              industries. Contact us to learn how we can serve your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="border-y border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-2xl font-bold text-card-foreground">Industries We Serve</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { industry: 'Technology', icon: '💻', description: 'From startups to tech giants' },
              { industry: 'Healthcare', icon: '🏥', description: 'Hospitals and medical facilities' },
              { industry: 'Finance', icon: '💼', description: 'Banks and financial institutions' },
              { industry: 'Retail', icon: '🛍️', description: 'Shops and shopping centers' },
              { industry: 'Hospitality', icon: '🏨', description: 'Hotels and restaurants' },
              { industry: 'Education', icon: '🎓', description: 'Schools and universities' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg bg-background p-6 border border-border text-center">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-foreground">{item.industry}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Highlight */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-2xl font-bold text-foreground text-center">Why Our Clients Choose Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-8 border border-border">
              <div className="mb-4 text-3xl">✨</div>
              <h3 className="mb-3 font-bold text-card-foreground">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Consistent, professional service that exceeds expectations every single time.
              </p>
            </div>
            <div className="rounded-lg bg-card p-8 border border-border">
              <div className="mb-4 text-3xl">🤝</div>
              <h3 className="mb-3 font-bold text-card-foreground">Partnership</h3>
              <p className="text-sm text-muted-foreground">
                We treat your facility like our own and invest in your long-term success.
              </p>
            </div>
            <div className="rounded-lg bg-card p-8 border border-border">
              <div className="mb-4 text-3xl">⏰</div>
              <h3 className="mb-3 font-bold text-card-foreground">Reliability</h3>
              <p className="text-sm text-muted-foreground">
                Dependable service with 24/7 support and rapid response to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-card-foreground">By The Numbers</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Active Clients</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">1000+</div>
              <p className="text-muted-foreground">Facilities Managed</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <p className="text-muted-foreground">Service Types</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Join Our Growing Client Base
          </h2>
          <p className="mb-8 text-primary-foreground/90">
            Experience the FaciliCare difference with professional, reliable facility management services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
