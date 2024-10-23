'use client';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className='text-white' />,
      link: '',
    },
    {
      icon: <Twitter className='text-white' />,
      link: '',
    },
    {
      icon: <Instagram className='text-white' />,
      link: '',
    },
  ];

  const navigationLinks = [
    { title: 'Services', path: '/services' },
    { title: 'Schedule Appointment', path: '/schedule-appointment' },
    { title: 'Complete Intake', path: '/complete-intake' },
    {
      title: 'Contact',
      path: '',
      external: true,
    },
  ];

  return (
    <footer className='bg-[#132a0c;] text-white py-10'>
      <div className='max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col items-center md:items-start mb-6 md:mb-0'></div>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0'>
          {navigationLinks.map((item, idx) =>
            item.external ? (
              <a
                key={idx}
                href={item.path}
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium hover:text-gray-400'>
                {item.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.path}
                className='font-medium hover:text-gray-400'>
                {item.title}
              </Link>
            )
          )}
        </div>
        <div className='flex space-x-4 mb-6 md:mb-0'>
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-300'>
              {social.icon}
            </a>
          ))}
        </div>
        <div className='text-center md:text-right'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Created for The RoutineMate. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
