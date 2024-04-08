import NavItemLink from './NavItemLink';
import { IoReorderThree } from 'react-icons/io5';
import { Sheet } from '@components/ui/Sheet';

function NavBar() {
  return (
    <nav className='border-b border-indigo-500'>
      <div className='flex items-center justify-between gap-4 h-14'>
        <div className='px-4'>
          <p>Logo</p>
        </div>
        <div>
          <ul className=' place-content-start list-none p-0 flex items-center'>
            <li>
              <NavItemLink
                to='/'
                className='bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                label='Home'
              />
            </li>
            <li>
              <NavItemLink
                to='/jobs'
                className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                label='Jobs'
              />
            </li>
            <li>
              <NavItemLink
                to='/new'
                className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                label='New Job'
              />
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
        <div className='text-4xl px-4'>
          <Sheet>
            <SheetTrigger></SheetTrigger>
            <IoReorderThree />
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

{
  /* <NavbarContent className='hidden sm:flex' justify='center'>
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
</NavbarContent> */
}
