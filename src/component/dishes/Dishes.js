import React from 'react';
import './Dishes.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipeData } from '../../actions/RecipeDataAction';

const Dishes = (props) => {
  console.log(props, 'name');

  return (
    <>
      <Link to={{ pathname: `/recipe/${props.id}` }}>
        <div className='dish'>
          <div className='dish_image_div'>
            <img className='dish_image' src={props.image} />
          </div>
          <hr />
          <h4>{props.name}</h4>
        </div>
      </Link>
    </>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading, recipeData } = RecipeReducer;
  return { isLoading, recipeData };
};
export default connect(mapStateToProps, { getRecipeData })(Dishes);
