import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header(){
  return(
    <View style={styles.header}>
      <Image 
      style={styles.tLogo}
      source={require('./connpath.png')}  />
      <Text style={styles.title}> My Todos </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 98,
    paddingTop: 20,
    backgroundColor: '#11C3DB'
  },
  title: {
    textAlign: 'center',
    color: '#111',
    fontSize: 26,
    fontWeight: 'bold',
  },
  tLogo: {
    display: 'flex',
    padding: 20,
    marginLeft: 12,
    height: 20,
    width: 20
  }
});