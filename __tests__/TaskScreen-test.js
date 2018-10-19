import 'react-native';
import React from "react";
import renderer from 'react-test-renderer';

import TaskScreen from "../screens/TaskScreen";


jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'android';
    return Platform;
});




it('renders correctly', () => {
    jest.useFakeTimers();
    const tree = renderer.create(<TaskScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});

