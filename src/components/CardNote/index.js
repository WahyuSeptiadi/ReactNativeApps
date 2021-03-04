import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardNote = ({key, noteItem}) => {
  return (
    <View>
      <Text key={key}>{noteItem.title}</Text>
    </View>
  );
};

export default CardNote;

const styles = StyleSheet.create({});
