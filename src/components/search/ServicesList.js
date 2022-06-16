import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
/**
 * 
 * Выводит список поисковых сервисов
 * 
 */
function ServicesList({ links }) {
  return (
    <div className='ui horizontal list'>
      {links.map(link => (
        <a href='https://ya.ru' className='item' key={shortid.generate()}>
          {link}
        </a>
      ))}
    </div>
  );
}

ServicesList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default ServicesList;