import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';


jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'android';
  return Platform;
});

test('renders correctly', () => {
  jest.useFakeTimers();
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});