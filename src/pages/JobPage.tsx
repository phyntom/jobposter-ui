import { JobPost } from '../schema';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { LuArrowLeftCircle } from 'react-icons/lu';
import PostCard from '../components/PostCard';
import CompanyCard from '../components/CompanyCard';
import Hero from '@/components/Hero';

const fetchJob = (id: string) => {
   return fetch(`https://jobposter-api.onrender.com/api/jobs/${id}`).then((res) => res.json());
};

const JobPage = () => {
   const { id } = useParams();
   const { isLoading, data } = useQuery<JobPost>({
      queryKey: ['job', id],
      queryFn: () => fetchJob(id as string),
   });

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   isLoading && <Spinner loading={isLoading} />;
   if (!data) return null;
   return (
      <>
         <Hero />
         <div className='container my-8'>
            <section>
               <div className='m-auto py-6 px-6'>
                  <Link
                     to='/jobs'
                     className='text-indigo-500 hover:text-indigo-600 flex items-center'
                  >
                     <LuArrowLeftCircle className='mr-2 text-lg font-medium' /> Back to Job Listings
                  </Link>
               </div>
            </section>
            <section>
               <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-4'>
                  <PostCard jobPost={data} showFullDescription={true} />
                  <aside>
                     <CompanyCard {...data.company} />
                  </aside>
               </div>
            </section>
         </div>
      </>
   );
};

export default JobPage;
