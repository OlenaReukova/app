'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomeBanner = () => {
  return (
    <section className='py-16 px-6 bg-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:min-h-screen items-center'>
          <div className='hidden md:flex'>
            <Image
              src='/assets/slider/sliderImg1.jpg'
              alt='Productivity app screenshot'
              layout='responsive'
              width={16}
              height={9}
              className='object-cover'
            />
          </div>
          <div className='relative flex flex-col justify-center p-6 md:p-12'>
            <div className='absolute inset-0 md:hidden'>
              <Image
                src='/assets/slider/sliderImg1.jpg'
                alt='Productivity app screenshot'
                fill
                className='object-cover'
              />
            </div>
            <div className='relative z-10 bg-white bg-opacity-80 p-6 md:p-0 md:bg-opacity-100'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                RoutineMate
              </h1>
              <p className='text-lg text-gray-600 mb-6'>
                Build better routines, boost your productivity!
              </p>
              <Link href='/register'>
                <Button variant='default' border='rounded' size='lg'>
                  Get Started - It's Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
