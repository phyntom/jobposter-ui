export interface JobPost {
  id: number;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Contract' | 'Freelance' | 'Internship';
  description: string;
  location: string;
  salary: string;
  isRemote: boolean;
  company: Company;
  postedAt: Date;
  tags: string[];
}

export interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  website: string;
}
