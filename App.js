import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavBar } from './src/NavBar'
import TodoAdd from "./src/TodoAdd";
import Todo from "./src/Todo";
import {ScrollView} from "react-native";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title,

        };

        setTodos(prev => [...prev, newTodo]);
    };

  return (
    <View>
      <NavBar title='Todo App' />
      <View style={styles.container}>
          <TodoAdd onSubmit={addTodo} />


          <FlatList
            data={todos}
            renderItem={({item}) => (<Todo todo={item} />)}
            keyExtractor={item => item.id}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 20
  },
});
