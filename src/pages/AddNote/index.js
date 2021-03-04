import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {InputData} from '../../components';

export default class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      note: '',
    };
  }

  onChangeText = (nameState, value) => {
    this.setState({
      [nameState]: value,
    });
  };

  onSubmit = () => {
    console.log('Enter Submit');
    console.log(this.state);
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Title"
          placeholder="Input Title Note"
          onChangeText={this.onChangeText}
          value={this.state.title}
          nameState="title"
        />
        <InputData
          label="Date"
          placeholder="Input Date Note"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.date}
          nameState="date"
        />
        <InputData
          label="Note Today"
          placeholder="Input Note In Here :)"
          isTextArea="true"
          onChangeText={this.onChangeText}
          value={this.state.note}
          nameState="note"
        />
        <TouchableOpacity
          style={styles.btnSave}
          onPress={() => this.onSubmit()}>
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
    marginTop: 20,
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
