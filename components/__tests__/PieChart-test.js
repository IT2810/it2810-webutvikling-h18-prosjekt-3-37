import 'react-native';
import React from 'react'
import renderer from 'react-test-renderer'

import PieChart from '../PieChart/PieChart'



it('renders correctly', () => {
    jest.useFakeTimers();
    const tree = renderer.create(<PieChart />);
    expect(tree).toMatchSnapshot();
});