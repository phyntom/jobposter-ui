import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { SiSemanticuireact } from 'react-icons/si';
import NavItemLink from './NavItemLink';

function NavBar() {
  return (
    <Navbar className='border-b border-indigo-500'>
      <NavbarBrand>
        <SiSemanticuireact className='text-5xl' />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex' justify='center'>
        <NavbarItem>
          <NavItemLink
            to='/'
            className='bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            label='Home'
          />
        </NavbarItem>
        <NavbarItem>
          <NavItemLink
            to='/jobs'
            className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            label='Jobs'
          />
        </NavbarItem>
        <NavbarItem>
          <NavItemLink
            to='/new'
            className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            label='New Job'
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        <NavbarItem>
          <Badge content='5' color='primary'>
            <NavItemLink
              to='/cart'
              className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
              label='Saved'
            ></NavItemLink>
          </Badge>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
