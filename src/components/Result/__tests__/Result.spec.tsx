import { mount, shallow } from 'enzyme';
import  'mocha';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Result } from '../Result';

describe('Result', () => {
  it('should render', () => {
    const wrapper = shallow(<Result />);
    expect(wrapper.is('.result')).toBe(true);
  });
});