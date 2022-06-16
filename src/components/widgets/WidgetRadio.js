import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "./Widget";
/**
 * 
 * Выводит виджет 'Эфир'
 * 
 */
function WidgetRadio({ podcasts }) {
  return (
    <Widget title='Эфир'>
      {podcasts.map(podcast => (
        <p key={shortid.generate()}>
          <b>{podcast.title}</b>
          {podcast.station}
        </p>
      ))}
    </Widget>
  );
}

WidgetRadio.propTypes = {
  podcasts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      station: PropTypes.string.isRequired
    })
  )
};

export default WidgetRadio;