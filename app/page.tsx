import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { TrustBadge } from '@/components/TrustBadge';
import { ContactForm } from '@/components/ContactForm';
import { Gallery } from '@/components/Gallery';
import { VideoGallery } from '@/components/VideoGallery';
import { companyInfo, services, testimonials, galleryImages, videos } from '@/lib/data';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-32" style={{
        backgroundImage: "url('/images/ChatGPT%20Image%20Feb%2024%2C%202026%2C%2004_25_58%20PM.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional Facility Management for Your Business
          </h1>
          <p className="mb-8 text-lg text-white/90 sm:text-xl">
            Keep your workspace clean, safe, and productive with our comprehensive facility management and cleaning services
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge icon="⭐" text="500+ Clients" description="Trusted by businesses nationwide" />
            <TrustBadge icon="🏆" text="20+ Years" description="Industry experience and expertise" />
            <TrustBadge icon="✓" text="EPA Approved" description="Hospital-grade disinfection" />
            <TrustBadge icon="📋" text="24/7 Support" description="Always here when you need us" />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your facility's unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-card-foreground sm:text-4xl">Our Work Gallery</h2>
            <p className="text-lg text-muted-foreground">
              See how we transform and maintain professional facilities
            </p>
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Watch Our Services in Action</h2>
            <p className="text-lg text-muted-foreground">
              Learn more about our processes and service quality
            </p>
          </div>
          <VideoGallery videos={videos} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-card-foreground sm:text-4xl">Why Choose AB Group?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Highly trained professionals with years of experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Quality Guaranteed</h3>
                    <p className="text-sm text-muted-foreground">Industry-leading standards and certifications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Personalized Service</h3>
                    <p className="text-sm text-muted-foreground">Custom solutions for your specific needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground">Eco-Friendly</h3>
                    <p className="text-sm text-muted-foreground">Sustainable practices and green solutions</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Request a Free Consultation</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading businesses across multiple industries
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
            <TestimonialCard
              name="Emily Rodriguez"
              title="Property Manager, Office Complex"
              text="Outstanding service quality and professionalism. The team is reliable, efficient, and always respectful of our space."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Transform Your Facility?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Let's discuss how we can help keep your business clean, safe, and productive
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
