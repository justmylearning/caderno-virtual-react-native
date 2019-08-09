import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import Navigation from '../../app/Navigation';

import styles from './styles';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    //const { navigate } = this.props.navigation;
    const {navigate, goBack} = Navigation.getNavigation();
    return (
      <View style={styles.header}>
        <View style={styles.homeButtonContainer}>
          <TouchableWithoutFeedback onPress={()=>goBack(null)}>
            <View>
              <Text style={styles.homeButton}>Voltar</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.title}> CADERNO VIRTUAL </Text>
      </View>
    )
  }
}
