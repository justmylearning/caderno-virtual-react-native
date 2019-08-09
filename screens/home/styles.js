import {StyleSheet} from 'react-native';
import metrics from '../../components/styles/metrics';
import colors from '../../components/styles/colors';

export default StyleSheet.create({
    screen:{
      flex: 1,
      backgroundColor: colors.background
    },
    
    shadow:{
      shadowOpacity: 0.75,
      shadowRadius: 5,
      shadowColor: 'black',
      shadowOffset: { height: 2, width: 2 },
    },

    image:{
      width: 160,
      height: 160,
      marginRight: 5,
      marginTop: 10,
      paddingLeft: -10
  },
  
});