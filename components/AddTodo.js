import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitH}) {
  const [text, setText] = useState('');

  const handleChange = (val) =>{
    setText(val);
  }
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder=' 할 일 ...'
        onChangeText={ handleChange}
      />
      <Button style={styles.button} onPress={()=> submitH(text)} title='Add Works' color='#1FA0A0' />
    </View>
  )
};

const styles = StyleSheet.create({
  input:{
    fontSize: 18,
    marginBottom: 3,
    borderBottomWidth: 6,
    borderBottomColor: '#00478f'
  },
  button: {
    marginTop: 2,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  }
})
