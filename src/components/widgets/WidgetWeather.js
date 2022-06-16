import React from "react";
import PropTypes from "prop-types";
import Widget from "./Widget";
/**
 * 
 * Выводит виджет 'Погода'
 * 
 */
function WidgetWeather({ weather, moment }) {
  const time = moment.hour() < 6 ? weather.night : weather.day;
  return (
    <Widget title='Погода'>
      <p>
        <b>+{time}&deg</b>
      </p>
      <p>День: +{weather.day}</p>
      <p>Ночь: +{weather.night}</p>
    </Widget>
  );
}

WidgetWeather.propTypes = {
  time: PropTypes.shape({
    day: PropTypes.number.isRequired,
    night: PropTypes.number.isRequired
  }),
  moment: PropTypes.object
};

export default WidgetWeather;