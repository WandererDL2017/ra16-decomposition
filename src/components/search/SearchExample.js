import React from "react";
import PropTypes from "prop-types";
/**
 * 
 * Выводит пример поискового запроса
 * 
 */
function SearchExample({ example }) {
  return (
    <div>
      <p>
        <b>Найдется все, например</b> 
        {example}
      </p>
    </div>
  );
}

SearchExample.propTypes = {
  example: PropTypes.string.isRequired
}

export default SearchExample;