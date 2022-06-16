import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "./Widget";
/**
 * 
 * Выводит виджет 'Посещаемое'
 * 
 */
function WidgetPopular({ popular }) {
  return (
    <Widget title='Посещаемое'>
      {popular.map(item => (
        <p key={shortid.generate()}>
          <b>{item.title}</b>
          {item.subtitle}
        </p>
      ))}
    </Widget>
  );
}

WidgetPopular.propTypes = {
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
    })
  )
};

export default WidgetPopular;