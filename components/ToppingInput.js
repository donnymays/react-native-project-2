import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ToppingInput = props => {
  
  const [enteredTopping, setEnteredTopping] = useState('');

  const toppingInputHandler = (enteredText) => {
    setEnteredTopping(enteredText);
  }

  const addToppingHandler = () => {
    props.onAddTopping(enteredTopping);
    setEnteredTopping('');
  }

  // const toggleAddModeHandler = () => {
  //   props.onCancelPress();
  // }
  

  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Favorite Pizza Topping" 
        style={styles.input} 
        onChangeText={toppingInputHandler}
        value={enteredTopping}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Add!" onPress={addToppingHandler} /></View>
          <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancelPress} /></View>
        </View>
      </View>
    </Modal>
    
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})

export default ToppingInput;