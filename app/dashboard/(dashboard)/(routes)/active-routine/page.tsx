import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import RoutineTable from './RoutineTable';
import { db } from '@/lib/db';

const ActiveRoutinePage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const routines = await db.routine.findMany({
    where: { userId },
    orderBy: { id: 'asc' },
  });

  return <RoutineTable routines={routines} userId={userId} />;
};

export default ActiveRoutinePage;
