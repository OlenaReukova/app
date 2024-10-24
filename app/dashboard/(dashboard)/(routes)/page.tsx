'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

interface PhoneNumberFormValues {
  phoneNumber: string;
}

export default function Dashboard() {
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialPhoneNumber, setInitialPhoneNumber] = useState<
    string | undefined
  >(undefined);
  const form = useForm<PhoneNumberFormValues>({
    defaultValues: {
      phoneNumber: initialPhoneNumber || '',
    },
  });

  const userId = user?.id;

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/get-phone/${userId}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch phone number');
        }
        setInitialPhoneNumber(data.phoneNumber);
      } catch (error) {
        console.error('Error fetching phone number:', error);
      }
    };

    fetchPhoneNumber();
  }, [userId]);

  const onSubmitPhoneNumber: SubmitHandler<PhoneNumberFormValues> = async (
    data
  ) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/save-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, userId: user?.id }),
      });

      if (response.ok) {
        alert('Phone number saved successfully!');
        form.reset();
      } else {
        alert('Failed to save phone number.');
      }
    } catch (error) {
      console.error('Error submitting phone number:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>
          Welcome, {user?.firstName || 'User'}!
        </h1>
      </div>

      <div className='mb-6'>
        Please enter your phone number below. This will allow us to send you
        reminders based on your routine.
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmitPhoneNumber)}
        className='space-y-6'>
        <div>
          <label htmlFor='phoneNumber' className='block text-sm font-medium'>
            Phone Number
          </label>
          <Input
            id='phoneNumber'
            {...form.register('phoneNumber', {
              required: 'Phone number is required',
            })}
            type='tel'
            placeholder='+1234567890'
            className='mt-1 block w-full'
          />
        </div>

        <Button
          type='submit'
          variant='default'
          disabled={isSubmitting}
          className='w-full mt-4'>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}
