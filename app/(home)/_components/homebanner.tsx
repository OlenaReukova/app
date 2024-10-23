'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HomeBanner = () => {
  return (
    <div className='relative w-full'>
      <div className='relative w-full'>
        <AspectRatio ratio={16 / 9} className='overflow-hidden'>
          <Image
            src='/assets/slider/sliderImg1.jpg'
            alt='Charity banner image'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </AspectRatio>
      </div>

      <div className='absolute inset-0 flex flex-col justify-center items-start text-left text-white p-4 md:p-8'>
        <h2 className='text-4xl md:text-4xl font-semibold mb-4 md:mb-6'>
          RoutineMate
        </h2>
        <p className='text-md md:text-lg leading-relaxed max-w-xl mb-2 md:mb-4'>
          Build better routines, boost your productivity!
        </p>
        <Link href='/register'>
          <Button variant='success' size='lg' border='rounded'>
            VIEW SERVICES
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
