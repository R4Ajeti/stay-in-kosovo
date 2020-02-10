import React from 'react';

const SearchBox = ({ searchfield, searchChange, placeholder }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder={placeholder}
        // placeholder={"search hostels"}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
