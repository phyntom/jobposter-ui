import NavItemLink from './NavItemLink';

const Footer = () => {
  return (
    <div className='flex w-full flex-col p-4 shadown-gray-500 shadow-xl border-t-2'>
      <div className='mx-auto flex w-full flex-col items-center justify-center px-6 py-12 lg:px-8'>
        <div className='flex items-center justify-center'>
          <svg fill='none' height='44' viewBox='0 0 32 32' width='44'>
            <path
              clipRule='evenodd'
              d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
              fill='currentColor'
              fillRule='evenodd'
            ></path>
          </svg>
          <span className='text-medium font-medium'>ACME</span>
        </div>
        <div className='flex flex-wrap justify-center gap-x-4 gap-y-1'>
          <NavItemLink
            to='/'
            className=' bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            label='Home'
          />
          <NavItemLink
            to='/jobs'
            className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            label='Jobs'
          />
          <NavItemLink
            to='/new'
            className='hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            label='New Job'
          />
        </div>
        <p className='mt-1 text-center text-small'>
          © 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
