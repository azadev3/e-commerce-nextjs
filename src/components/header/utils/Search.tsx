import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="search">
      <img src="/search.svg" className="search-icon" alt="search" />
      <input type="search" placeholder="Search for products..." />
    </div>
  );
};

export default Search;
