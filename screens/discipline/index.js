import React, { Component } from 'react'
import { Text, View, ToastAndroid } from 'react-native'
import styles from './styles';

import Header from '../../components/header';
import CardGeneric from '../../components/cardGeneric';
import Input from '../../components/input';
import ButtonGeneric from '../../components/buttonGeneric';

import DisciplineService from '../../app/services/DisciplineService';
import DisciplineDomain from '../../app/domain/discipline';


export default class Discipline extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:null,
      teacherName:null,
      period:null
    };
  }

  static navigationOptions = {
      headerStyle: {
        display: 'none'
      }
  };
  render() {
    return (
      <View style={styles.screen}>
            <Header></Header>
            <CardGeneric title="Preencha todos os campos">
              <Text> Disciplina </Text>
              <Input field="name" onChangeText={this.onChangeHandler.bind(this)}></Input>
              <Text> Professor </Text>
              <Input field="teacherName" onChangeText={this.onChangeHandler.bind(this)}></Input>
              <Text> Periodo </Text>
              <Input field="period" onChangeText={this.onChangeHandler.bind(this)}></Input>
              <ButtonGeneric text="Salvar" onPress={this.add.bind(this)}></ButtonGeneric>
            </CardGeneric>
      </View>
    )
  }

  onChangeHandler(field, value){
    switch(field){
      case 'name':
        this.setState({
          name:value
        });
      break;
      case 'teacherName':
        this.setState({
          teacherName:value
        });
      break;
      case 'period':
        this.setState({
          period:value
      });
      break;
    }
  }

  validateFields(){
    const {name, teacherName, period} = this.state;
    if(!name || !teacherName || !period)
      return false;

    return true;
  }

  add(){
    if(!this.validateFields()){
      console.log('Preencha todos os campos antes de salvar!');
      return;
    }

    const discipline = new DisciplineDomain(null, this.state.name, this.state.teacherName, this.state.period);
    DisciplineService.insertDiscipline(discipline);
    console.log('Listagem de disciplinas:', DisciplineService.getAll());
    ToastAndroid.show('Disciplina adicionada com sucesso!', ToastAndroid.SHORT);

  }
}
