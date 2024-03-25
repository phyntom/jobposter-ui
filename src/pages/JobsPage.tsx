import PostCardList from '../components/PostCardList';
import jobs from '../dummy/gemini.json';

const JobsPage = () => {
  const jobsData = JSON.parse(JSON.stringify(jobs)).jobs;
  return (
    <>
      <PostCardList postList={jobsData} isHome={false} />
    </>
  );
};

export default JobsPage;
