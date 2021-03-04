import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {InputData} from '../../components';

export default class AddNote extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <InputData label="Title" placeholder="Input Title Note" />
        <InputData label="Date" placeholder="Input Date Note" />
        <InputData
          label="Note Today"
          placeholder="Input Note In Here :)"
          isTextArea="true"
        />
        <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.textSave}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  btnSave: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
    marginStart: 200,
    marginEnd: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textSave: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
