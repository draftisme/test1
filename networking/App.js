import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [],
      description: '',
      location: ''
    }
  }
  getJobs = () => {
    const url = 'https://jobs.github.com/positions.json?description=' + this.state.description + '&location=' + this.state.location;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({jobs: responseJson});
    })
    .catch((error) => {
      alert(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Apply for jobs</Text>
        <TextInput style={styles.userInput} value={this.state.description} onChangeText={(description) => this.setState({description})} />
        <TextInput style={styles.userInput} value={this.state.location} onChangeText={(location) => this.setState({location})} />
        <Button title="Find" onPress={this.getJobs} />
        <Text>There are {this.state.jobs.length} jobs found</Text>
        <FlatList style={{marginLeft: "5%"}} keyExtractor={item => item.id} renderItem={({item}) => <Text>{item.title}, {item.company}</Text>} data={this.state.jobs} />
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
    backgroundColor: 'grey',
    margin: 10
  }
});
