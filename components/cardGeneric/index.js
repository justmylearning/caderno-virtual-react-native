import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

export default class CardGeneric extends Component {
    constructor(props){
        super(props);
        this.state = {children:props.children}
    }

    render() {
        return (
        <View style={styles.container}>
            {
                (this.props.title) ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                ) : null
            }
            {this.props.children}
        </View>
        )
    }
}
