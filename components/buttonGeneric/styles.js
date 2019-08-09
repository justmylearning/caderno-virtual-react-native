import { StyleSheet } from 'react-native';

import colors from '../../components/styles/colors';

export default StyleSheet.create({

    buttonContainer:{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 10,
        marginVertical: 10
    },

    buttonTitle:{
        padding: 15,
        color: 'white'
    }
});