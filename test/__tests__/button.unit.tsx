import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Button from '../../lib/Button/button';

test('button', () => {
  const json = renderer.create(<Button />).toJSON();
  expect(json).toMatchSnapshot();
});
