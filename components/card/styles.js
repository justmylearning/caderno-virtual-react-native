import {StyleSheet} from 'react-native';
import metrics from '../styles/metrics';
import colors from '../styles/colors';

export default StyleSheet.create({
    container:{
        marginTop: 15,
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center'
    },

    imagesContainer:{
        flexDirection: 'row'
    },

    image:{
        width: 160,
        height: 160,
        marginRight: 5,
        marginTop: 10,
        paddingLeft: -10
    },

    title:{
        marginVertical: 10
    }
});