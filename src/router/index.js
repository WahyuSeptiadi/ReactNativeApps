import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage, AddNote} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Page"
        component={HomePage}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Add Note"
        component={AddNote}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
