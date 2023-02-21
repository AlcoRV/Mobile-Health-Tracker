import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function TextField(props) {

  return (
    <TextInput
          style={styles.input}
          onChangeText={(value) => props.onChangeText(value)}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
        />
  ); 
}

const styles = StyleSheet.create({
    input: {
      borderRadius: 30,
      borderWidth: 1,
      padding: 10,
      margin: 10,
      textAlign: 'center',
      width: '50%',
      backgroundColor: '#C0D2E5'
    }
  });
  