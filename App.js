import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodo([{ key: inputValue }, ...todo]);
      setInputValue('');
    }
  };

  const handleDelete = (key) => {
    setTodo(todo.filter(todoItem => todoItem.key !== key));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.key}</Text>
      <Button title='Delete' onPress={() => handleDelete(item.key)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />

      <TextInput
        style={styles.input}
        placeholder='Add Todo'
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button title='Delete All TODOs' onPress={() => setTodo([])} />

      <Button title='Add Todo' onPress={handleAddTodo} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5,
  },
  item: {
    fontSize: 18,
    flex: 1,
  },
});
