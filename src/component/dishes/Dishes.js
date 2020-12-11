import React from 'react';
import './Dishes.css';
import {Link} from 'react-router-dom'

const Dishes = () => {
  return (<>
      <h1 className='dishes_heading'>Choose Your Dishes</h1>
   <Link to= '/recipe'>
    <div className='dish' >
      <div className='dish_image_div'>
        <img
          className='dish_image'
          src='https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka.jpg'
        />
      </div>
      <hr />
      <h4>PANEER TIKKA RECIPE</h4>
    </div></Link></>
  );
};
export default Dishes;
