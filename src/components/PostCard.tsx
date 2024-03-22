import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from '@nextui-org/react';
import { JobPost } from '../schema/Job';

type JobCardProps = {
  jobPost: JobPost;
};

const JobCard = ({ jobPost }: JobCardProps) => {
  if (!jobPost)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <Card className='dark:bg-background-900 shadow-2xl'>
      <CardHeader className='flex-wrap lg:flex-nowrap justify-between gap-4'>
        <div className='w-full'>
          <div className='text-gray-500 my-2'>{jobPost?.location}</div>
          <h3 className='text-xl font-bold'>{jobPost?.title}</h3>
        </div>
        {/* <Badge
          content={jobPost?.type}
          color='secondary'
          className='sm:text-xs'
          placement='bottom-left'
        > */}
        <Button color='primary' variant='bordered' className='mx-auto w-full'>
          {jobPost?.company.name}
        </Button>
        {/* </Badge> */}
      </CardHeader>
      <CardBody className='px-4 md:px-8 text-lg font-sans'>
        <p>
          {jobPost?.description?.length > 100
            ? jobPost.description.substring(0, 350) + '...'
            : jobPost.description}
        </p>
      </CardBody>
      <CardFooter className=' border-t-1 border-t-zinc-200 z-10 justify-end gap-4'>
        <Button
          className='text-base'
          radius='full'
          size='md'
          href={`/job/${jobPost.id}`}
        >
          View Job
        </Button>
        <Button className='text-base bg-primary-600' radius='full' size='md'>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
