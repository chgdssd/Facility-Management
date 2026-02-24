import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6).optional(),
  serviceId: z.string().optional(),
  message: z.string().min(5).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    const contact = {
      id: Date.now().toString(),
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });
    const file = path.join(dataDir, 'contacts.json');

    let existing: any[] = [];
    try {
      const raw = await fs.readFile(file, 'utf8');
      existing = JSON.parse(raw || '[]');
    } catch (e) {
      existing = [];
    }

    existing.push(contact);
    await fs.writeFile(file, JSON.stringify(existing, null, 2), 'utf8');

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
