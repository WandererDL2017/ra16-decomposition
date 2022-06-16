import React from "react";
import PropTypes from "prop-types";
/**
 * 
 * Выводит блок виджета
 * 
 */
function Widget(props) {
  return (
    <div className="ui segment">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string.isRequired
};

export default Widget;