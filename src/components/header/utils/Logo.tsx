import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/SHOP.CO.svg" alt="Shop Image" width={160} height={22} />
    </Link>
  );
};

export default Logo;
