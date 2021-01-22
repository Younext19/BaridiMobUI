import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {iconButtonStyles} from '../styles/all';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../styles/colors';

export default function IconButton({title, name, onPress, disabled, style}) {
  return (
    <View style={iconButtonStyles.container}>
      <TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
        <View style={iconButtonStyles.buttonContainer}>
          <Ionicons
            name={name}
            size={iconButtonStyles.iconSize.width}
            color={COLORS.white}
          />
        </View>
      </TouchableOpacity>
      <Text style={iconButtonStyles.text}>{title}</Text>
    </View>
  );
}
