import {
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Button,
} from '@nextui-org/react';
import { cn } from '../util/cn';

type CustomCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardIcon: React.ReactNode;
  buttonText: string;
  cardClassName?: string;
  buttonClassName?: string;
};

const CustomCard = ({
  cardTitle,
  cardDescription,
  cardIcon,
  buttonText,
  cardClassName,
  buttonClassName,
}: CustomCardProps) => {
  return (
    <Card className={cn(`py-4`, cardClassName)} isBlurred>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-2xl font-bold'>{cardTitle}</p>
        {cardIcon}
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <p>{cardDescription}</p>
      </CardBody>
      <CardFooter>
        <Button radius='full' size='md' className={cn(buttonClassName)}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
