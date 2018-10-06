import React from 'react';
import { StyleSheet, View } from 'react-native';

import { VictoryPie } from "victory-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, CheckBox } from 'native-base';

import PieChart from './components/PieChart/PieChart';

/*
  TODO:
  Create a function for printing all todo items passed as an argument to the function
*/


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      completedTasks: 7,
      totalTasks: 12,
      todos: [{name: "Label 1", checked: true}, {name: "Label 2", checked: true}, {name: "Label 3", checked: false}, {name: "Label 4", checked: true}, {name: "Label 5 ", checked: true}]
    };
  }

  setTodos(newTodos) {
    this.setState({
      todos: newTodos
    });
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Todo</Title>
            </Body>
            <Right />
          </Header>

          <Content contentContainerStyle={styles.content}>
            <List>
              { this.state.todos.map((item, key)=>(
              <ListItem key={key}>
                <CheckBox checked={this.state.todos[key].checked} />
                <Body><Text> { this.state.todos[key].name } </Text></Body>
              </ListItem>)
              )}
            </List>
            <PieChart totalTasks={11} completedTasks={7} />
          </Content>

          <Footer>
            <FooterTab>
              <Button full>
                <Text>Gruppe 37</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header />
          <Content>
            <Text>Loading...</Text>
          </Content>
          <Footer />
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
      fontsLoaded: true
    });
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  }
})
