import React from 'react';

const SearchMe = ({ setSearchKeyword }) => {
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className="header-container">
      <input type="text" onChange={handleSearch} placeholder="Search..." />
    </div>
  );
};

export default SearchMe;
