import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { MapView } from 'expo';

export default class App extends Component {
  state = {
    location: "",
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={{flex: 1, height: 200, width: 400}} initialRegion={{
          latitude: this.state.location.coords.latitude, 
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}>
          <MapView.Marker coordinate={{latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude}} />
        </MapView>
        <Text style={styles.paragraph}>{this.state.location.coords.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});