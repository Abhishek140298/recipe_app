import React, { useEffect ,useState} from 'react';
import Dishes from '../../component/dishes/Dishes';
import { getRecipeData } from '../../actions/RecipeDataAction';
import { connect } from 'react-redux';

const Home = (props) => {
  const[currentPage,setCurrrentPage]=useState(0);
  const perPage=2;
  useEffect(() => {
    props.getRecipeData();
  }, []);
  

  return (
    <>
		<h1 className='dishes_heading'>Choose Your Dishes</h1>
      {props.recipeData.map((cval, index) => {
        return <Dishes name={cval.dishName} image={cval.dishImage} id={cval.id} />;
      })}
    </>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading, recipeData } = RecipeReducer;
  return { isLoading, recipeData };
};
export default connect(mapStateToProps, { getRecipeData })(Home);
