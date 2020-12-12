const INTIAL_STATE = { isLoading: false, recipeData: [] };

export default function RecipeDataReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ON_SUCCESS_RECIPE':
      return { ...state, recipeData: action.payload, isLoading: true };
    default:
      return state;
  }
}
