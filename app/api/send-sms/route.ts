import { NextResponse } from 'next/server';
import Twilio from 'twilio';
import { db } from '@/lib/db';

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const twilioClient = Twilio(accountSid, authToken);

interface ReminderRequest {
  phoneNumber: string;
  message: string;
  scheduledTime: string; // ISO string
}

export async function POST(req: Request) {
    const { userId, routineId, active } = await req.json();
  const { phoneNumber, message, scheduledTime }: ReminderRequest =
    await req.json();

  // Validate input
  if (!phoneNumber || !message || !scheduledTime) {
    return NextResponse.json(
      { error: 'Missing phoneNumber, message, or scheduledTime.' },
      { status: 400 }
    );
  }

  const delay = new Date(scheduledTime).getTime() - Date.now();

  if (delay < 0) {
    return NextResponse.json(
      { error: 'Scheduled time must be in the future.' },
      { status: 400 }
    );
  }

  // Schedule the reminder
  setTimeout(async () => {
    try {
      await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
        to: phoneNumber,
      });
      console.log(`Message sent to ${phoneNumber}: ${message}`);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }, delay);

  return NextResponse.json(
    { message: 'Your reminder is set successfully.' },
    { status: 200 }
  );
}










const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);




  const userPhone = await db.userPhone.findUnique({
    where: { userId },
  });

  if (!userPhone) {
    return NextResponse.json(
      { message: 'User phone number not found' },
      { status: 404 }
    );
  }

  const message = active
    ? `Routine ${routineId} is now active.`
    : `Routine ${routineId} is now inactive.`;

  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: userPhone.phoneNumber,
  });

  return NextResponse.json({ message: 'SMS sent successfully' });
}









