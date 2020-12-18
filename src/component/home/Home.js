import React, { useEffect, useState } from 'react';
import Dishes from '../../component/dishes/Dishes';
import { getRecipeData } from '../../actions/RecipeDataAction';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './Home.css';

const Home = (props) => {
  const [currentPage, setCurrrentPage] = useState(0);

  useEffect(() => {
    props.getRecipeData();
  }, []);
  const perPage = 2;
  const offset = currentPage * perPage;
  const pageCount = Math.ceil(props.recipeData .length/ perPage);
  
  function handlePageClick({ selected: selectedPage }) {
    console.log("page",selectedPage)
    setCurrrentPage(selectedPage);
  }

  return (
    <>
      <h1 className='dishes_heading'>Choose Your Dishes</h1>
      {props.recipeData.slice(offset, offset + perPage).map((cval, index) => {
        return (
          <Dishes name={cval.dishName} image={cval.dishImage} id={cval.id} />
        );
      })}
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </>
  );
};
const mapStateToProps = ({ RecipeReducer }) => {
  const { isLoading, recipeData } = RecipeReducer;
  return { isLoading, recipeData };
};
export default connect(mapStateToProps, { getRecipeData })(Home);
