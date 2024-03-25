import PostCard from './PostCard';
import { JobPost } from '../schema';
import Spinner from './Spinner';
import { useQuery } from 'react-query';

type PostCardListProps = {
  isHome?: boolean;
};

const fetchJobs = async (isHome: boolean) => {
  const apiURL = isHome ? '/api/jobs?_limit=6' : '/api/jobs';
  const res = await fetch(apiURL);
  return res.json();
};

const PostCardList = ({ isHome = false }: PostCardListProps) => {
  const { isLoading, error, data } = useQuery<JobPost[], Error>('jobs', () =>
    fetchJobs(isHome)
  );
  if (isLoading) return <Spinner loading={isLoading} />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <section className='px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {isHome ? 'Browse Jobs' : 'Jobs Listing'}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {data?.map((jobPost) => (
              <PostCard key={jobPost.id} jobPost={jobPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostCardList;
