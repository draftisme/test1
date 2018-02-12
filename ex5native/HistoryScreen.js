import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class HistoryScreen extends React.Component {
    static navigationOptions = {title: 'History'};

    render(){
        const {params} = this.props.navigation.state;
        return (
            <View>
                <FlatList data={params.history} keyExtractor={()=>Math.random()} renderItem={({item, index}) => <Text>{item}</Text>} />
            </View>
        );
    }
}