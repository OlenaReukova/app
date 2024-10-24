import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { userId, phoneNumber } = await request.json();
    if (!userId || !phoneNumber) {
      return NextResponse.json(
        { error: 'User ID and phone number are required.' },
        { status: 400 }
      );
    }

    const existingPhone = await db.userPhone.findUnique({
      where: { userId },
    });

    if (existingPhone) {
      await db.userPhone.update({
        where: { userId },
        data: { phoneNumber },
      });
    } else {
      await db.userPhone.create({
        data: {
          userId,
          phoneNumber,
        },
      });
    }

    return NextResponse.json({ message: 'Phone number saved successfully.' });
  } catch (error) {
    console.error('Error saving phone number:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error },
      { status: 500 }
    );
  }
}
