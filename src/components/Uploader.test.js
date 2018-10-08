import React from 'react';
import { shallow } from 'enzyme';
import { Uploader } from './Uploader';
import { file } from '../util/mockData';

describe('Uploader', () => {
  let wrapper;
  // const generateOneMock = jest.fn();
  const props = {
    generateFile: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Uploader {...props} />);
  });

  it('should render Uploader', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should not call the mock generateFile function when input is invalid', () => {
    wrapper.find('#uploadForm').simulate('submit', { preventDefault() {} });
    expect(props.generateFile.mock.calls.length).toBe(0);
  });

  it('should call the mock generateFile function when input is valid', () => {
    wrapper.find('#fileInput').simulate('change', { target: { files: file } });

    wrapper.find('#uploadForm').simulate('submit', { preventDefault() {} });
    expect(props.generateFile.mock.calls.length).toBe(1);

    const formData = new FormData();
    formData.append('file', file);
    // test to see arguments used after its been submitted
    expect(props.generateFile.mock.calls[0][0]).toEqual(formData);
  });
});
