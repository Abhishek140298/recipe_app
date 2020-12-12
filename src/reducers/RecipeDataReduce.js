

const INTIAL_STATE = { isLoading: false};

export default function RecipeDataReducer(state=INTIAL_STATE,action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
			default:
			return state;
  }
}
