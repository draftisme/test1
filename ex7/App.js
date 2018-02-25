import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      query: ''
    }
  }

  fetchRecipes = () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + this.state.query;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      var recipes = responseJson.results;
      this.setState({recipes});
    })
    .catch((error) => {
      alert(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.recipes} keyExtractor={item => item.title} renderItem={({item}) => <View><Image style={{width: 50, height: 50}} source={{uri: item.thumbnail}} /><Text>{item.title}</Text></View>} />
        <TextInput style={styles.userInput} value={this.state.query} onChangeText={(query) => this.setState({query})} />
        <Button title="Find" onPress={this.fetchRecipes} />
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
    width: 200,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
});
