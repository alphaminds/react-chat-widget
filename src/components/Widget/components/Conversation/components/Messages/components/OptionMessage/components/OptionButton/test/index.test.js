import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OptionButton from '../index';

configure({ adapter: new Adapter() });

describe('<OptionButton />', () => {
  const title = 'test';
  const onClick = jest.fn();
  const optionButtonComponent = shallow(<OptionButton title={title} onClick={onClick} />);

  it('should render a <button> element', () => {
    expect(optionButtonComponent.matchesElement(<button>test</button>)).toEqual(true);
  });

  it('should trigger onClick handler on click', () => {
    optionButtonComponent.find('button').simulate('click');
    expect(onClick).toBeCalledWith(title);
  });

});
