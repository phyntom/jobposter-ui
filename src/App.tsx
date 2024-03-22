import CustomCard from './components/CustomCard';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Office from '/images/Office.svg';
import Code from '/images/Code.svg';
import jobData from './dummy/jobs.json';
import { JobPost } from './schema';
import PostCardList from './components/PostCardList';
import { LuCodepen } from 'react-icons/lu';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import HeroCards from './components/HeroCards';

function App() {
  const jobsData: JobPost[] = JSON.parse(JSON.stringify(jobData)).jobs;

  return (
    <>
      <NavBar />
      <Hero />
      <HeroCards />
      <PostCardList postList={jobsData} />
      {/* <section className='mx-auto my-24'>
        <a
          href='jobs.html'
          className='block bg-black dark:bg-white dark:text-black text-white text-center py-4 px-6 my-8 rounded-xl hover:bg-gray-700'
        >
          View All Jobs
        </a>
      </section> */}
    </>
  );
}

export default App;
