'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      // In a real app, you would send this to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          name="firstName"
          placeholder="First Name"
          required
          className="bg-slate-100 placeholder:text-slate-500"
          disabled={isSubmitting}
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          required
          className="bg-slate-100 placeholder:text-slate-500"
          disabled={isSubmitting}
        />
      </div>
      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="bg-slate-100 placeholder:text-slate-500"
        disabled={isSubmitting}
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="bg-slate-100 placeholder:text-slate-500"
        disabled={isSubmitting}
      />
      <Input
        name="company"
        placeholder="Company Name"
        className="bg-slate-100 placeholder:text-slate-500"
        disabled={isSubmitting}
      />
      <Textarea
        name="message"
        placeholder="Tell us about your facility management needs..."
        className="min-h-32 bg-slate-100 placeholder:text-slate-500"
        required
        disabled={isSubmitting}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      {submitted && (
        <p className="text-sm text-green-600">Message sent successfully! We'll be in touch soon.</p>
      )}
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
