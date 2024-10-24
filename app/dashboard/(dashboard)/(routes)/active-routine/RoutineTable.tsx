'use client';

import React, { useState } from 'react';

interface Routine {
  id: number;
  activity: string;
  time: string;
  frequency: string;
  active: boolean;
}

interface RoutineTableProps {
  routines: Routine[];
  userId: string;
}

const RoutineTable: React.FC<RoutineTableProps> = ({ routines, userId }) => {
  const [activeStates, setActiveStates] = useState<{ [key: number]: boolean }>(
    routines.reduce(
      (acc, routine) => ({ ...acc, [routine.id]: routine.active }),
      {}
    )
  );

  const handleCheckboxChange = async (id: number) => {
    const newActiveState = !activeStates[id];

    await fetch(`/api/update-routine/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: newActiveState, userId }),
    });

    // await fetch('/api/send-sms', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ userId, routineId: id, active: newActiveState }),
    // });

    setActiveStates((prev) => ({ ...prev, [id]: newActiveState }));
  };

  return (
    <table className='min-w-full border-collapse mt-5'>
      <thead>
        <tr className='bg-blue-500 text-white'>
          <th className='border border-gray-300 px-4 py-2 text-center'>ID</th>
          <th className='border border-gray-300 px-4 py-2 text-center'>
            Activity
          </th>
          <th className='border border-gray-300 px-4 py-2 text-center'>Time</th>
          <th className='border border-gray-300 px-4 py-2 text-center'>
            Frequency
          </th>
          <th className='border border-gray-300 px-4 py-2 text-center'>
            Active
          </th>
        </tr>
      </thead>
      <tbody>
        {routines.map((routine) => (
          <tr key={routine.id} className='odd:bg-white even:bg-gray-100'>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              {routine.id}
            </td>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              {routine.activity}
            </td>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              {routine.time}
            </td>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              {routine.frequency}
            </td>
            <td className='border border-gray-300 px-4 py-2 text-center'>
              <input
                type='checkbox'
                checked={activeStates[routine.id]}
                onChange={() => handleCheckboxChange(routine.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoutineTable;
