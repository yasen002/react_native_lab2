import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

function MenuItem(props) {
  // Keep track of quantity
  const [quantity, setQuantity] = useState(0);
  const [instruction, setInstruction] = useState('');
  // TODO (part 3): add state for special instructions text

  // Return JSX to render
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          source={{uri:props.imageSource}}
          style={styles.photo}
        />
      </View>
      <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
      <Text>Price: ${props.price}</Text>
      <Text>Quantity: {quantity}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="-"
          onPress={() => {
            
            // TODO (part 2): decrease quantity by 1
            // watch out for negative quantity
            if(quantity>0){
              setQuantity(prev=>prev-=1)
            }
          }}
        />
        <Button
          title="+"
          onPress={() => {
            setQuantity(prev=>prev+=1)
            // TODO (part 2): increase quantity by 1
          }}
        />
      </View>
      <Text>Special Instructions: {instruction}</Text>
      <TextInput
        placeholder="Type instructions here"
        onSubmitEditing={({ nativeEvent, currentTarget }) => {
          // TODO (part 3): Update special instructions text
          setInstruction(nativeEvent.text)
          currentTarget.clear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 2,
    width: "90%",
    padding: 30,
    margin: 20,
  },
  photoContainer: {
    padding: 5,
  },
  photo: {
    resizeMode: "contain",
    height: 0,
    width: 0,
    padding: 50,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
  instructionInput:{
    border: "black solic 2px"
  }
});

export default MenuItem;
