import { StyleSheet } from 'react-native';

import colors from '../../components/styles/colors';
import metrics from '../../components/styles/metrics';

export default StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.primary,
    },

    container: {
        paddingHorizontal: 15,
        width: '90%',
        height: '60%',
        borderWidth: 1,
        borderColor: '#EFF0F1',
        backgroundColor: 'white',
        justifyContent:'center',
        borderRadius: 10
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
        fontWeight: 'bold',
        color: colors.fontBold
    },

    inputContainer: {
        marginVertical: 10
    },

    input: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'grey'
    },

    buttonContainer:{
        width: '100%',
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 10,

    },

    buttonTitle:{
        padding: 15,
        color: 'white'
    }
});