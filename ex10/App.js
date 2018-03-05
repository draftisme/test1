import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {MapView} from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: '',
      restaurants: []
    }
  }

  fetchRestaurant = () => {
    const myAPI = 'AIzaSyC_AC81xiIsC1huMjK8mNzguHmIGDqQpeM';
    // var address = this.state.address.replace(' ','+');
    const addressURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?type=restaurant&query=' + this.state.address.replace(' ','+') + '&key=' + myAPI;
    fetch(addressURL)
    .then((response) => response.json())
    .then((responseJson) => {
      var restaurants = responseJson.results;
      this.setState({restaurants});
    })
    .catch(function(err){
      console.log(err);
    })
  }

  render() {
    if(this.state.restaurants.length > 0){
      var restaurantArr = this.state.restaurants;
      var resLocation = (<MapView style={{flex: 1, width: 400, height: 200}} initialRegion={{
        latitude: restaurantArr[0].geometry.location.lat,
        longitude: restaurantArr[0].geometry.location.lng,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }}>
      <FlatList keyExtractor={item => item.id} renderItem={({item}) => <MapView.Marker coordinate={{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
      }} title={item.name} />} data={restaurantArr} />
      </MapView>);
    }

    return (
      <View style={styles.container}>
        {resLocation}
        <Text>Find Restaurant Nearby</Text>
        <TextInput style={styles.userInput} value={this.state.address} onChangeText={(address) => this.setState({address})} />
        <Button title="Find" onPress={this.fetchRestaurant} />
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
  }
});
