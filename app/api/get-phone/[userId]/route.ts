import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required.' },
        { status: 400 }
      );
    }

    const userPhone = await db.userPhone.findUnique({
      where: { userId },
      select: { phoneNumber: true },
    });

    if (!userPhone) {
      return NextResponse.json(
        { error: 'Phone number not found for this user.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ phoneNumber: userPhone.phoneNumber });
  } catch (error) {
    console.error('Error fetching phone number:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error },
      { status: 500 }
    );
  }
}
