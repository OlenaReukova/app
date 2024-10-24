'use client';

import { SquarePlus, ShieldCheck } from 'lucide-react';

import { SidebarItem } from './sidebar-item';

const routes = [
  {
    icon: ShieldCheck,
    label: 'My Routines',
    href: '/dashboard/active-routine',
  },
  {
    icon: SquarePlus,
    label: 'Add New Routine',
    href: '/dashboard/add-routine',
  },
];

export const SidebarRoutes = () => {
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
