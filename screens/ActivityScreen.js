import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, CheckBox } from 'native-base';



class ActivityScreen extends React.Component {
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

  handleClickCheckbox (index) {
    let tempTodos = this.state.todos.slice();
    tempTodos[index].checked = !tempTodos[index].checked;
    this.setState({
      todos: tempTodos
    })
    this.updateTaskCount();
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

        </Content>
        <Footer >
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

export default createStackNavigator({
    Activities: {
      screen: ActivityScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Activities",
        headerLeft: <Icon style={styles.menuIcon} name="menu" size={50} onPress={() => navigation.toggleDrawer() } />,
        headerStyle: {
          backgroundColor: "#645CFF",
        },
        headerTitleStyle: {
          color: "white"
        }
      })
    }
  },
  {
    initialRouteName: 'Activities',
  }
);

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
