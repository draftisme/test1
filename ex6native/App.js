import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {AsyncStorage, Alert} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      statement: 'Guess a number between 1-100',
      number: '',
      total: 0, 
      answer: Math.floor(Math.random() * 100) + 1,
      firstTime: 0,
      highScore: 0
    }
  }
  

  numInput = (event) => {
    let number = event.target.value;
    this.setState({number});
  }

  guess = async () => {
    let statement = '';
    let guessNum = Number(this.state.number);
    let total = this.state.total;
    let answer = this.state.answer;
    let firstTime = this.state.firstTime;
    let highScore = this.state.highScore;
    alert(answer);
    if(guessNum > answer){
      statement = 'Your guess ' + guessNum + ' is too high';
      total++;
    } else if(guessNum < answer){
      statement = 'Your guess ' + guessNum + ' is too low';
      total++;
    } else if(guessNum === answer) {
      total++;
      firstTime++;
      alert('You guessed the number in ' + total);

      if(firstTime === 1){
        highScore = total;
        alert('High score: ' + highScore);
      } else {
        if(highScore > total){
          highScore = total;
          alert('High score: ' + highScore);
        }
        alert('High score: ' + highScore);         
      }

       //Save data
      try{
        await AsyncStorage.setItem("khanh", JSON.stringify(this.state.highScore));
      } catch(error){
        alert('Error saving data');
      }
      
      answer =  Math.floor(Math.random() * 100) + 1;
      total = 0;
      statement = 'Guess a number between 1-100';
    }
    
   
    try{
      let highScore = await AsyncStorage.getItem('khanh');
      this.setState({statement, total, answer, firstTime, highScore:+highScore});
    } catch(error){
      alert('Error reading data');
    }
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.statement}</Text>
        <TextInput style={styles.myInput} keyboardType="number-pad" onChangeText={(number) => this.setState({number})} value={this.state.number} />
        <Button onPress={this.guess} title='MAKE GUESS'/>
        <Text>High score: {this.state.highScore}</Text>
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
