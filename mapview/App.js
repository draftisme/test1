import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
        <MapView style={{flex:1}} initialRegion={{latitude: 60.200692, longitude:24.934302, latitudeDelta:0.0322,longitudeDelta:0.0221}}>
        <MapView.Marker coordinate={{latitude: 60.200692, longitude:24.934302}} title='Haaga-Helia UAS' />
        </MapView>
    );
  }
}

//,}} />Juha Hinkula46

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
