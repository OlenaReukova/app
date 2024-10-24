'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

interface RoutineFormValues {
  activityName: string;
  selectTime: string;
  frequency: string;
}

export default function AddNewRoutine() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RoutineFormValues>({
    defaultValues: {
      activityName: '',
      selectTime: '',
      frequency: 'daily',
    },
  });

  const onSubmit: SubmitHandler<RoutineFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/routine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Your routine has been saved successfully!');
        form.reset();
        console.log('Form submitted:', result);
      } else if (response.status === 400) {
        alert('There was an issue with your submission.');
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-8'>
      <h1 className='text-2xl font-bold mb-6'>Add Your New Routine</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='activityName'
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='selectTime'
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Time</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type='time'
                    className='border rounded p-2 w-full'
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='frequency'
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frequency</FormLabel>
                <FormControl>
                  <select {...field} className='border rounded p-2 w-full'>
                    <option value='daily'>Daily</option>
                    <option value='weekly'>Weekly</option>
                    <option value='monthly'>Monthly</option>
                  </select>
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type='submit'
            variant='default'
            disabled={isSubmitting}
            className='w-full mt-4'>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>

          <Link href='/dashboard'>
            <Button className='w-full mt-5' variant='outline' href='/dashboard'>
              Back to Dashboard
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}
