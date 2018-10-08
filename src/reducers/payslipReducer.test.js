import payslipReducer from './payslipReducer';
import * as types from '../actiontypes';
import { apiResponse } from '../util/mockData';

const initialState = {
  payslips: [],
  loading: false
};

describe('payslip reducer', () => {
  it('should return the initial state', () => {
    expect(payslipReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOADING', () => {
    const loading = {
      type: types.LOADING
    };
    expect(payslipReducer({}, loading).loading).toBe(true);
  });

  it('should handle GENERATE_ONE', () => {
    const generateOne = {
      type: types.GENERATE_ONE,
      payload: apiResponse
    };

    expect(payslipReducer({}, generateOne).payslips[0]).toEqual(apiResponse);
    expect(payslipReducer({}, generateOne).loading).toBe(false);
  });

  it('should handle GENERATE_FILE', () => {
    const generateFile = {
      type: types.GENERATE_FILE,
      payload: [apiResponse]
    };

    expect(payslipReducer({}, generateFile).payslips).toEqual([apiResponse]);
    expect(payslipReducer({}, generateFile).loading).toBe(false);
  });
});
