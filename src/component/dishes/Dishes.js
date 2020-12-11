import React from 'react';
import './Dishes.css';

const Dishes = () => {
  return (
    <div className='dish'>
      <div className='dish_image_div'>
        <img
          className='dish_image'
          src='https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka.jpg'
        />
      </div>
      <hr />
      <h4>PANEER TIKKA RECIPE</h4>
    </div>
  );
};
export default Dishes;
