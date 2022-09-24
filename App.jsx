import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";

import Home from "./src/pages/Home";
import Details from "./src/pages/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.conteiner}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.itens.nomeProduto,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});
