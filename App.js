import React from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isVisible:true
    }
  }

  handlePicker= () => {
    this.setState({
      isVisible:false
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
    return (
      <Text>Please show me this text</Text>
      /*<View style={styles.container}>
        <Text>Please show me this text</Text>
        <TouchableOpacity style={styles.button} onPress={this.showPicker()}>
          <Text style={styles.text}>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
        />
      </View>*/
    );
  }
}

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