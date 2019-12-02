import React from 'react';
import { Text, View, TouchableOpacity, ToastAndroid, TouchableWithoutFeedback } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ButtonGeneric from '../../components/buttonGeneric';
import DisciplineContent from '../../app/domain/disciplineContent';
import DisciplineContentService from '../../app/services/DisciplineContentService';
import Navigation from '../../app/Navigation';
import Input from '../../components/input';

export default class CameraCV extends React.Component {
  static navigationOptions = {
      title:"Adicionar conteúdo",
      headerStyle: {
        display: 'none'
      },
      backgroundColor: 'transparent'
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    disciplineId: this.props.navigation.getParam('disciplineId'),
    contentText: '',
    displayUI: true
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback onLongPress={() => {this.setState({displayUI: !this.state.displayUI})}}>
            <Camera style={{ flex: 1 }} type={this.state.type} ref={(ref) => {this.camera = ref}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                {/* <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity> */}
              </View>
            </Camera>
          </TouchableWithoutFeedback>
          {(this.state.displayUI) ? (
              <View style={{flex: 0.2, backgroundColor: 'transparent', position: 'absolute', width:"100%", paddingHorizontal: 10, opacity: 1, height: 100, marginTop: 40}}>
                <Input placeholder="Ex: Aula sobre analisador léxico" ref={(component => this.inputContentText = component)} multiline={true} field="contentText" onChangeText={this.onChangeHandler.bind(this)}></Input>
              </View>
          ) : null}
          <View style={{flex: 0.2, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'transparent', position: 'absolute', width: '100%', paddingHorizontal: '30%', bottom: 15}}>
            <ButtonGeneric onPress={this.takePicture.bind(this)} style={{marginVertical: 15}} text="Salvar"></ButtonGeneric>
          </View>
        </View>
      );
    }
  }

  async takePicture(){
    if(!this.camera){
      ToastAndroid.show('Camera nao disponivel', ToastAndroid.SHORT);
      return;
    }
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    const disciplineContent = new DisciplineContent(null, this.state.disciplineId, this.state.contentText, data.uri);
    await DisciplineContentService.insertDisciplineContent(disciplineContent);
    ToastAndroid.show('Salvo!', ToastAndroid.SHORT);
    this.inputContentText.clearText();

    this.props.navigation.navigate('ImageViewerScreen', {uri: data.uri, disciplineContent: disciplineContent});

    console.log(await DisciplineContentService.getByDiscipline(this.state.disciplineId))
  }

  onChangeHandler(field, value){
    switch(field){
      case 'contentText':
        this.setState({
          contentText:value
        });
    }
  }
}