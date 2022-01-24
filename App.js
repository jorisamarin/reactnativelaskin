import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';

export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [result, setResult] = React.useState('Result: ');

  const addition = () => { 
    setResult('Result: ' + (parseInt(number1) + parseInt(number2)))
  };
  const subtraction = () => { 
    setResult('Result: ' + (parseInt(number1) - parseInt(number2)))
  };

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      
      <View style={styles.button}>
      <Button onPress={addition} title="+" />
      <Button onPress={subtraction} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
});
