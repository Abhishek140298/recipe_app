import React from 'react';
import './Dishes.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipeData } from '../../actions/RecipeDataAction';

const Dishes = (props) => {
  console.log(props)
  
  return (
    <>
      <h1 className='dishes_heading'>Choose Your Dishes</h1>
      <Link to='/recipe'>
        <div className='dish'>
          <div className='dish_image_div'>
            <img
              className='dish_image'
              src='https://media.istockphoto.com/photos/fresh-summer-melon-smoothie-picture-id823547466?k=6&m=823547466&s=170667a&w=0&h=w8AmaaRXUH2EvVBgM7LgKx98Rt7w-wcW9xm9h51HkTg='
            />
          </div>
          <hr />
          <h4>PANEER TIKKA RECIPE</h4>
        </div>
      </Link>
    </>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading ,recipeData } = RecipeReducer;
  return { isLoading ,recipeData };
};
export default connect(mapStateToProps,{getRecipeData}  )(Dishes);
