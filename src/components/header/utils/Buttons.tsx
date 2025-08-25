import Link from 'next/link';
import React from 'react';
import { BsBasket3Fill } from 'react-icons/bs';
import { FaCircleUser } from "react-icons/fa6";

const Buttons: React.FC = () => {
  return (
    <div className="buttons">
      <Link className="button-r" href="">
        <BsBasket3Fill className="icon" />
      </Link>
      <Link className="button-r" href="">
        <FaCircleUser className="icon" />
      </Link>
    </div>
  );
};

export default Buttons;
