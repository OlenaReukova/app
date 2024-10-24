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

    if (newActiveState) {
      try {
        const response = await fetch(`/api/get-phone/${userId}`);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch phone number');
        }

        const data = await response.json();
        const phoneNumber = data.phoneNumber;
        const routine = routines.find((routine) => routine.id === id);
        const activity = routine ? routine.activity : '';

        if (phoneNumber && activity) {
          const smsResponse = await fetch(`/api/send-sms/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phoneNumber: phoneNumber,
              userId,
              activity,
            }),
          });

          if (!smsResponse.ok) {
            const smsData = await smsResponse.json();
            throw new Error(smsData.error || 'Failed to send SMS');
          }
        } else {
          console.error('No phone number found for the user.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

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
