import { JobPost } from '../schema';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import PostCard from '../components/PostCard';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const fetchJob = (id: number) => {
  return fetch(`/api/jobs/${id}`).then((res) => res.json());
};

const JobPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery<JobPost>({
    queryKey: ['job', id],
    queryFn: () => fetchJob(parseInt(id as string)),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  isLoading && <Spinner loading={isLoading} />;
  if (!data) return null;
  return (
    <section className='relative h-screen w-[50%] mx-auto px-8 my-8'>
      <PostCard jobPost={data as JobPost} showFullDescription={true} />
    </section>
  );
};

export default JobPage;
