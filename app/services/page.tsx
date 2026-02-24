import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | FaciliCare Solutions',
  description: 'Explore our comprehensive facility management and cleaning services',
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-card-foreground sm:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive facility management solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-card-foreground text-center">Service Details</h2>
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div key={service.id} className="rounded-lg border border-border bg-background p-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold text-foreground">{service.name}</h3>
                    <p className="mb-4 text-muted-foreground">{service.description}</p>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Ready to get started?
          </h2>
          <p className="mb-8 text-primary-foreground/90">
            Contact us today for a customized quote on your facility management needs
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
