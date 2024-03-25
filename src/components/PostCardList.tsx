import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { JobPost } from '../schema';
import Spinner from './Spinner';

type PostCardListProps = {
  isHome?: boolean;
};

const PostCardList = ({ isHome = false }: PostCardListProps) => {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?_limit=6' : '/api/jobs';
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setLoading(false);
        setJobs(data);
      } catch (err) {
        console.error('Fetch Jobs Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <div>
      <section className='px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {isHome ? 'Browse Jobs' : 'Jobs Listing'}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {jobs?.map((jobPost) => (
                <PostCard key={jobPost.id} jobPost={jobPost} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PostCardList;
