'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function QuoteForm() {
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
          className="bg-secondary"
          disabled={isSubmitting}
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          required
          className="bg-secondary"
          disabled={isSubmitting}
        />
      </div>
      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="bg-secondary"
        disabled={isSubmitting}
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        className="bg-secondary"
        disabled={isSubmitting}
      />
      <Input
        name="company"
        placeholder="Company Name"
        required
        className="bg-secondary"
        disabled={isSubmitting}
      />
      <div>
        <label className="text-sm font-medium text-card-foreground">Services Needed</label>
        <Select disabled={isSubmitting}>
          <SelectTrigger className="mt-2 bg-secondary">
            <SelectValue placeholder="Select services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
            <SelectItem value="janitorial">Janitorial Services</SelectItem>
            <SelectItem value="carpet">Carpet Cleaning</SelectItem>
            <SelectItem value="window">Window Cleaning</SelectItem>
            <SelectItem value="disinfection">Disinfection</SelectItem>
            <SelectItem value="floor-care">Floor Care</SelectItem>
            <SelectItem value="event-cleanup">Event Cleanup</SelectItem>
            <SelectItem value="maintenance">Maintenance Plans</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        name="details"
        placeholder="Describe your facility and requirements..."
        className="min-h-32 bg-secondary"
        required
        disabled={isSubmitting}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      {submitted && (
        <p className="text-sm text-green-600">Quote request sent! We'll contact you within 24 hours.</p>
      )}
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Request Quote'}
      </Button>
    </form>
  );
}
