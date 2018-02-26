import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Picker } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      euro: 0,
      rates: {},
      listCurrency: ["AUD","BGN", "BRL", "CAD", "CHF"],
      selectedValue:"AUD",
      input: ''
    }
  }

  convertEuro = () => {
    const url = 'https://api.fixer.io/latest';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      var euro = Math.round(Number(this.state.input) / responseJson.rates[this.state.selectedValue]);
      this.setState({euro});
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/imyages?q=tbn:ANd9GcR-VsDvQZv48OkhFba8KVFqZdGqDf5ZEEjeJXa-Wr2hENf6B70w'}} />
        <Button title="Convert" onPress={this.convertEuro} />
        <Text>{this.state.euro} EUR</Text>
        <TextInput style={styles.userInput} value={this.state.input} onChangeText={(input) => this.setState({input})} keyboardType='numeric' />
        <Picker 
        style={styles.picker} 
        selectedValue={this.state.selectedValue} 
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}>
          {this.state.listCurrency.map((chosenItem) => <Picker.Item label={chosenItem} value={chosenItem} />)}
        </Picker>

      </View>
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
  userInput: {
    fontSize: 18,
    width: 100,
    borderBottomColor: 'blue',
    borderBottomWidth: 1
  },
  img: {
    width: 100,
    height: 100
  },
  picker: {
    width: 200,
    height: 100
  }
});
