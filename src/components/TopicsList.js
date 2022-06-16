import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
/**
 * 
 * Выводит список новостных разделов
 * 
 */
function TopicsList({ topics }) {
  return (
    <div className='ui horizontal bulleted list'>
      {topics.map(topic => (
        <a href='https://ya.ru' className='item' key={shortid.generate()}>
          {topic}
        </a>
      ))}
    </div>
  );
}

TopicsList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default TopicsList;