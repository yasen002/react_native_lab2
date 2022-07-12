import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  var food =[ {
    foodName: "dough nuts",
    price: "9.99",
    image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
 }, 
 {
  foodName: "dough",
  price: "3.33",
  image: 'https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
}, 
{
  foodName: "nuts",
  price: "3.33",
  image: 'https://images.unsplash.com/photo-1600189083288-89e1c8b9b0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
}, 

]
 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      {/* TODO (part 1): update these props with your favorite food item */}
      <MenuItem name={food[0].foodName} price={food[0].price} imageSource={food[0].image} />
      {/* TODO (part 2): add another MenuItem! */}
      <MenuItem name={food[1].foodName} price={food[1].price} imageSource={food[1].image} />
      <MenuItem name={food[2].foodName} price={food[2].price} imageSource={food[2].image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    height:"100%"
  },
});
