import React from 'react';
import {  StyleSheet } from 'react-native';
import {
  Container, Header, Content, Text, Button, Left, Icon, Body, Title, DatePicker, Form, Textarea, Item, Input
} from 'native-base';

export default class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      title: 'Task Details',
      description: ''
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Item regular>
            <Input placeholder='Set the name of your task'
                   onChangeText={(text) => this.setState({title:text})}
            />
          </Item>
          <DatePicker
            locale={"nor"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select a date to be notified"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "blue" }}
            onDateChange={this.setDate}
          />
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Write a short description of your Task"
                      onChangeText={(text) => this.setState({description:text})}
            />
          </Form>
          <Text>
            {this.state.description}
          </Text>
        </Content>
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
