import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function todoitem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}> 
        <MaterialIcons name='delete' size={20} color={'#004'} />
      <Text style={styles.itemText} >{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item:{
    padding: 12,
    marginTop: 12,
    borderColor: '#111',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 12,
    fontSize: 24,
    flexDirection: 'row',
  }  ,
  itemText:{
    marginLeft: 10,
  }
})
