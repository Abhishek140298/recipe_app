import React, { useEffect } from 'react';
import './Recipe.css';
import { connect } from 'react-redux';
import { getRecipeData } from '../../actions/RecipeDataAction';

const Recipe = (props) => {
  
  useEffect(() => {
    props.getRecipeData();
  }, []);
  const recipeLoad=()=>{
    if(props.isLoading){
      return(
        <>
      <h1 className='heading'>Here is your Recipe</h1>
      <div className='recipe_box'>
        <ul>
        {props.recipeData[props.match.params.id].recipe.map((cval)=>{return<li>{cval}</li>})}
          
        </ul>
      </div>
      <div className='add_recipe_button'>Add Your Recipe</div>
      </>
    )
    }
    else{
      return(<h1>Loading</h1>)
    }
  }
  return (
    <div className='whole_container'>
    {recipeLoad()}
     </div>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading, recipeData } = RecipeReducer;
  return { isLoading, recipeData };
};
export default connect(mapStateToProps, { getRecipeData })(Recipe);
