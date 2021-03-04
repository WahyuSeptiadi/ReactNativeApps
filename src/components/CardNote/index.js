import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CardNote = ({id, noteItem}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>{noteItem.title}</Text>
        <Text style={styles.date}>{noteItem.date}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} />
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default CardNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
