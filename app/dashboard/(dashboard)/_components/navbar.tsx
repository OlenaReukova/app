import { MobileSidebar } from './mobile-sidebar';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm justify-end'>
      <MobileSidebar />
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
