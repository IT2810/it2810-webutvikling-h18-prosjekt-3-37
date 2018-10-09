import React from 'react';
import { StyleSheet, View } from 'react-native';

import { VictoryPie } from "victory-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, CheckBox } from 'native-base';

import Todo from './components/Todo/Todo';
import PieChart from './components/PieChart/PieChart';

/*
  TODO:
  Add loading and storing off todos
  Add delete, add and edit to todos
  Add testing
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      completedTasks: 7,
      totalTasks: 12,
      todos: [{name: null, checked: null}, {name: "Label 2", checked: true}, {name: "Label 3", checked: false}, {name: "Label 4", checked: true}, {name: "Label 5 ", checked: true}]
    };
  }

  setTodos(newTodo) {
    let tempTodos = this.state.todos.slice();
    tempTodos.push(newTodo);
    this.setState({
      todos: tempTodos
    });
  }

  updateTaskCount() {
    let completedCount = 0;
    let totaltCount = this.state.todos.length;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].checked) {
        completedCount++;
      }
    }
    this.setState({
      completedTasks: completedCount,
      totalTasks: totaltCount
    })
  }

  handleClickCheckbox (index) {
    let tempTodos = this.state.todos.slice();
    tempTodos[index].checked = !tempTodos[index].checked;
    this.setState({
      todos: tempTodos
    })
    this.updateTaskCount();
  }

  renderTodo(name, checked, index) {
    return <Todo onClick={this.handleClickCheckbox.bind(this, index)} name={ name } checked={ checked } key={ index }/>
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
                this.renderTodo(item.name, item.checked, key))
              )}
            </List>
            <PieChart totalTasks={this.state.totalTasks} completedTasks={this.state.completedTasks} />
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
