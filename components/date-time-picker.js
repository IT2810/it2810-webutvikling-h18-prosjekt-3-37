import React from 'react';
/*import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';*/
import { Container, Header, Content, Footer, Text, Button, Left, Icon, Body, Title } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

//This class is currently not in use but contains code that might come in handy
//TODO: Delete this file when no longer needed
export default class DatePicker extends React.Component {

  constructor(){
    super();
    this.state = {
      isVisible:false,
      chosenDate: '',
      loading: true
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  handlePicker= (datetime) => {
    this.setState({
      isVisible:false,
      chosenDate:datetime.toString()
    })
  };

  hidePicker= () => {
    this.setState({
      isVisible:false
    })
  };

  showPicker= () => {
    this.setState({
      isVisible:true
    })
  };

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    let buttonText=(this.state.chosenDate=='') ? "Pick a date to be notified" : "Pick a different date to be notified";
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Task Details</Title>
          </Body>
        </Header>
        <Content padder>
          <Button onPress={this.showPicker}>
            <Text>
              {buttonText}
            </Text>
          </Button>
          <Text>
            {this.state.chosenDate}
          </Text>
        </Content>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
        />
      </Container>
    );
  }

}
/*
  render() {
    var buttonText=(this.state.chosenDate=='') ? "Pick a date to be notified" : "Pick a different date to be notified";
    return (
      <View style={styles.container}>
        <Text style={{color:'red',fontSize: 20}}>{this.state.chosenDate}</Text>
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
        />
      </View>
    );
  }
*/
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:250,
    height:50,
    backgroundColor:'#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  }
});
*/