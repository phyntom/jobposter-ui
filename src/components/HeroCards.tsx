import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { LuCodepen } from 'react-icons/lu';
import CustomCard from './CustomCard';

const HeroCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <CustomCard
            cardClassName='dark:bg-secondary text-foreground text-xl border shadow-[6px_10px_2px_1px_rgba(0,0,0,0.90)]'
            cardTitle={'For Developers'}
            cardDescription={
              'Browse our React jobs and start your career today'
            }
            cardIcon={<LuCodepen className='text-4xl size-11' />}
            buttonText='Browse Jobs'
            buttonClassName='bg-accent text-foreground'
          />
          <CustomCard
            cardClassName='text-xl shadow-lg border shadow-[6px_10px_2px_1px_rgba(0,0,0,0.90)]'
            cardTitle={'For Employers'}
            cardDescription={
              'List your job to find the perfect developer for the role'
            }
            cardIcon={<HiOutlineBuildingOffice2 className='text-4xl size-11' />}
            buttonText='Add Job'
            buttonClassName='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-foreground'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
