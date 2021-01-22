import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Button({title, disabled, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={buttonStyles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
