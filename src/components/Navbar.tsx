import NavItemLink from './NavItemLink';
import { IoReorderThree } from 'react-icons/io5';
import { GiLightningTree } from 'react-icons/gi';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [open, setIsOpen] = useState(false);
  return (
    <nav className=' bg-background border-b sticky top-0 z-[20]'>
      <div className='flex items-center justify-between gap-4 h-14'>
        <div className='px-4'>
          <GiLightningTree className='size-8' />
        </div>
        <div className='hidden lg:flex'>
          <ul className='list-none p-0 flex items-center gap-4'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/jobs'>Jobs</NavLink>
            </li>
            <li>
              <NavLink to='/new'>New</NavLink>
            </li>
            <li>
              <NavItemLink
                to='/cart'
                className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                label='Saved'
              ></NavItemLink>
            </li>
          </ul>
        </div>
        <div>
          <form className='flex-1 mx-3'>
            <div className='relative'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
              <Input
                className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
                placeholder='Search...'
                type='search'
              />
            </div>
          </form>
        </div>
        <div className='md:hidden text-4xl px-4'>
          <Sheet modal={false} open={open} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <IoReorderThree />
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <div>
                  <ul className=' place-content-start list-none p-0 flex flex-col gap-4'>
                    <li className='w-full'>
                      <NavLink to='/' onClick={() => setIsOpen(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/jobs' onClick={() => setIsOpen(false)}>
                        Jobs
                      </NavLink>
                    </li>
                    <li className='w-full'>
                      <NavLink to='/new' onClick={() => setIsOpen(false)}>
                        New
                      </NavLink>
                    </li>
                    <li className='w-full'>
                      <NavLink to='/cart' onClick={() => setIsOpen(false)}>
                        Cart
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

type SearchIconProps = {
  className?: string;
};
function SearchIcon(props: SearchIconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}
