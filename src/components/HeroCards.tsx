import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { LuCodepen } from 'react-icons/lu';
import CustomCard from './CustomCard';

const HeroCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <CustomCard
            cardClassName='text-foreground text-xl'
            cardTitle={'For Developers'}
            cardDescription={
              'Browse our React jobs and start your career today'
            }
            cardIcon={<LuCodepen className='text-4xl size-11' />}
            buttonText='Browse Jobs'
            buttonClassName='bg-accent text-foreground'
          />
          <CustomCard
            cardClassName='text-xl'
            cardTitle={'For Employers'}
            cardDescription={
              'List your job to find the perfect developer for the role'
            }
            cardIcon={<HiOutlineBuildingOffice2 className='text-4xl size-11' />}
            buttonText='Add Job'
            buttonClassName='bg-primary text-foreground'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
