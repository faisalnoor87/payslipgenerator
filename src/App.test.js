import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { App } from './App';
import NavBar from './components/NavBar';
import EmployeeForm from './components/EmployeeForm';
import Uploader from './components/Uploader';
import Payslip from './components/Payslip';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({
  payslips: [],
  loading: false
});

describe('components', () => {
  describe('App', () => {
    let enzymeWrapper;
    const defaultProps = {
      error: {},
      payslip: {
        payslips: [],
        loading: false
      }
    };

    beforeEach(() => {
      enzymeWrapper = shallow(<App store={store} />);
    });

    it('renders without crashing', () => {
      shallow(<App store={store} {...defaultProps} />);
    });

    it('should show subcomponents', () => {
      expect(enzymeWrapper.exists()).toBe(true);
      expect(enzymeWrapper.find(NavBar).length).toEqual(1);
      expect(enzymeWrapper.find(EmployeeForm).length).toEqual(1);
      expect(enzymeWrapper.find(Uploader).length).toEqual(1);
      expect(enzymeWrapper.find(Payslip).length).toEqual(1);
    });
  });
});
