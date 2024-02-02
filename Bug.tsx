import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import {Text, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
enableScreens(true);
const Tab = createBottomTabNavigator<any>();
export const BugScreen: React.FC<{}> = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="App"
          screenOptions={{headerShown: true}}>
          <Tab.Screen name="App" component={Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Screen = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>Test Screen</Text>
    </View>
  );
};
