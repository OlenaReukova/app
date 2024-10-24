import { NextResponse } from 'next/server';
import Twilio from 'twilio';
import { db } from '@/lib/db';

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const twilioClient = Twilio(accountSid, authToken);

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { phoneNumber, userId, activity } = await req.json();

  if (!phoneNumber || !userId || !activity) {
    return NextResponse.json(
      { error: 'Missing phoneNumber, userId, or activity.' },
      { status: 400 }
    );
  }

  const userPhone = await db.userPhone.findUnique({
    where: { userId },
  });

  if (!userPhone) {
    return NextResponse.json(
      { error: 'User phone number not found.' },
      { status: 404 }
    );
  }

  const message = `Your activity "${activity}" is now active.`;

  try {
    await sendSms(userPhone.phoneNumber, message);
    return NextResponse.json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json({ error: 'Failed to send SMS' }, { status: 500 });
  }
}

async function sendSms(to: string, body: string) {
  await twilioClient.messages.create({
    body,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  });
}
