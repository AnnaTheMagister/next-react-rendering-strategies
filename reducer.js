import { actionTypes } from "./actions";

export const exampleInitialState = {
  error: false,
  placeholderData: null
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_FULL_LIST_ERROR:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.LOAD_FULL_LIST_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      };

    case actionTypes.CLEAR_STATE:
      return {
        error: false,
        placeholderData: null
      };

    default:
      return state;
  }
}

export default reducer;
