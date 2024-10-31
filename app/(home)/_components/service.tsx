'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  buttonText: string;
}

const ServiceCard = ({
  id,
  title,
  imageUrl,
  description,
  buttonText,
}: ServiceCardProps) => {
  return (
    <div className='bg-gray-100 shadow-lg overflow-hidden transition-transform transform'>
      <img src={imageUrl} alt={title} className='w-full h-48 object-cover' />
      <div className='p-8 flex flex-col items-center'>
        <h3 className='text-sm text-[#1272A4] font-semibold mb-2'>{title}</h3>
        <p className='text-lg text-gray-600 text-center mb-4'>{description}</p>
        <Link href={`/services/${id}`}>
          <Button variant='default' size='lg'>
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState<ServiceCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const serviceData = [
          {
            id: '1',
            title: 'PERSONALISED DAILY ROUTINE PLANNING',
            imageUrl: '/assets/card1.jpg',
            description:
              'Unlock your potential with personalized daily routine planning. ',
            buttonText: 'Planning',
          },
          {
            id: '2',
            title: 'ROUTINE TRACKING',
            imageUrl: '/assets/card2.jpg',
            description:
              'Stay accountable and motivated with RoutineMate’s routine tracking feature.',
            buttonText: 'Tracking',
          },
          {
            id: '3',
            title: 'WELLNESS SUPPORT',
            imageUrl: '/assets/card3.jpg',
            description:
              'Prioritize your well-being with RoutineMate’s wellness support feature.',
            buttonText: 'Support',
          },
        ];
        setServices(serviceData);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#f5f5f5] py-16'>
      <div className='container mx-auto'>
        <div className='text-left mb-10'>
          <h2 className='text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight'>
            Discover how we can help you achieve more with our tailored
            solutions.
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
