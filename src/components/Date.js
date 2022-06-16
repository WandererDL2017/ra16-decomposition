import React from 'react';
import 'moment/locale/ru';

/**
 * 
 * Выводит текущую дату и время.
 *
*/

function Date({ date }) {
  return (
  <div>
    {date.locale('ru').format('DD MMMM, dddd hh:mm')}
  </div> 
  );
}

export default Date;