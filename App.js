import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Topping from './components/Topping'; 
import ToppingInput from './components/ToppingInput';


export default function App() {
  
  const [favoriteToppings, setFavoriteToppings] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  

  const addToppingHandler = toppingName => {
    setFavoriteToppings(currentToppings => [
      ...currentToppings, 
      { id: Math.random().toString(), value: toppingName }
    ]);
      setIsAddMode(false);
  };

  const removeTopping = toppingId => {
    setFavoriteToppings(currentToppings => {
      return currentToppings.filter((topping) => topping.id !== toppingId);
    })
  }

  const cancelAddModeHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen} animationType="slide">
      <Button title="Add New Topping" onPress={() => setIsAddMode(true)} />
      <ToppingInput visible={isAddMode} onAddTopping={addToppingHandler} onCancelPress={cancelAddModeHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={favoriteToppings} 
        renderItem={itemData => <Topping title={itemData.item.value} id={itemData.item.id} onDelete={removeTopping}/>}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
