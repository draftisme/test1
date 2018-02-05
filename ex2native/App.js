import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      statement: 'Guess a number between 1-100',
      number: '',
      total: 0, 
      answer: Math.floor(Math.random() * 100) + 1
    }
  }
  

  numInput = (event) => {
    let number = event.target.value;
    this.setState({number});
  }

  guess = () => {
    let statement = '';
    let guessNum = Number(this.state.number);
    let total = this.state.total;
    let answer = this.state.answer;
    if(guessNum > answer){
      statement = 'Your guess ' + guessNum + ' is too high';
      total++;
    } else if(guessNum < answer){
      statement = 'Your guess ' + guessNum + ' is too low';
      total++;
    } else if(guessNum === answer) {
      alert('You guessed the number in ' + total);
    }
    this.setState({statement, total});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.statement}</Text>
        <TextInput style={styles.myInput} keyboardType="number-pad" onChangeText={(number) => this.setState({number})} value={this.state.number} />
        <Button onPress={this.guess} title='MAKE GUESS'/>
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
  myInput: {
    width: 100,
    borderColor: 'gray',
    borderWidth: 1
  }
});
