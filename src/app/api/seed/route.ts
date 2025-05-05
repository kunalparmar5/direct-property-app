import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ message: 'Database seeding successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Database seeding failed' }, { status: 500 });
  }
}