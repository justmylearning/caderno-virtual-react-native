import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles';

export default class ButtonGeneric extends Component {
    constructor(props){
        super(props);
        this.state = {...props};
    }

  render() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.props.onPress} style={(this.props.style) ? [styles.button,this.props.style] : styles.button}>
                <Text style={styles.buttonTitle}>{this.props.text}</Text>
            </TouchableOpacity>
        </View>
    )
  }
}
