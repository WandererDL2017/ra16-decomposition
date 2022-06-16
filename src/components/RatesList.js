import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
/**
 * 
 * Выводит список курсов валют
 * 
 */
function RatesList({ rates }) {
  return (
    <div className='ui horizontal list'>
      {rates.map(item => (
        <p className='item' key={shortid.generate()}>
          <b>
            {item.title} {item.rate}
          </b>{' '}
          {item.growth}
        </p>
      ))}
    </div>
  );
}

RatesList.propTypes = {
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
      growth: PropTypes.string.isRequired
    })
  )
};

export default RatesList;