import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, Item, Input, CheckBox } from 'native-base';
import TaskDetails from './ActivityScreen';
import PieChart from '../components/PieChart/PieChart';

export default class TaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      title: this.props.navigation.getParam("taskName"),
      completedTasks: 0,
      totalTasks: 0,
      todos: {}
    };
  }

  addTodo(newTodo) {
    let task = {"name": newTodo, "type": "todo", "checked": false, "parent": this.state.title}
    AsyncStorage.setItem(this.state.title + "_" + newTodo, JSON.stringify(task), () => {});
    let localTodos = this.state.todos;
    localTodos[this.state.title + "_" + newTodo] = task;
    this.setState({
      todos: localTodos
    });
    this.updateTaskCount();
  }

  deleteTodo(taskName) {
    AsyncStorage.removeItem(taskName, (err, res) => {});
    let localTodos = this.state.todos;
    delete localTodos[taskName];
    this.setState({
      todos: localTodos
    });
    this.updateTaskCount();
  }

  updateTaskCount() {
    let completedCount = 0;
    let totalCount = Object.keys(this.state.todos).length;
    for (let item in this.state.todos) {
      if (this.state.todos[item]["checked"]) {
        completedCount++;
      }
    }
    this.setState({
      completedTasks: completedCount,
      totalTasks: totalCount
    })

  }

  getCheckboxState(name) {
    return this.state.todos[name]["checked"];
  }

  handleClickCheckbox(name) {
    let localTodos = this.state.todos;
    localTodos[name]["checked"] = !localTodos[name]["checked"];
    this.setState({
      todos: localTodos
    }, () => {
      this.updateTaskCount();
      this.getCheckboxState(name);
      AsyncStorage.setItem(name, JSON.stringify(localTodos[name]), () => {});
    })
  }

  handleClickButton(name) {
    this.deleteTodo(name);
  }

  componentWillMount() {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        let localItems = {};
        //Iterates through all items in the object
        stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          let parsed = JSON.parse(value);
          if (parsed["type"] === "todo") {
            if (parsed["parent"] === this.state.title) {
              localItems[key] = parsed;
            }
          }
        });

        this.setState({
          todos: localItems,
          dataLoaded: true
        }, () => {
          this.updateTaskCount();
        })
      });
    });
  }

  render() {
    if (this.state.dataLoaded) {
      let keys = Object.keys(this.state.todos);
      return (
        <Container>
          <Content contentContainerStyle={styles.content}>
          <List dataArray={keys}
            renderRow={(item) =>
              <ListItem icon onPress={() => {this.handleClickCheckbox(item)}}>
              <Left>
              <Button danger onPress={() => {this.deleteTodo(item)}}>
              <Icon name='trash' />
              </Button>
              </Left>
              <Body>
                <Text>{this.state.todos[item]["name"]}</Text>
              </Body>
              <Right>
                <CheckBox checked={this.state.todos[item]["checked"]} />
              </Right>
              </ListItem>
            }>
          </List>
            <PieChart totalTasks={this.state.totalTasks} completedTasks={this.state.completedTasks} />
          </Content>
          <Item regular>
            <Input placeholder='Task name' onChangeText={(text) => this.setState({newTodoName: text})}/>
          </Item>
          <Footer>
            <FooterTab>
              <Button full onPress={() => this.addTodo(this.state.newTodoName)}>
                <Text>Add task</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    } return (<Text>Loading...</Text>);
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  menuIcon: {
    padding: 15,
    color: "white"
  }
});
