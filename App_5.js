import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Sjh");
  const [age, setAge] = useState(20);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Enter Your Name & Age : </Text>
        <TextInput 
        multiline        
        style={styles.input}
        placeholder="e.g. adaptive"
        onChangeText={(val)=> setName(val)} />
        <TextInput
        keyboardType = 'numeric'
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(val)=> setAge(val)} />
        <Text>Result name: {name}, age: {age} </Text>        
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
  header:{
    backgroundColor: 'green',
    padding: 20,
  },
  buttonContainer:{
    marginTop: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
