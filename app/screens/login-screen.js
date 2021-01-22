import React from 'react';
import {View, Text} from 'react-native';
import Button from '../components/button';
import IconButton from '../components/icon-button';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title={'Login'} />
      <IconButton title={'Login'} name={'person'} />
    </View>
  );
}
