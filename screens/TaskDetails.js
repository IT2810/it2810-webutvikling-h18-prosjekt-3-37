
import React from 'react';
import {
  Container, Header, Content, Text, Button, Left, Icon, Body, Title, DatePicker, Form, Textarea, Item, Input,
  Right, Card, CardItem, StyleProvider
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
        <Container>
          <Content padder>
            <Card style={{flex: 0}}>
              <CardItem bordered>
                <Left>
                  <Text>{this.state.title}</Text>
                </Left>
                <Body>
                <Text note> Due date: {'\n'+this.state.chosenDate.toString().substr(4, 12)}</Text>
                </Body>
                <Right>
                  <Button hasText transparent onPress={()=>this.setState({edit:true})}>
                    <Text style={{color:'blue'}} >edit</Text>
                  </Button>
                </Right>
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
        <Container>
          <Content padder>
            <Header style={{backgroundColor:'white'}}>
              <Body>
              <Item regular>
                <Input placeholder='Set taskname'
                       onChangeText={(text) => this.setState({title:text})}
                />
              </Item>
              </Body>

              <Right>
                <Button transparent success onPress={()=>this.setState({edit:false})}>
                  <Text style={{color:'blue'}} >done</Text>
                </Button>
              </Right>
            </Header>

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
          </Content>
        </Container>
      );
    }
  }
}