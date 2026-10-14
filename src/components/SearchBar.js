import React from 'react'; 

export default function SearchBar() {
  return (
    <>
      <form className="search-bar-form">
        <input type="text" id="search-bar" className="search-bar" placeholder="Search tracks..." />
        <button type="submit" className="search-button">SEARCH</button>
      </form>
    </>
  );
}