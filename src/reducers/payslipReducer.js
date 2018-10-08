import * as types from '../actiontypes';

const initialState = {
  payslips: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true
      };
    case types.GENERATE_ONE:
      return {
        ...state,
        payslips: [action.payload],
        loading: false
      };
    case types.GENERATE_FILE:
      return {
        ...state,
        payslips: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
