import React from 'react';
import { shallow } from 'enzyme';
import { EmployeeForm } from './EmployeeForm';
import { employee } from '../util/mockData';

describe('EmployeeForm', () => {
  let wrapper;
  const props = {
    generateOne: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<EmployeeForm {...props} />);
  });

  it('should render EmployeeForm', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should not call the mock generateOne function when inputs are invalid', () => {
    wrapper.find('#employeeForm').simulate('submit', { preventDefault() {} });
    expect(props.generateOne.mock.calls.length).toBe(0);
  });

  it('should call the mock generateOne function when inputs are valid', () => {
    wrapper.find('#firstname').simulate('change', {
      target: { name: 'firstname', value: 'David' }
    });

    wrapper.find('#lastname').simulate('change', {
      target: { name: 'lastname', value: 'Rudd' }
    });

    wrapper.find('#payPeriod').simulate('change', {
      target: { name: 'payPeriod', value: '01 March – 31 March' }
    });

    wrapper.find('#salary').simulate('change', {
      target: { name: 'salary', value: 60050 }
    });

    wrapper.find('#superrate').simulate('change', {
      target: { name: 'superrate', value: 9 }
    });

    wrapper.find('#employeeForm').simulate('submit', { preventDefault() {} });
    expect(props.generateOne.mock.calls.length).toBe(1);

    // test to see arguments used after its been submitted
    expect(props.generateOne.mock.calls[0][0]).toEqual(employee);
  });
});
