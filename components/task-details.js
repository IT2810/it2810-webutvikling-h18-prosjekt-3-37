import React from 'react';
import { Image } from 'react-native';
import {
  StyleSheet
} from 'react-native';
import {
  Container, Header, Content, Text, Button, Left, Icon, Body, Title, DatePicker, Form, Textarea, Item, Input,
  Right, Card, CardItem, Thumbnail
} from 'native-base';

export default class TaskDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      loading: true,
      title: 'Task Name',
      description: 'Click the EDIT button to set this description, the due date and the name of this task',
      edit: false,
      subject: 'default'
    };
    this.setDate = this.setDate.bind(this);
  }

  //Used to make sure Roboto_medium is actually loaded when used in render()
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  setEdit(e){
    this.setState({edit:e})
  }
  /*https://visualpharm.com/assets/922/Todo%20List-595b40b65ba036ed117d45fe.svg */
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    if (!this.state.edit){
      return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>TO-DO</Title>
            </Body>
            <Right>
              <Button hasText transparent onPress={()=>this.setState({edit:true})}>
                <Text>edit</Text>
              </Button>
            </Right>
          </Header>
          <Content padder>
              <Card style={{flex: 0}}>
                <CardItem bordered>
                  <Left>
                      <Text>{this.state.title}</Text>
                    <Body>
                      <Text note> Due date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                  <Text>
                    {this.state.description}
                  </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                  </Left>
                </CardItem>
              </Card>
          </Content>
        </Container>
      );
    }
    else {
      return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
            <Title>TO-DO</Title>
            </Body>
            <Right>
              <Button hasText transparent onPress={()=>this.setState({edit:false})}>
                <Text>done</Text>
              </Button>
            </Right>
          </Header>
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
}
import {Platform, StatusBar} from 'react-native'

//Simple stylesheet to fix issue with header and statusbar overlapping on android
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

/*
<H3>Subject: {'\n'+this.state.subject+ '\n'}</H3>
            <H3>{'\n'}Due date:</H3>
            <Text>
              {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
            <H3>
              {"\n"}Description:
            </H3>
            <Text>
              {this.state.description}
            </Text>
 */