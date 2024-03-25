import Hero from '../components/Hero';
import HeroCards from '../components/HeroCards';
import PostCardList from '../components/PostCardList';
import jobs from '../dummy/gemini.json';

const HomePage = () => {
  const jobsData = JSON.parse(JSON.stringify(jobs)).jobs;
  return (
    <>
      <Hero />
      <HeroCards />
      <PostCardList postList={jobsData} isHome={true} />
    </>
  );
};

export default HomePage;
