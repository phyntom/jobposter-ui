import { TiWarningOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='flex flex-col justify-center text-center h-full'>
      <div className='mx-auto'>
        <TiWarningOutline className='text-warning-400 text-6xl font-bold mb-4 text-center' />
      </div>
      <h1 className='text-4xl font-bold mb-2'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist !!</p>
      <div>
        <Link
          to='/'
          className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4 w-[10%]'
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
