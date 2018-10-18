import axios from 'axios';
import * as types from '../actiontypes';

// const API_BASE_URL = 'http://localhost:8088';
const API_BASE_URL = 'https://sp-payslip.herokuapp.com';

const loading = () => {
  return {
    type: types.LOADING
  };
};

const fromOne = payload => {
  return {
    type: types.GENERATE_ONE,
    payload
  };
};

const fromFile = payload => {
  return {
    type: types.GENERATE_FILE,
    payload
  };
};

const error = error => {
  return {
    type: types.GET_ERRORS,
    error
  };
};

const clearError = () => {
  return {
    type: types.CLEAR_ERRORS
  };
};

export const generateOne = employee => dispatch => {
  dispatch(loading());
  dispatch(clearError());
  return axios
    .post(API_BASE_URL + '/generateOne', employee)
    .then(res => {
      dispatch(fromOne(res.data));
    })
    .catch(err => {
      dispatch(error(err.response.data));
    });
};

export const generateFile = formData => dispatch => {
  dispatch(loading());
  dispatch(clearError());
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };
  return axios
    .post(API_BASE_URL + '/generateFromFile', formData, config)
    .then(res => {
      dispatch(fromFile(res.data));
    })
    .catch(err => {
      dispatch(error(err.response.data));
    });
};
