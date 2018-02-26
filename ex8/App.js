import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      euro: 0,
      gbp: ''
    }
  }

  convertEuro = () => {
    const url = 'https://api.fixer.io/latest';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      var euro = Math.round(Number(this.state.gbp) / responseJson.rates.GBP);
      this.setState({euro});
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VsDvQZv48OkhFba8KVFqZdGqDf5ZEEjeJXa-Wr2hENf6B70w'}} />
        <Text>{this.state.euro} EUR</Text>
        <TextInput style={styles.userInput} value={this.state.gbp} onChangeText={(gbp) => this.setState({gbp})} keyboardType='numeric' />
        <Text>GBP</Text>
        <Button title="Convert" onPress={this.convertEuro} />
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
  }
});
