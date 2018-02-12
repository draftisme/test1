import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Second Page
export default class SettingScreen extends React.Component {
    static navigationOptions = {title: 'Settings'};

    render(){
        const {params} = this.props.navigation.state;
        return (
            <Text>Settings screen {params.user}</Text>
        );
    }
}