import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputData = ({label, placeholder, keyboardType, isTextArea}) => {
  if (isTextArea) {
    return (
      //   ! Kalau ada 2 komponen, harus di-return dengan cara dibungkus dengan komponen kosong <></> supaya tidak ERROR
      <>
        <Text style={styles.titleLabel}> {label} </Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={styles.titleInputArea}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </>
    );
  }
  return (
    //   ! Kalau ada 2 komponen, harus di-return dengan cara dibungkus dengan komponen kosong <></> supaya tidak ERROR
    <>
      <Text style={styles.titleLabel}> {label} </Text>
      <TextInput
        style={styles.titleInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  titleLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  titleInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
});
