import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
