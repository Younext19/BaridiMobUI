import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from './colors';

export const buttonStyles = StyleSheet.create({
  container: {
    margin: wp('2%'),
    padding: wp('1%'),
    backgroundColor: COLORS.mainColorDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
    height: hp('5%'),
    width: wp('20%%'),
  },
  text: {
    fontFamily: 'Comfortaa-Medium',
    fontSize: hp('2%'),
    color: COLORS.white,
  },
});
