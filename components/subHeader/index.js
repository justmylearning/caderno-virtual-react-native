import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles';

export default class SubHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Disciplinas</Text>
            <Text style={styles.cardValue}>{this.props.disciplinesCount}</Text>
        </View>
        <View style={[styles.card, styles.cardWithBorder]}>
            <Text style={styles.cardTitle}>Fotos</Text>
            <Text style={styles.cardValue}>{this.props.disciplinesContentImageCount}</Text>
        </View>
        <View style={[styles.card, styles.cardWithBorder]}>
            <Text style={styles.cardTitle}>Anotações</Text>
            <Text style={styles.cardValue}>{this.props.disciplinesContentTextCount}</Text>
        </View>
      </View>
    )
  }
}
