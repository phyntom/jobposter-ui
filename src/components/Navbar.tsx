import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { SiSemanticuireact } from 'react-icons/si';

function NavBar() {
  return (
    <Navbar className='bg-primary border-b border-indigo-500'>
      <NavbarBrand>
        <SiSemanticuireact className='text-5xl' />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex' justify='center'>
        <NavbarItem>
          <a
            href='/index.html'
            className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
          >
            Home
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href='/index.html'
            className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
          >
            Jobs
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href='/index.html'
            className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
          >
            Add Job
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        <NavbarItem>
          <Badge content='5' color='primary'>
            <a
              href='/index.html'
              className='text-black bg-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            >
              Saved
            </a>
          </Badge>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
