import React, { Component } from 'react'
import { Text, View, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'

import styles from './styles';

export default class Card extends Component {
    static navigationOptions = {
        headerStyle: {
          display: 'none'
        }
    };

    constructor(props){
        super(props);
        this.state = {discipline:props.discipline};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.state.discipline}</Text>
            {this.props.children}
        </View>
        )
    }
}
