import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/Firebase';

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
    if (this.state.title && this.state.date && this.state.note) {
      const referenceFirebase = FIREBASE.database().ref('Notes');

      const notes = {
        title: this.state.title,
        date: this.state.date,
        note: this.state.note,
      };

      referenceFirebase
        .push(notes)
        .then((data) => {
          Alert.alert('Success', 'Data saved successfully');
          this.props.navigation.replace('Note List');
        })
        .catch((error) => {
          console.log('Error :', error);
        });
    } else {
      Alert.alert('Error', "Form can't be empty!");
    }
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
