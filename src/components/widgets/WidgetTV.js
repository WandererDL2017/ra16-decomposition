import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Widget from "./Widget";
/**
 * 
 * Выводит виджет 'Телепрограмма'
 * 
 */
function WidgetTV({ tv }) {
  return (
    <Widget title='Телепрограмма'>
      {tv.map(item => (
        <p key={shortid.generate()}>
          <b>
            {item.time} {item.title}
          </b>
          {' '}
          {item.channel}
        </p>
      ))}
    </Widget>
  );
}

WidgetTV.propTypes = {
  tv: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired
    })
  )
};

export default WidgetTV;