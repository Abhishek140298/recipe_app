import axios from 'axios';

let url = 'http://127.0.0.1:5500/src/data/RecipeData.json';

export const checkLoading = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
  };
};

export const getRecipeData = () => {
  return (dispatch) => {
    dispatch({ type: 'IS RECIPE LOADING' });
    axios.get(url).then((res) => {
      if (res.status === 200) {
        dispatch({ type: 'ON_SUCCESS_RECIPE', payload: res.data });
        
      }
    });
  };
};
