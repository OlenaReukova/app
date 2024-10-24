import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { activity, time, frequency, userId } = await request.json();

    if (!activity || !time || !frequency || !userId) {
      return NextResponse.json(
        { error: 'All fields including userId are required.' },
        { status: 400 }
      );
    }
    const newRoutine = await db.routine.create({
      data: {
        activity,
        time,
        frequency,
        userId,
      },
    });

    return NextResponse.json({
      message: 'Routine saved successfully.',
      newRoutine,
    });
  } catch (error) {
    console.error('Error saving routine:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error },
      { status: 500 }
    );
  }
}
