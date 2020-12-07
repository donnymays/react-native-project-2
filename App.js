import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";

export default function App() {
  const [enteredTopping, setEnteredTopping] = useState('');
  const [favoriteToppings, setFavoriteToppings] = useState([]);

  const toppingInputHandler = (enteredText) => {
    setEnteredTopping(enteredText);
  }

  const addToppingHandler = () => {
    setFavoriteToppings(currentToppings => [
      ...currentToppings, 
      { key: Math.random().toString(), value: enteredTopping }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Favorite Pizza Topping" 
        style={styles.input} 
        onChangeText={toppingInputHandler}
        value={enteredTopping}/>
        <Button 
        title="Add!"
        onPress={addToppingHandler}/>
      </View>
      <FlatList
      keyExtractor={(item, index) => item.key}
        data={favoriteToppings} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
