import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
      list: []
    }
  }

  itemInput = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  addItem = () => {
    let list = [...this.state.list, this.state.item];
    this.setState({list});
  }

  clearList = () => {
    let list = [];
    this.setState({list});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Shopping list</Text>
        <TextInput style={styles.myInput} onChangeText={(item) => this.setState({item})} value={this.state.item} />
        <Button onPress={this.addItem} title='Add' />
        <Button onPress={this.clearList} title='Clear' />
        <FlatList data={this.state.list} renderItem={({item}) => <Text>{item}</Text>} />
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
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
