import Hero from '../components/Hero';
import HeroCards from '../components/HeroCards';
import PostCardList from '../components/PostCardList';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroCards />
      <PostCardList isHome={true} />
    </>
  );
};

export default HomePage;
