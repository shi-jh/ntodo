import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/AddTodo';

export default function App() { 
  const [ todos, setTodos] = useState([
    { text: '📖 Read Book', key:'1'},
    { text: '🧨 수업 준비', key: '2'}
  ]);

  const pressHandler = (key) => {
    setTodos((preTodos)=>{
      return preTodos.filter(todo => todo.key != key);
    });
  }

  const submitH = (text) => {
    if(text.length > 2) {
      setTodos((prevTodos) =>{
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos 
        ];
      });
    } else {
      Alert.alert('Error!','입력한 데이터가 없어요!',[
        {text: '확인', onPress: () => console.log('Alert Closed')}
      ])
    }
  }
  return (
    
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitH={submitH} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>  
    </View>
    </TouchableWithoutFeedback>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  content: {
    padding: 40,
    backgroundColor: '#D5FB03',
  },
  list : {
    marginTop: 20,
  }

});
