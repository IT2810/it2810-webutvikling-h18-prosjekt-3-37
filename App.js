import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen.js";
import ActivityScreen from "./screens/ActivityScreen.js";
import { Container } from 'native-base';

const RootStack = createDrawerNavigator(
  {
    Home: HomeScreen,
    Activities: ActivityScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  render() {
    if (!this.state.loaded) {
      return (<Text>Loading...</Text>);
    } else {
      return(
        <Container>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <RootStack />
        </Container>
      );
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({
      loaded: true
    });
  }
}
