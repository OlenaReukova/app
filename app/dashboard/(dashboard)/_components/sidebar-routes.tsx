'use client';

import {
  BarChart,
  Compass,
  Layout,
  List,
  UserCog,
  SquarePlus,
  ShieldQuestion,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import { SidebarItem } from './sidebar-item';

const routes = [
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
