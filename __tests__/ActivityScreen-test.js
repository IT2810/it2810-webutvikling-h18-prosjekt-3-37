// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import ActivityScreen from '../screens/ActivityScreen';

import renderer from 'react-test-renderer';

it('works', () => {
  expect(true).toBeTruthy();
});

it('renders correctly', () => {
  jest.useFakeTimers();
  const tree = renderer.create(
    <ActivityScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});