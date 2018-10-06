import React from 'react';
import { StyleSheet, View } from 'react-native';

import { VictoryPie } from "victory-native";
import { Content } from 'native-base';

export default class PieChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completedTasks: this.props.completedTasks,
      totalTasks: this.props.totalTasks
    };
  }

  render() {
    return (
      <VictoryPie
        height={200}
        innerRadius={70}
        labelRadius={80}
        colorScale={["#44FF44", "#888888" ]}
        data={[
          { x: "Completed: " + this.state.completedTasks, y: (this.state.completedTasks / this.state.totalTasks)* 100 },
          { x: "Remaining: " + (this.state.totalTasks - this.state.completedTasks), y: 100 - ((this.state.completedTasks / this.state.totalTasks)* 100)}
        ]}
      />
    );

  }
}
