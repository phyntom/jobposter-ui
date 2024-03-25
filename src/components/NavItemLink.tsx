import { cn } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';

type NavItemLink = {
  to: string;
  className: string;
  label: string;
};

const NavItemLink = ({ to, className, label }: NavItemLink) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <>
      <Link
        className={cn(
          'nav-item',
          isActive && 'bg-black text-white',
          !isActive && 'bg-transparent',
          className
        )}
        to={to}
      >
        {label}
      </Link>
    </>
  );
};

export default NavItemLink;
