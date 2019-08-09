import {StyleSheet} from 'react-native';
import metrics from '../styles/metrics';
import colors from '../styles/colors';

export default StyleSheet.create({
  header:{
    paddingTop: metrics.marginTop,
    height: 80,
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title:{
    color: colors.fontLight,
    fontSize: metrics.fontMedium
  },

  homeButtonContainer:{
    paddingTop: metrics.marginTop,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    marginLeft: 15,
    justifyContent: 'center'
  },

  homeButton:{
    fontSize: metrics.fontSmall,
    color: colors.fontLight,
  }
});