// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import TaskScreen from '../screens/ActivityScreen';

import renderer from 'react-test-renderer';

it('works', () => {
  expect(true).toBeTruthy();
});

it('renders correctly', () => {
  jest.useFakeTimers();
  const tree = renderer.create(
    <TaskScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});