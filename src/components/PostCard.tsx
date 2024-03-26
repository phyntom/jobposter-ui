import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from '@nextui-org/react';
import { JobPost } from '../schema/Job';
import { CiLocationOn } from 'react-icons/ci';
import { BsCartPlus, BsTags } from 'react-icons/bs';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

type JobCardProps = {
  jobPost: JobPost;
  showFullDescription?: boolean;
};

const JobCard = ({ jobPost, showFullDescription = false }: JobCardProps) => {
  let description = jobPost?.description;
  if (!showFullDescription) {
    description = description.substring(0, 300) + '...';
  }

  if (!jobPost)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <Card className='shadow-2xl px-4 md:px-6 border'>
      <CardHeader className='flex-wrap xl:flex-nowrap justify-between gap-4'>
        <div className='w-full'>
          <div className='flex items-center text-gray-500 my-2'>
            <span>
              <CiLocationOn className='text-xl' />
            </span>
            <span>{jobPost?.location}</span>
          </div>
          <h3 className='text-xl font-bold'>{jobPost?.title}</h3>
        </div>
        <Button color='primary' variant='bordered' className='mx-auto w-full'>
          {jobPost?.salary}
        </Button>
        {/* </Badge> */}
      </CardHeader>
      <CardBody className=''>
        <Markdown
          skipHtml={false}
          className='prose prose-sm prose-headings:text-lg prose-headings:font-medium'
        >
          {description}
        </Markdown>
      </CardBody>
      <CardFooter className='flex-col border-t-1 border-t-zinc-200 z-10'>
        <span className='flex items-start w-full text-base mb-4'>
          <BsTags className='mr-2' />
          <span>{jobPost.tags.join(' | ')}</span>
        </span>
        <div className='flex flex-row items-center justify-between w-full'>
          <Link
            to={`/jobs/${jobPost.id}`}
            className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full px-4 py-2'
          >
            {/* <Button
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
              radius='full'
              size='md'
            > */}
            Read More
            {/* </Button> */}
          </Link>
          <Button
            variant='ghost'
            className='!px-[1px] border-none'
            startContent={
              <BsCartPlus className='text-lg xl:text-2xl font-bold text-primary-700' />
            }
          ></Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
