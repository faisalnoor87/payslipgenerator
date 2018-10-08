import { combineReducers } from 'redux';
import error from './errorReducer';
import payslip from './payslipReducer';

export default combineReducers({
  error,
  payslip
});
