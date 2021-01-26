import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Expenses from './Expenses';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/bottomNavbarIcons/expenses.png')}
              tintColor="#111D5E"
              style={{width: 30, height: 30}}
            />
          ),
        }}
        name="Expenses"
        component={Expenses}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/bottomNavbarIcons/profile.png')}
              tintColor="#111D5E"
              style={{width: 30, height: 30}}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
