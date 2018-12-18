import React from 'react';
import { shallow } from 'enzyme';
import Berry from './Berry';

const testBerry = {
  berryType: 'CHERRY',
  effectDuration: 30000,
  image: '🍒',
  description: 'Small, sweet, and tart, the cherry is a lovely snack',
};

test('<Berry /> desc shows/bg color changes when selected', () => {
  const berry = shallow(<Berry berry={testBerry} isSelected={false} />);

  expect(berry.find('span')).toHaveStyle('backgroundColor', '');
  expect(berry.find('span')).toHaveText('🍒');

  const selectedBerry = shallow(<Berry berry={testBerry} isSelected={true} />);

  expect(selectedBerry.find('span')).toHaveStyle('backgroundColor', 'orange');
  expect(selectedBerry.find('span')).toHaveText('🍒Small, sweet, and tart, the cherry is a lovely snack');
});

test('<Berry /> triggers selectBerry() on click', () => {
  const selectBerry = jest.fn();
  const berry = shallow(<Berry berry={testBerry} isSelected={false} selectBerry={selectBerry} />);
  berry.find('span').simulate('click');
  expect(selectBerry).toHaveBeenCalledTimes(1);
});
