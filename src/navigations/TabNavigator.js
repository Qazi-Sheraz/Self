import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerNavigator} from './DrawerNavigator';
import {MultiList} from '../screens/list';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="MultiList"
        component={MultiList}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-list" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
