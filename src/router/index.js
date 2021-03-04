import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NoteList, AddNote} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Note List"
        component={NoteList}
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
