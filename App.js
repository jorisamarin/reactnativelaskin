import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text, FlatList } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [result, setResult] = React.useState('');
  const [data, setData] = useState([]);

  const addition = () => { 
    setResult((parseInt(number1) + parseInt(number2)));
    setData([...data, { key: number1 + "+" + number2 + "=" + result}]);
  };
  const subtraction = () => { 
    setResult((parseInt(number1) - parseInt(number2)));
    setData([...data, { key: number1 + "-" + number2  + "=" + result}]);
  };

  return (
    <View style={styles.container}>
      <Text>{"Result: "}{result}</Text>
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
      <View style={styles.flatlist}>
      <Text>{"History:"}</Text>
      <FlatList style={styles.list}
      data={data}
      renderItem={({ item }) =>
        <Text>{item.key}</Text>
      }
    />
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
    padding: 50,
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 50,
  },
  flatlist : {
    flex: 2,
   flexDirection: 'column',
   color: 'black',
  }
});

