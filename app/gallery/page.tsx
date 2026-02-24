'use client';

import { Gallery } from '@/components/Gallery';
import { VideoGallery } from '@/components/VideoGallery';
import { galleryImages, videos } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 pt-24">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl mb-4">Our Work Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our comprehensive collection of facility management projects and professional services across various commercial spaces.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Photo Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Videos Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-8">Service Videos</h2>
          <VideoGallery videos={videos} />
          <div className="mt-12 p-8 bg-background rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">More Resources</h3>
            <p className="text-muted-foreground mb-4">
              Want to see how we can transform your facility? Browse our complete service catalog and view before & after transformations.
            </p>
            <Link href="/services" className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
