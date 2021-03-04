import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/Firebase';
import CardNote from '../../components/CardNote';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: {},
      notesKey: [],
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Notes')
      .once('value', (querySnapshot) => {
        // * Cek querySnapshot datanya ada gak ?
        let data = querySnapshot.val() ? querySnapshot.val() : {};
        let noteItem = {...data};

        this.setState({
          notes: noteItem,
          notesKey: Object.keys(noteItem),
        });
      });
  }

  render() {
    const {notes, notesKey} = this.state;

    return (
      <View style={styles.pages}>
        <View style={styles.noteList}>
          {notesKey.length > 0 ? (
            // ! key={key} ini bukan import dan harus ada, karena digunakan untuk mapping
            // ! sedangkan id={key} dijadikan set ke CardNote
            notesKey.map((key) => (
              <CardNote id={key} noteItem={notes[key]} key={key} />
            ))
          ) : (
            <Text>Note is empty </Text>
          )}
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => this.props.navigation.navigate('Add Note')}>
            <FontAwesomeIcon icon={faPlus} size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnPlus: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
