
import React from 'react';
import {
  Container, Header, Content, Text, Button, Left, Icon, Body, Title, DatePicker, Form, Textarea, Item, Input,
  Right, Card, CardItem, StyleProvider, Footer
} from 'native-base';

export default class TaskDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //startdate: automatically set to the current day
      startDate: new Date(),
      //chosendate: set by pressing the edit button, automatically the current date
      chosenDate: new Date(),
      loading: true,
      title: 'Activity Name',
      edit: false,
      //the number of steps
      steps:0,
      //the goal number of steps:
      goal:0
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
                </Body>
                <Right>
                  <Button hasText transparent onPress={()=>this.setState({edit:true})}>
                    <Text style={{color:'blue'}} >edit</Text>
                  </Button>
                </Right>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text> Start date: {'\n'+this.state.startDate.toString().substr(4, 12)}</Text>
                </Left>
                <Body>
                <Text> Due date: {'\n'+this.state.chosenDate.toString().substr(4, 12)}</Text>
                </Body>
              </CardItem>
              <CardItem bordered Footer >
                <Left>
                  <Text> Steps:</Text>
                </Left>
                <Body>
                <Text> {this.state.steps}         Goal: </Text>
                </Body>
                <Right>
                  <Text> {this.state.goal} </Text>
                </Right>
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
              placeHolderText="Set a due date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "blue" }}
              onDateChange={this.setDate}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
            <Input placeholder='Set goal number of steps'
                   onChangeText={(text) => this.setState({goal:text})}
            />
          </Content>
        </Container>
      );
    }
  }
}