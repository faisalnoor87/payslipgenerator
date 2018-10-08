import errorReducer from './errorReducer';
import * as types from '../actiontypes';
import { errorRes } from '../util/mockData';

describe('error reducer', () => {
  it('should return the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual({});
  });

  it('should handle GET_ERRORS', () => {
    const errorAction = {
      type: types.GET_ERRORS,
      payload: errorRes
    };

    expect(errorReducer({}, errorAction).error).toEqual(errorRes);
  });

  it('should handle CLEAR_ERRORS', () => {
    const errorAction = {
      type: types.CLEAR_ERRORS
    };
    expect(errorReducer(undefined, errorAction)).toEqual({});
  });
});
