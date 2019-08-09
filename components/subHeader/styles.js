import {StyleSheet} from 'react-native';
import metrics from '../styles/metrics';
import colors from '../styles/colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    card:{
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 3
    },

    cardWithBorder:{
        borderLeftColor: colors.borderColor,
        borderLeftWidth: 1
    },

    cardTitle:{
        fontSize: metrics.fontBig
    },

    cardValue:{
        fontSize: metrics.fontSmall
    }
});