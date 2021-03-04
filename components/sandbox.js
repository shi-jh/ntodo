import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 40,
    backgroundColor: '#555',
  },
  boxOne: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#777',
    padding: 20,
  },
  boxThree: {
    flex: 3,
    backgroundColor: 'skyblue',
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 40,
  },
});
