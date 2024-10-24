import React from 'react';

const About: React.FC = () => {
  return (
    <section className='py-8 bg-white'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center'>
        <div className='flex flex-col items-start text-left w-full md:w-1/2'>
          {/* <h3 className='text-sm font-semibold mb-2 text-[#1272A4]'>
            BUILD BETTER ROUTINES WITH ROUTINEMATE
          </h3> */}
          <h2 className='text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight'>
            At RoutineMate, we empower individuals to take control of their
            time, productivity, and wellness.
          </h2>
          <p className='text-lg text-gray-700 mb-4'>
            With RoutineMate, you can plan personalized daily routines, receive
            timely reminders, and track your progress — all in one place. Our
            goal is to provide a tool that not only helps you manage your day
            but also improves your overall well-being.
          </p>
          <p className='text-lg text-gray-700 mb-4'>
            We understand that consistency is key to success. That's why we've
            created an app that helps you form sustainable habits, optimize your
            productivity, and prioritize your health through regular reminders
            for tasks, exercise, sleep, and medication.
          </p>
          <p className='text-lg text-gray-700 mb-6'>
            Let’s build something great together. With RoutineMate, you can
            achieve more every day.
          </p>
          <a
            href='/contact'
            className='text-black hover:text-[#1272A4] transition-colors duration-300 ease-in-out text-lg font-semibold'>
            Get in touch -{'>'}
          </a>
        </div>
        <div className='w-full md:w-1/2 flex justify-center mt-8 md:mt-0'>
          <img
            src='/assets/homepage2.jpg'
            alt='homepage image'
            className='w-full h-auto md:w-96'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
