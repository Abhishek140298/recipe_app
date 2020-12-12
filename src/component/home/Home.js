import React ,{useEffect}from 'react';
import Dishes from '../../component/dishes/Dishes';
import { getRecipeData } from '../../actions/RecipeDataAction';
import { connect } from 'react-redux';

const Home = (props) => {
  useEffect(() => {
    props.getRecipeData();
  }, []);
  console.log(props.recipeData,"hello");
  return (
    <>
      <Dishes />
    </>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading, recipeData } = RecipeReducer;
  return { isLoading, recipeData };
};
export default connect(mapStateToProps, { getRecipeData })(Home);
