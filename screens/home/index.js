import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'

import Header from '../../components/header';
import styles from './styles';
import SubHeader from '../../components/subHeader';
import Card from '../../components/card';
import CardGeneric from '../../components/cardGeneric';
import ButtonGeneric from '../../components/buttonGeneric';

import DisciplineService from '../../app/services/DisciplineService';
import DisciplineContentService from '../../app/services/DisciplineContentService';
import ImageViewer from '../imageViewer';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
      disciplines: [],
      disciplinesContentImageCount: 0,
      disciplinesContentTextCount: 0,
    }

    this.loadDisciplines();
  }

  static navigationOptions = {
      headerStyle: {
        display: 'none'
      }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Header navigation={this.props.navigation}></Header>
        <ScrollView>
          <SubHeader disciplinesCount={this.state.disciplines.length} 
          disciplinesContentImageCount={this.state.disciplinesContentImageCount}
          disciplinesContentTextCount={this.state.disciplinesContentTextCount}
          >
          </SubHeader>
          <CardGeneric>
            <ButtonGeneric text="Adicionar Disciplina" onPress={()=>navigate('DisciplineScreen')}></ButtonGeneric>
          </CardGeneric>
          {
            this.state.disciplines.map((discipline) => {
              return (
                <Card key={discipline.id} navigation={this.props.navigation} discipline={`${discipline.name} ( ${discipline.teacherName} ) - ${discipline.period}º`}>
                  <ScrollView horizontal={true}>
                    {
                      (discipline.contentArray) ?
                       discipline.contentArray.map( (content) => {
                        return (
                          <TouchableWithoutFeedback key={content.id} onPress={() => navigate('ImageViewerScreen', {uri: content.contentImageURI, disciplineContent: content})}>
                            <Image
                            source={{ uri: content.contentImageURI }}
                            style={styles.image}                            
                            >
                            </Image>
                          </TouchableWithoutFeedback>
                        )
                       })
                       : null
                    }
                  </ScrollView>
                  <ButtonGeneric text="Adicionar Conteúdo" onPress={()=>navigate('CameraScreen', {disciplineId: discipline.id})}></ButtonGeneric>
                </Card>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }

  async loadDisciplines(){
    await this.setState({
      disciplines: await DisciplineService.getAll()
    });
    await this.loadDisciplinesContent();
  }

  async loadDisciplinesContent(){
    if(this.state.disciplines.length == 0)
      return;

    let disciplinesContentImageCount = 0;
    let disciplinesContentTextCount = 0;
    let disciplines = [];
    await Promise.all( this.state.disciplines.map( async (discipline) => {
      let contentArray = await DisciplineContentService.getByDiscipline(discipline.id);
      if(contentArray){
        discipline.contentArray = contentArray;
        await contentArray.map((content) => {
          if(content.contentText)
            disciplinesContentTextCount++;
          if(content.contentImageURI){
            disciplinesContentImageCount++;
          }
        });
      }
      disciplines.push(discipline);
    }) );
    this.setState({
      disciplines: disciplines,
      disciplinesContentImageCount: disciplinesContentImageCount,
      disciplinesContentTextCount: disciplinesContentTextCount
    });
    console.log(disciplines);
  }
}
