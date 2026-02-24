import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, Target, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us | FaciliCare Solutions',
  description: 'Learn about FaciliCare Solutions and our commitment to facility management excellence',
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-card-foreground sm:text-5xl">About FaciliCare Solutions</h1>
          <p className="text-lg text-muted-foreground">
            Leading facility management services with over 20 years of industry experience
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="rounded-lg bg-card p-8 border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl">
                🎯
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional facility management services that exceed client expectations and contribute to
                clean, safe, and productive work environments.
              </p>
            </div>
            <div className="rounded-lg bg-card p-8 border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl">
                👁️
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted facility management partner for businesses, recognized for our commitment to
                quality, innovation, and sustainability.
              </p>
            </div>
            <div className="rounded-lg bg-card p-8 border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl">
                💡
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, excellence, reliability, and sustainability guide everything we do. We believe in building
                long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="border-y border-border bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-card-foreground">Our Story</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Founded in 2004, FaciliCare Solutions began with a simple vision: to revolutionize the facility
              management industry through dedication to quality, innovation, and customer satisfaction. What started as
              a small local operation has grown into a trusted partner for hundreds of businesses across the nation.
            </p>
            <p>
              Over the past two decades, we've built our reputation on reliability, attention to detail, and a genuine
              commitment to the success of our clients. Our team has grown from a handful of dedicated professionals to
              a nationwide network of experts, each bringing specialized skills and industry knowledge to every project.
            </p>
            <p>
              Today, FaciliCare Solutions proudly serves clients across various industries including technology,
              healthcare, finance, hospitality, and education. We've handled everything from routine office maintenance
              to large-scale facility transformations, and every project receives the same level of care and
              professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Active Clients</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">20+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">150+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-card-foreground">Core Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2 font-bold text-card-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in all aspects of our service delivery.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2 font-bold text-card-foreground">Teamwork</h3>
                <p className="text-muted-foreground">
                  Strong collaboration creates better results for our clients and team.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2 font-bold text-card-foreground">Reliability</h3>
                <p className="text-muted-foreground">
                  Our clients can depend on us to deliver consistently, every time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2 font-bold text-card-foreground">Sustainability</h3>
                <p className="text-muted-foreground">
                  We care for the environment and our communities for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Partner With Us?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's discuss how FaciliCare Solutions can transform your facility management experience.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
