'use client';
import React from 'react';
import '@/styles/header.scss';
import Logo from './utils/Logo';
import Navbar from './utils/Navbar';
import Search from './utils/Search';
import Buttons from './utils/Buttons';

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="left">
          <Logo />
          <Navbar />
        </div>
        <div className="right">
          <Search />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Header;
