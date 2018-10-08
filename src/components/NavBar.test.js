import React from 'react';
import { mount } from 'enzyme';
import NavBar from './NavBar';

describe('components', () => {
  describe('App', () => {
    it('should render Navbar', () => {
      const enzymeWrapper = mount(<NavBar />);
      expect(enzymeWrapper.exists()).toBe(true);
      expect(
        enzymeWrapper.find('nav').hasClass('navbar navbar-dark bg-dark')
      ).toBe(true);
      expect(enzymeWrapper.find('span').text()).toBe('Payslip Generator');
    });
  });
});
