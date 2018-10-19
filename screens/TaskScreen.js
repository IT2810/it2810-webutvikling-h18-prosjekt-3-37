import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, CheckBox } from 'native-base';
import Todo from '../components/Todo/Todo';
import TaskDetails from './TaskDetails';
import PieChart from '../components/PieChart/PieChart';

/*
  TODO:
  Add loading and storing off todos
  Add delete, add and edit to todos
  Add testing
*/

export default class TaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleClickCheckbox(index) {
    let tempTodos = this.state.todos.slice();
    tempTodos[index].checked = !tempTodos[index].checked;
    this.setState({
      todos: tempTodos
    })
    this.updateTaskCount();
  }

  handleClickButton(index) {
    this.props.navigation.navigate('TaskDetails');
  }

  renderTodo(name, checked, index) {
    return <Todo onClick={this.handleClickCheckbox.bind(this, index)} onClickButton={this.handleClickButton.bind(this, index)} name={ name } checked={ checked } key={ index }/>
  }

  render() {
    const { params } = this.props.navigation.state;
    const taskName = params ? params.itemId : null;
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <List>
            { this.state.todos.map((item, key)=>(
              this.renderTodo(item.name, item.checked, key))
            )}
          </List>
          <PieChart totalTasks={this.state.totalTasks} completedTasks={this.state.completedTasks} />
        </Content>

        <Footer>
          <FooterTab style={styles.footer}>
            <Button full>
              <Text>Gruppe 37</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
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
  },
footer: {
  backgroundColor: "#645CFF",
}
})


let UID123_object = {
 name: 'Chris',
 age: 30,
 traits: {hair: 'brown', eyes: 'brown'},
};
// You only need to define what will be added or updated
let UID123_delta = {
 age: 31,
 traits: {eyes: 'blue', shoe_size: 10},
};
