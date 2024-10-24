import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  const { id } = params;

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { active } = await req.json();

    const updatedRoutine = await db.routine.updateMany({
      where: {
        id: Number(id),
        userId: userId,
      },
      data: {
        active,
      },
    });

    if (updatedRoutine.count === 0) {
      return NextResponse.json(
        { message: 'Routine not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Routine updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to update routine' },
      { status: 500 }
    );
  }
}
