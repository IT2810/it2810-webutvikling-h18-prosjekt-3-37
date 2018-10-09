import React from 'react';
import { StyleSheet, View } from 'react-native';

import { VictoryPie } from "victory-native";
import { Content } from 'native-base';

export default class PieChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VictoryPie
        height={200}
        innerRadius={70}
        labelRadius={80}
        colorScale={["#44FF44", "#888888" ]}
        data={[
          { x: "Completed: " + this.props.completedTasks, y: (this.props.completedTasks / this.props.totalTasks)* 100 },
          { x: "Remaining: " + (this.props.totalTasks - this.props.completedTasks), y: 100 - ((this.props.completedTasks / this.props.totalTasks)* 100)}
        ]}
      />
    );

  }
}
