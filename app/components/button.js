import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from '../styles/all';
import {LinearGradient} from 'react-native-linear-gradient';
import COLORS from '../styles/colors';

export default function Button({title, disabled, onPress, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled ?? false}
      style={style}>
      <View style={buttonStyles.container}>
        <Text style={buttonStyles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
