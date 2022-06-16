import React from "react";
import PropTypes from "prop-types";
import ServicesList from "./ServicesList";
import SearchExample from "./SearchExample";

/**
 * Вызывает поисковую форму 
 */

function SearchBar({ links, example }) {
  return (
    <>
      <ServicesList links={links} />
      <div className='ui fluid action input'>
        <input type='text' placeholder='Поиск...' />
        <div className='ui button'>Поиск</div>
      </div>
      <SearchExample example={example} />
    </>
  );
}

SearchBar.propTypes = {
  example: PropTypes.string.isRequired,
};

export default SearchBar;