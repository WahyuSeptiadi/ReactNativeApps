import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/Firebase';

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
    console.log('Notes :', this.state.notes);
    console.log('Notes Key :', this.state.notesKey);

    return (
      <View style={styles.pages}>
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
