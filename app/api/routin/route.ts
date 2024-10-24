import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { activityName, selectTime, frequency, userId } = req.body;

    try {
      const newRoutine = await db.routine.create({
        data: {
          activity: activityName,
          time: selectTime,
          frequency: frequency,
          userId: userId,
        },
      });

      res.status(200).json(newRoutine);
    } catch (error) {
      console.error('Error saving routine:', error);
      res.status(500).json({ error: 'Failed to save routine' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
