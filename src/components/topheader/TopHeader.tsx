import React from 'react';
import '@/styles/topheader.scss';

const TopHeader: React.FC = () => {
  return (
    <header className="top-header-wrapper">
      <div className="top-header">
        <h2>Sign up and get 20% off to your first order.</h2>
        <button type="button" className="login-button">
          sign up now
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
