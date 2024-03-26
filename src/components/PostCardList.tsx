import PostCard from './PostCard';
import { JobPost } from '../schema';
import Spinner from './Spinner';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

type PostCardListProps = {
  isHome?: boolean;
};

async function fetchJobs(): Promise<JobPost[]> {
  const res = await fetch('/api/jobs');
  return res.json();
}

const PostCardList = ({ isHome = false }: PostCardListProps) => {
  const { isLoading, error, data } = useQuery<JobPost[]>({
    queryKey: ['jobs'],
    queryFn: () => fetchJobs(),
  });
  if (isLoading) return <Spinner loading={isLoading} />;

  if (error) return <div>Something went wrong...</div>;

  const jobList = isHome ? data?.slice(0, 6) : data;

  return (
    <div>
      <section className='px-4 py-10'>
        <motion.div
          className='container-xl lg:container m-auto'
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3, type: 'spring' }}
        >
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {isHome ? 'Browse Jobs' : 'Jobs Listing'}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {jobList?.map((jobPost) => (
              <PostCard
                key={jobPost.id}
                jobPost={jobPost}
                showFullDescription={false}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PostCardList;
