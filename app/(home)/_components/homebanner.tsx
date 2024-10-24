'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

const HomeBanner = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const clickHandler = () => {
    router.push('/sign-in');
  };
  return (
    <div className='relative w-full'>
      <div className='relative w-full pb-[45%] overflow-hidden'>
        <Image
          src='/assets/slider/sliderImg1.jpg'
          alt='Charity banner image'
          fill
          className='object-cover'
          priority={true}
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center md:items-start md:text-left text-white p-4 md:p-8'>
        <h1 className='text-4xl md:text-8xl font-semibold mb-4 md:mb-6'>
          RoutineMate
        </h1>
        <h3 className='text-lg md:text-4xl leading-relaxed max-w-xl mb-2 md:mb-4'>
          Build better routines, boost your productivity!
        </h3>

        <div className='mt-8 flex justify-center'>
          {!userId ? (
            <Button
              variant='default'
              border='rounded'
              size='lg'
              onClick={clickHandler}>
              Try now
            </Button>
          ) : (
            <Link href='/dashboard'>
              <Button variant='default' border='rounded' size='lg'>
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
