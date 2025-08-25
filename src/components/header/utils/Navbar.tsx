import { NavbarInterface, useNavbar } from '@/hooks/useNavbar';
import Link from 'next/link';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';

const Navbar: React.FC = () => {
  const { navbarEl } = useNavbar();
  return (
    <nav className="navbar">
      {navbarEl?.map((data: NavbarInterface) => (
        <Link className="item-link" key={data?.id} href={data?.href ?? ''}>
          <p>{data?.title}</p>
          {data?.dropdown && <FaAngleDown className="icon" />}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
