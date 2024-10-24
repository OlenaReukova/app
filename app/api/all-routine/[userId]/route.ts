import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  if (!userId) {
    return NextResponse.json(
      { error: 'User ID is required.' },
      { status: 400 }
    );
  }

  try {
    const routines = await db.routine.findMany({
      where: { userId },
      orderBy: { id: 'asc' },
      select: {
        id: true,
        activity: true,
        time: true,
        frequency: true,
        active: true,
      },
    });

    return NextResponse.json(routines);
  } catch (error) {
    console.error('Error fetching routines:', error);
    return NextResponse.json(
      { error: 'Error fetching routines.' },
      { status: 500 }
    );
  }
}
