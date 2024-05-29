import { PropsWithChildren } from 'react';
import { cn } from '../util/cn';
import { Button } from './ui/button';
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from '@/components/ui/card';

type CustomCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardIcon: React.ReactNode;
  buttonText: string;
  cardClassName?: string;
  buttonClassName?: string;
};

const CustomCard: React.FC<PropsWithChildren<CustomCardProps>> = ({
  cardTitle,
  cardDescription,
  cardIcon,
  buttonText,
  cardClassName,
  buttonClassName,
}: CustomCardProps) => {
  return (
    <Card className={cn(`py-4`, cardClassName)}>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-2xl font-bold'>{cardTitle}</p>
        {cardIcon}
      </CardHeader>
      <CardContent className='overflow-visible py-2'>
        <p>{cardDescription}</p>
      </CardContent>
      <CardFooter>
        <Button className={cn(buttonClassName)}>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
