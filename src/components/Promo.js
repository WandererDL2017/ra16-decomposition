import React from "react";

/**
 * 
 * Выводит промо блок
 * 
 */

function Promo({ item }) {
  return (
    <div className='ui fluid card'>
      <div className='image'>
        <img src={item.img} alt='...' />
      </div>
      <div className='content'>
        <p className='header'>{item.title}</p>
        <div className='meta'>{item.desc}</div>
      </div>
    </div>
  );
}

export default Promo;