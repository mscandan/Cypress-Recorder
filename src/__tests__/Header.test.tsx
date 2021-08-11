import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../popup/components/Header';
import '../setupTests';

describe('Header', () => {
  let wrapper;
  let props;

  it('Should render Header with title of Cypress Recorder', () => {
    wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
    const title = wrapper.find('#title');
    expect(title.text()).toBe('Cypress Recorder');
  });
});
