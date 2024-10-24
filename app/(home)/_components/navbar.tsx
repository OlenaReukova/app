'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

const NavBar = () => {
  const [state, setState] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);
  const router = useRouter();
  const { userId } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else {
        setTop(-110);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  const menus = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Service', path: '/service' },
  ];

  const clickHandler = () => {
    router.push('/sign-in');
  };

  return (
    <nav
      className={`sticky top-${top} bg-white z-50 w-full border-b md:border-0`}
      style={{ transition: 'top ease-in-out 0.3s' }}>
      <div className='items-center px-4 max-w-screen-2xl mx-auto md:flex md:px-8'>
        {/* Logo and RoutineMate Text */}
        <div className='flex items-center justify-between py-3 md:py-5'>
          <Link href='/'>
            <div className='flex items-center space-x-2'>
              <Image
                src='/assets/logo.png'
                width={50}
                height={50}
                alt='Branding logo'
              />
              <span className='text-lg font-bold text-gray-900'>
                RoutineMate
              </span>
            </div>
          </Link>
          <div className='md:hidden'>
            <button
              className='text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border'
              onClick={() => setState(!state)}>
              {!state ? <Menu /> : <X />}
            </button>
          </div>
        </div>

        {/* Desktop menu */}
        <div
          className={`hidden md:flex flex-1 justify-end items-center space-x-10`}>
          {/* Nav Links */}
          <ul className='flex space-x-10'>
            {menus.map((item, idx) => (
              <li key={idx} className='font-medium text-black'>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-3 items-center'>
            {!userId ? (
              <Button
                variant='default'
                border='rounded'
                size='lg'
                onClick={clickHandler}>
                Sign in
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

        {/* Mobile Menu */}
        <div
          className={`fixed  inset-0 bg-white z-20 p-8 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            state ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}>
          <button
            className='absolute top-5 right-5 text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border'
            onClick={() => setState(false)}>
            <X />
          </button>

          <ul className='flex flex-col items-center space-y-8'>
            {menus.map((item, idx) => (
              <li
                key={idx}
                className='font-medium text-black text-2xl text-center'>
                <Link href={item.path} onClick={() => setState(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='mt-8 flex justify-center'>
            {!userId ? (
              <Button
                variant='default'
                border='rounded'
                size='lg'
                onClick={clickHandler}>
                Sign in
              </Button>
            ) : (
              <Link href='/dashboard'>
                <Button variant='success' border='rounded' size='lg'>
                  Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
