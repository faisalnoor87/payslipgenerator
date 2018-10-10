// Testing async redux actions
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actiontypes';
import * as actions from './';
import { employee, file, apiResponse } from '../util/mockData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('generate payslip(s) actions', () => {
  let store;
  beforeEach(function() {
    moxios.install();
    // configure Mock store
    store = mockStore({
      payslips: [],
      loading: false
    });
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates GENERATE_ONE after successfuly sending employee obj', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: apiResponse
      });
    });

    const expectedActions = [
      { type: types.LOADING },
      { type: types.CLEAR_ERRORS },
      {
        type: types.GENERATE_ONE,
        payload: apiResponse
      }
    ];

    return store.dispatch(actions.generateOne(employee)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GENERATE_FILE after successfuly sending file', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: apiResponse
      });
    });

    const expectedActions = [
      { type: types.LOADING },
      { type: types.CLEAR_ERRORS },
      {
        type: types.GENERATE_FILE,
        payload: apiResponse
      }
    ];

    return store.dispatch(actions.generateFile(file)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
