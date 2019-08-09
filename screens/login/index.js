import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native'

import styles from './styles';
import Navigation from '../../app/Navigation';
import Input from '../../components/input';

export default class Login extends Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
          display: 'none'
        },
    };
  render() {
    const { navigate } = this.props.navigation;
    Navigation.setNavigation(this.props.navigation);
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>CADERNO VIRTUAL</Text>
                <Input placeholder="E-mail" field="email" onChangeText={this.onChangeHandler.bind(this)}></Input>
                <Input placeholder="Senha" field="password" onChangeText={this.onChangeHandler.bind(this)}></Input>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>navigate('HomeScreen')} style={styles.button}>
                        <Text style={styles.buttonTitle}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
  }

  onChangeHandler(field, value){
    switch(field){
      case 'email':
        this.setState({
            email:value
        });
      break;
      case 'password':
        this.setState({
            password:value
        });
      break;
    }
  }

}