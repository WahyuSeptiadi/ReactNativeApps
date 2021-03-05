import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NoteList, AddNote, DetailNote, EditNote} from '../pages';

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
      <Stack.Screen
        name="Detail Note"
        component={DetailNote}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Edit Note"
        component={EditNote}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
