import { JobPost } from '../schema';
import PostCard from './PostCard';

type PostCardListProps = {
  postList: JobPost[];
  isHome?: boolean;
};

const PostCardList = ({ postList, isHome = false }: PostCardListProps) => {
  if (isHome) {
    postList = postList.slice(0, 6);
  }
  return (
    <div>
      <section className='px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {isHome ? 'Browse Jobs' : 'Jobs Listing'}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 xl:grid-cols-3 gap-6'>
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
