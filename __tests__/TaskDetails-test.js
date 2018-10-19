// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import TaskDetails from '../screens/TaskDetails';

import renderer from 'react-test-renderer';

it('works', () => {
  expect(1).toBe(1);
});

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'android';
    return Platform;
});

it('renders correctly', () => {
  const tree = renderer.create(
    <TaskDetails />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
