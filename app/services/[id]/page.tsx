import { services } from '@/lib/data';
import { QuoteForm } from '@/components/QuoteForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: `${service.name} | FaciliCare Solutions`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* Header */}
      <section
        className={`border-b border-border px-4 py-12 sm:px-6 lg:px-8 ${
          service.color ? `bg-gradient-to-br ${service.color}` : 'bg-card'
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/services" className="flex items-center gap-2">
              <ArrowLeft className={service.color ? 'h-4 w-4 text-white' : 'h-4 w-4'} />
              <span className={service.color ? 'text-white' : ''}>Back to Services</span>
            </Link>
          </Button>
          <div className="flex items-start gap-6">
            <div className="text-6xl">{service.icon}</div>
            <div>
              <h1 className={`mb-4 text-4xl font-bold sm:text-5xl ${service.color ? 'text-white' : 'text-card-foreground'}`}>
                {service.name}
              </h1>
              <p className={service.color ? 'text-white/90' : 'text-muted-foreground'}>{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">What's Included</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="rounded-lg border border-border bg-card p-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-foreground">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Why Choose Our {service.name}?</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-4">
                    <h3 className="mb-2 font-semibold text-foreground">✓ Professional Expertise</h3>
                    <p className="text-sm text-muted-foreground">Industry-trained specialists with years of experience</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-4">
                    <h3 className="mb-2 font-semibold text-foreground">✓ Cost-Effective</h3>
                    <p className="text-sm text-muted-foreground">Competitive pricing without compromising quality</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-4">
                    <h3 className="mb-2 font-semibold text-foreground">✓ Customizable Solutions</h3>
                    <p className="text-sm text-muted-foreground">Tailored service plans for your unique requirements</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-4">
                    <h3 className="mb-2 font-semibold text-foreground">✓ 24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">Always available for your urgent needs</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="rounded-lg border border-border bg-card p-4 cursor-pointer hover:border-primary">
                    <summary className="font-semibold text-foreground">How quickly can we get started?</summary>
                    <p className="mt-3 text-sm text-muted-foreground">We typically begin service within 48 hours of agreement. Emergency services are available on-demand.</p>
                  </details>
                  <details className="rounded-lg border border-border bg-card p-4 cursor-pointer hover:border-primary">
                    <summary className="font-semibold text-foreground">Do you offer flexible scheduling?</summary>
                    <p className="mt-3 text-sm text-muted-foreground">Yes, we work around your schedule with customizable frequency and timing options.</p>
                  </details>
                  <details className="rounded-lg border border-border bg-card p-4 cursor-pointer hover:border-primary">
                    <summary className="font-semibold text-foreground">What's included in the quote?</summary>
                    <p className="mt-3 text-sm text-muted-foreground">Our quotes are comprehensive and transparent with no hidden charges.</p>
                  </details>
                  <details className="rounded-lg border border-border bg-card p-4 cursor-pointer hover:border-primary">
                    <summary className="font-semibold text-foreground">Do you provide documentation?</summary>
                    <p className="mt-3 text-sm text-muted-foreground">Absolutely, we provide detailed reports and documentation for all services.</p>
                  </details>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Our Process</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Initial Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        We assess your facility and discuss your specific needs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Custom Plan Development</h3>
                      <p className="text-sm text-muted-foreground">
                        We create a tailored service plan and provide a quote
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Service Implementation</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team executes the service with precision and care
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Ongoing Support</h3>
                      <p className="text-sm text-muted-foreground">
                        We provide regular maintenance and support services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Quote Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg bg-card p-8 border border-border">
                <h3 className="mb-6 text-xl font-bold text-card-foreground">Get a Quote</h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`px-4 py-16 sm:px-6 lg:px-8 ${service.color ? `bg-gradient-to-r ${service.color}` : 'bg-primary'}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Experience Professional {service.name}?</h2>
          <p className="mb-8 text-white/90">Don't wait—let our experts transform your facility today.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              <a href="tel:+919036954451">Call +91 9036954451</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold text-card-foreground">You Might Also Need</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.id}`}
                  className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="mb-3 text-4xl">{relatedService.icon}</div>
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary">
                    {relatedService.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{relatedService.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
