import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles';

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    }
    console.log('props input', props);
  }

  render() {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={this.props.value} placeholder={this.props.placeholder} ref={(component) => this.inputContentText = component} multiline={true} onChangeText={(value) => { this.props.onChangeText(this.props.field, value) }} 
            style={[styles.input, this.props.style]}></TextInput>
        </View>
    )
  }
  
  clearText = () => {
    this.inputContentText.setNativeProps({text: ''});
  }
}