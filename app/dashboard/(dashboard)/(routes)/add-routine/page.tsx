'use client';

import { useUser } from '@clerk/nextjs';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

interface RoutineFormValues {
  activity: string;
  time: string;
  frequency: string;
}

export default function AddNewRoutine() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();

  const form = useForm<RoutineFormValues>({
    defaultValues: {
      activity: '',
      time: '',
      frequency: 'daily',
    },
  });

  const onSubmit: SubmitHandler<RoutineFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/new-routine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userId: user?.id,
        }),
      });
      if (response.ok) {
        alert('Your routine has been saved successfully!');
        form.reset();
      } else {
        const result = await response.json();
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-8'>
      <h1 className='text-2xl font-bold mb-6'>Add Your New Routine</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <label htmlFor='activity' className='block text-sm font-medium'>
            Activity Name
          </label>
          <Input
            id='activity'
            {...form.register('activity', {
              required: 'Activity name is required',
            })}
            className='mt-1 block w-full'
          />
        </div>

        <div>
          <label htmlFor='time' className='block text-sm font-medium'>
            Select Time
          </label>
          <Input
            id='time'
            {...form.register('time', { required: 'Time is required' })}
            type='time'
            className='mt-1 block w-full'
          />
        </div>

        <div>
          <label htmlFor='frequency' className='block text-sm font-medium'>
            Frequency
          </label>
          <select
            id='frequency'
            {...form.register('frequency')}
            className='mt-1 block w-full border rounded p-2'>
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
          </select>
        </div>

        <Button
          type='submit'
          variant='default'
          disabled={isSubmitting}
          className='w-full mt-4'>
          {isSubmitting ? 'Saving...' : 'Save'}
        </Button>

        <Link href='/dashboard'>
          <Button className='w-full mt-5' variant='outline'>
            Back to Dashboard
          </Button>
        </Link>
      </form>
    </div>
  );
}
