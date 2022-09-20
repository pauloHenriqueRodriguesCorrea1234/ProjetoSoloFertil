import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
export default function App() {
  return (
       <View style={styles.conteiner}>
        <Home/>  
       </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});  
