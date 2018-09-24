import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createOptionGroup } from '@utils/messages';
import OptionButton from '../components/OptionButton';
import OptionGroup from '../index';

configure({ adapter: new Adapter() });

describe('<OptionGroup />', () => {
  const createOptionGroupComponent = (message, onSelect) => shallow(<OptionGroup message={message} onSelect={onSelect} />);

  it('should render a <OptionButton /> for each option element', () => {
    const options = createOptionGroup(0, ['Option 1']);
    const optionComponent = createOptionGroupComponent(options);
    expect(optionComponent.find(OptionButton).length).toEqual(1);
  });

  it('should call onAnswer with selected option', () => {
    const onAnswer = jest.fn();
    const options = createOptionGroup(0, ['Option 1', 'Option 2'], onAnswer);
    const onSelect = jest.fn();
    const optionComponent = createOptionGroupComponent(options, onSelect);
    // Simulate a click on the child component - use dive() to render the
    // component
    optionComponent.find(OptionButton).last().dive().find('button').simulate('click');
    expect(onAnswer).toBeCalledWith('Option 2');
  });

});
