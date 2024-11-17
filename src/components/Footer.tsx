import { NavLink } from 'react-router-dom';
import { GiLightningTree } from 'react-icons/gi';
import NavItemLink from './NavItemLink';

const Footer = () => {
  return (
    <div className='bg-white flex w-full flex-col p-4 shadown-gray-500 shadow-xl border-t-2'>
      <div className='mx-auto flex w-full flex-col items-center justify-center px-6 py-12 lg:px-8'>
        <div className='flex items-center justify-center gap-4'>
          <GiLightningTree className='size-6' />
          <span className='text-medium font-medium'>ACME</span>
        </div>
        <ul className='flex flex-wrap justify-center gap-x-4 gap-y-1'>
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
        <p className='mt-1 text-center text-small'>
          © 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
