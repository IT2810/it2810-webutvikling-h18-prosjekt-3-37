// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import TaskDetails from '../screens/TaskDetails';
import renderer from 'react-test-renderer';

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'android';
  return Platform;
});

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'android';
    return Platform;
});

it('renders correctly', () => {
  jest.useFakeTimers();
  const tree = renderer.create(
    <TaskDetails />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});