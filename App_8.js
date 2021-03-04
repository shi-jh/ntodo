import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [pepole, setPepole] = useState([
    { name: 'suzan', key: '1'}, {name: 'bob', key: '2'},
    { name: 'dan', key: '3'}, { name: 'elic', key: '4'},
    { name: 'foo', key: '5'}, { name: 'gee', key: '6'},
    { name: 'toda', key: '7'}
  ]);
  const pressHand = (key) =>{
    setPepole((prevPeople)=>{
      return prevPeople.filter( person => person.key !== key);
    })
  }
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={pepole}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=> pressHand(item.key)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item:{
    marginTop: 30,
    padding: 30,
    backgroundColor: 'skyblue',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
