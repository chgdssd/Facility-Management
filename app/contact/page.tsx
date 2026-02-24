import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';
import { companyInfo } from '@/lib/data';

export const metadata = {
  title: 'Contact Us | FaciliCare Solutions',
  description: 'Get in touch with FaciliCare Solutions for facility management services',
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-card-foreground sm:text-5xl">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team to discuss your facility management needs
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Phone */}
            <div className="rounded-lg bg-card border border-border p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">Phone</h3>
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-primary hover:underline text-sm"
              >
                {companyInfo.phone}
              </a>
              <p className="mt-2 text-xs text-muted-foreground">Mon-Fri, 8am-6pm EST</p>
            </div>

            {/* Email */}
            <div className="rounded-lg bg-card border border-border p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">Email</h3>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-primary hover:underline text-sm break-all"
              >
                {companyInfo.email}
              </a>
              <p className="mt-2 text-xs text-muted-foreground">Response within 24 hours</p>
            </div>

            {/* WhatsApp */}
            <div className="rounded-lg bg-card border border-border p-6 text-center">
              <div className="mb-4 flex justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">WhatsApp</h3>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Start Chat
              </a>
              <p className="mt-2 text-xs text-muted-foreground">Quick responses available</p>
            </div>

            {/* Hours */}
            <div className="rounded-lg bg-card border border-border p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday<br />
                8:00 AM - 6:00 PM EST
              </p>
              <p className="mt-2 text-xs text-muted-foreground">24/7 Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="border-y border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-card-foreground">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-card-foreground">Why Contact Us?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Service Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about our comprehensive facility management services and how we can help your business.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Get a free assessment of your facility and a customized proposal tailored to your needs.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Quote Request</h3>
                  <p className="text-sm text-muted-foreground">
                    Request a detailed quote for any of our services with no obligation.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Emergency Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Need immediate assistance? Call our 24/7 emergency support line.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Account Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Current clients can reach out for service adjustments and account support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-card-foreground">How quickly can you respond to service requests?</h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 hours. For emergency situations, our 24/7 support team can
                assist you immediately.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-card-foreground">Do you offer customized service plans?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! Every client is unique. We'll work with you to create a customized facility management plan
                that fits your specific needs and budget.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-card-foreground">What areas do you serve?</h3>
              <p className="text-sm text-muted-foreground">
                We provide services across the nation with a strong presence on the East Coast and Midwest. Contact us to
                see if we serve your area.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-card-foreground">Are your cleaning products eco-friendly?</h3>
              <p className="text-sm text-muted-foreground">
                We offer both traditional and eco-friendly cleaning options. Discuss your preferences with our team during
                your consultation.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-card-foreground">Do you provide weekend or evening services?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! We can accommodate evening and weekend service schedules to minimize disruption to your business
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Ready to Transform Your Facility?
          </h2>
          <p className="mb-8 text-primary-foreground/90">
            Contact us today for a free consultation and custom facility management solution.
          </p>
          <a href={`tel:${companyInfo.phone}`} className="inline-block">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Call Us Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
