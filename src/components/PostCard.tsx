import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from '@nextui-org/react';
import { JobPost } from '../schema/Job';
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { BsCartPlus } from 'react-icons/bs';
import Markdown from 'react-markdown';

type JobCardProps = {
  jobPost: JobPost;
};

const JobCard = ({ jobPost }: JobCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  let description = jobPost?.description;
  if (!showDetails) {
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
          <div className='text-gray-500 my-2'>{jobPost?.location}</div>
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
      <CardFooter className='flex-col md:flex-row border-t-1 border-t-zinc-200 z-10 justify-between gap-2'>
        <span className='text-base flex items-center'>
          <CiLocationOn className='text-xl' />
          <span>{jobPost.location}</span>
        </span>
        <Button
          className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          radius='full'
          size='md'
          href={`/job/${jobPost.id}`}
        >
          Read More
        </Button>
        <Button
          variant='ghost'
          className='!px-[1px] border-none'
          startContent={
            <BsCartPlus className='text-lg xl:text-2xl font-bold text-primary-700' />
          }
        ></Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
