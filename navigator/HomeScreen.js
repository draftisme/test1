import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

//First page
export default class HomeScreen extends React.Component {
    static navigationOptions = { title: 'Home'};

    render(){
        return (
            <View>
                <StatusBar hidden={true} />
                <Text>Home Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Settings', {user: 'Mike'})} title='Go to Settings' />
            </View>
        )
    }
}
