import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {MapView} from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: '',
      lat: 60.200692, 
      lng: 24.934302
    };
  }

  fetchAddress = () => {
    const myAPI = 'AIzaSyC_AC81xiIsC1huMjK8mNzguHmIGDqQpeM';
    var address = this.state.address.replace(' ','+');
    const addressURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + myAPI;
    fetch(addressURL)
    .then((response) => response.json())
    .then((responseJson) => {
      var result = responseJson.results[0].geometry.location;
      var lat = Number(result.lat);
      var lng = Number(result.lng);
      this.setState({lat, lng});
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={{flex: 1, height: 200, width: 400}} initialRegion={{
          latitude: this.state.lat,
          longitude: this.state.lng,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}>
          <MapView.Marker coordinate={{latitude: this.state.lat, longitude: this.state.lng}} title={this.state.address} />
        </MapView>
        <TextInput style={styles.userInput} value={this.state.address} onChangeText={(address) => this.setState({address})} />
        <Button title="Find" onPress={this.fetchAddress} />
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
