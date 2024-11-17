import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

type NavItemLink = {
  to: string;
  className: string;
  label: string;
  onClick?: () => void;
};

const NavItemLink = (props: NavItemLink) => {
  const { to, className, label, ...rest } = props;
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
        {...rest}
      >
        {label}
      </Link>
    </>
  );
};

export default NavItemLink;
