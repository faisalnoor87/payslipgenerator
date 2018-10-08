import React from 'react';
import { shallow } from 'enzyme';
import { Payslip } from './Payslip';
import { employee } from '../util/mockData';

describe('Payslip', () => {
  let wrapper;
  const props = {
    payslips: [employee]
  };

  beforeEach(() => {
    wrapper = shallow(<Payslip {...props} />);
  });

  it('should render EmployeeForm', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#payslipContainer').hasClass('container')).toBe(true);
  });

  it('should not show any payslip if there is none', () => {
    let wrapper = shallow(<Payslip payslips={[]} />);
    expect(wrapper.find('#result').length).toEqual(0);
  });

  it('should show payslips if there is any', () => {
    expect(wrapper.find('#result').length).toEqual(1);
  });
});
