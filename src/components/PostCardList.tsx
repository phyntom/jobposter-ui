import { JobPost } from '../schema';
import PostCard from './PostCard';

type PostCardListProps = {
  postList: JobPost[];
};

const PostCardList = ({ postList }: PostCardListProps) => {
  return (
    <div>
      <section className='px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            Browse Jobs
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {postList?.map((jobPost) => (
              <PostCard key={jobPost.id} jobPost={jobPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostCardList;
