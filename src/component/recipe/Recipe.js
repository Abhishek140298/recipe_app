import React, { useEffect } from 'react';
import './Recipe.css';
import { connect } from 'react-redux';
import { getRecipeData } from '../../actions/RecipeDataAction';

const Recipe = (props) => {
  
  useEffect(() => {
    props.getRecipeData();
  }, []);
  console.log("arrayid", props.match.params.id)
  return (
    <div className='whole_container'>
      <h1 className='heading'>Here is your Recipe</h1>
      <div className='recipe_box'>
        <ul>
        
          <li>{props.recipeData[props.match.params.id].recipe}</li>
        </ul>
      </div>
      <div className='add_recipe_button'>Add Your Recipe</div>
    </div>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading, recipeData } = RecipeReducer;
  return { isLoading, recipeData };
};
export default connect(mapStateToProps, { getRecipeData })(Recipe);
