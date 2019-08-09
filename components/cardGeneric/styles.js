import {StyleSheet} from 'react-native';
import metrics from '../styles/metrics';
import colors from '../styles/colors';

export default StyleSheet.create({
    container:{
        marginTop: 15,
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        justifyContent: 'center'
    },

    titleContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: metrics.fontBig,
        marginBottom: 15,
        fontWeight: 'bold'
    }
});