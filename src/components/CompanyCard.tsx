import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Company } from '../schema';
import { MdOutlineAttachEmail, MdOutlineSettingsPhone } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';
import { Separator } from '@/components/ui/separator';
const CompanyCard = ({
  name,
  description,
  contactEmail,
  contactPhone,
  website,
}: Company) => {
  return (
    <div className='bg-white flex flex-col justify-center border px-8 py-8 shadow-md'>
      <div className='flex items-center justify-between'>
        <HiOutlineBuildingOffice2 className='text-4xl size-11' />
        <span className='hidden text-xl font-light'>Company Information</span>
      </div>
      <Separator className='my-4' />
      <h2 className='text-2xl'>{name}</h2>
      <p className='my-2'>{description}</p>
      <Separator className='my-4' />
      <div className='flex items-center justify-start'>
        <MdOutlineAttachEmail className='size-8' />
        <span className='text-primary md:text-base md:truncate p-2 ml-8'>
          {contactEmail}
        </span>
      </div>
      <div className='flex items-center justify-start'>
        <MdOutlineSettingsPhone className='size-8' />
        <span className='text-primary md:text-base md:truncate p-2 ml-8'>
          {contactPhone}
        </span>
      </div>
      <div className='flex items-center justify-start'>
        <TbWorldWww className='size-8' />
        <span className='text-primary md:text-base md:truncate p-2 ml-8'>
          {website}
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
