import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

/**
 * 
 * Выводит список нововстей
 * 
*/

function NewsList({ news }) {
  return (
    <div className='ui list'>
      {news.map(item => (
        <p className='item' key={shortid.generate()}>
          <i className={`${item.sourceIcon} icon`}></i> 
          {item.text}
        </p>
      ))}
    </div>
  );
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      sourceIcon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default NewsList;