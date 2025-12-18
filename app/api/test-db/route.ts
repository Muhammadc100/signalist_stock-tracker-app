import { connectToDatabase } from '@/database/mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Database connection successful!' }, { status: 200 });
  } catch (error) {
    console.error('Database connection failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Database connection failed', error: errorMessage }, { status: 500 });
  }
}