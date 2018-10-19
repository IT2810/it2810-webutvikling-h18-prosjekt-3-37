import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import TaskScreen from "./TaskScreen.js";
import TaskDetails from "./TaskDetails.js";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon, List, ListItem, CheckBox, Item, Input } from 'native-base';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataLoaded: false
    }
  }

  render() {
    //Verifies that data is loaded from the phone
    if (this.state.dataLoaded) {
      //Array of keys from the task data/object
      let keys = Object.keys(this.state.data);
      return (
        <Container>
          <Content contentContainerStyle={styles.content}>
          <List dataArray={keys}
            renderRow={(item) =>
              <ListItem icon onPress={() => {this.props.navigation.navigate('TaskScreen', {taskName: this.state.data[item]["name"]}) }}>
              <Left>
              <Button danger onPress={() => {this.deleteTask(item)}}>
              <Icon name='trash' />
              </Button>
              </Left>
              <Body>
                <Text>{this.state.data[item]["name"]}</Text>
              </Body>
              </ListItem>
            }>
          </List>

          <Item regular>
            <Input placeholder='Task name' onChangeText={(text) => this.setState({newTaskName: text})}/>
          </Item>
          <Button full onPress={() => this.addTask(this.state.newTaskName)}>
            <Text>Add task</Text>
          </Button>
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
    } return (<Text>Loading...</Text>);
  }

  componentWillMount() {
    //Sets dataLoaded state to true and stores loaded data in state. Data is stored as JSON, in the format Object { "[taskName]": Object {"name": "[taskName]"}}
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        this.setState({
          dataLoaded: true
        });
        let localItems = {};
        //Iterates through all items in the object
        stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          localItems[key] = JSON.parse(value);
        });
        this.setState({
          data: localItems
        })
      });
    });
  }

  //Adds a task with the name of the provided argument
  addTask(taskName) {
    let task = { name: taskName};
    AsyncStorage.setItem(taskName, JSON.stringify(task), () => {});
    //Regular add
    if (this.state.data !== null) {
      let localData = this.state.data;
      localData[taskName] = {"name": taskName};
      this.setState({
        data: localData
      });
    }
    //First addition to the list
    else {
      this.setState({
        data: {taskName: {"name": taskName}}
      });
    }
  }

  deleteTask(taskName) {
    AsyncStorage.removeItem(taskName, (err, res) => {});
    let localData = this.state.data;
    delete localData[taskName];
    this.setState({
      data: localData
    });
  }
}

//Sets up some default configurations for stacknavigator
const navigationConfig = {
  initialRouteName: 'Todo',
  navigationOptions: {
    headerTintColor: "white",
    headerTitleStyle: {
      color: "white",
    },
    headerStyle: {
      backgroundColor: "#645CFF",
    }
  }
}

//Exports the header, that imports the screen. Also sets certain menu options for the header.
export default createStackNavigator({
    Todo: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Tasks",
        headerLeft: <Icon style={styles.menuIcon} name="menu" size={50} onPress={() => navigation.toggleDrawer() } />,
      })
    },
    TaskScreen: {
      screen: TaskScreen,
      navigationOptions: ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.taskName : "Task"
        }
      }
    },
    TaskDetails: {
      screen: TaskDetails,
      navigationOptions: ({ navigation }) => ({
        title: "Details",
      })
    }
  },
  navigationConfig
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
