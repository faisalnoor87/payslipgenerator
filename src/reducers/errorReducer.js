import * as types from '../actiontypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };

    case types.CLEAR_ERRORS:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
