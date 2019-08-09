import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Header from '../../components/header';
import styles from './styles';
import ButtonGeneric from '../../components/buttonGeneric';
import Input from '../../components/input';

export default class ImageViewer extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayUI: true
        }
    }

    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    render() {
        const uri = this.props.navigation.getParam('uri');
        const disciplineContent = this.props.navigation.getParam('disciplineContent');
        return (
            <View style={styles.screen}>
                <Header></Header>
                <View style={styles.imageContainer}>
                    <TouchableWithoutFeedback onLongPress={() => {this.setState({displayUI: !this.state.displayUI})}}>
                        <Image
                        source={{ uri:  uri}}
                        style={styles.image}
                        >
                        </Image>
                    </TouchableWithoutFeedback>
                    {
                        (disciplineContent && disciplineContent.contentText && this.state.displayUI) ? 
                            (
                                <View style={{flex: 0.2, backgroundColor: 'transparent', position: 'absolute', width:"100%", paddingHorizontal: 10, opacity: 1, height: 100}}>
                                    <Input value={disciplineContent.contentText} ref={(component => this.inputContentText = component)} multiline={true} field="contentText" onChangeText={()=>{}}></Input>
                                </View>
                            )
                        : null
                    }
                    {
                        (disciplineContent && this.state.displayUI) ? 
                            (
                                <View style={{flex: 0.2, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'transparent', position: 'absolute', width: '100%', paddingHorizontal: '30%', bottom: 15, opacity: 1}}>
                                    <ButtonGeneric style={{marginVertical: 15}} text="Excluir"></ButtonGeneric>
                                </View>
                            )
                        : null
                    }
                </View>
            </View>
        )
    }

    toggleUI(){

    }
}
