import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../../config/Firebase';

export default class DetailNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      /* Cara get id dari tiap Note List yang diklik yaitu {this.props.route.params.id} */
      .ref('Notes/' + this.props.route.params.id)
      .once('value', (querySnapshot) => {
        // * Cek querySnapshot datanya ada gak ?
        let data = querySnapshot.val() ? querySnapshot.val() : {};
        let noteItem = {...data};

        this.setState({
          notes: noteItem,
        });
      });
  }

  render() {
    const {notes} = this.state;

    return (
      <View style={styles.pages}>
        <Text style={styles.detailTitle}> {notes.title} </Text>
        <Text style={styles.detailDate}> {notes.date} </Text>
        <Text style={styles.detailNote}> {notes.note} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingStart: 5,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailDate: {
    color: 'gray',
    marginBottom: 10,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 5,
    paddingStart: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailNote: {
    fontSize: 15,
    backgroundColor: 'white',
    paddingStart: 5,
    paddingTop: 5,
    paddingEnd: 5,
    paddingBottom: 300,
    borderRadius: 5,
    textAlign: 'justify',
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
