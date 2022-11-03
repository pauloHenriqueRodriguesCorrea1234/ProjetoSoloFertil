import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ConteinerView } from "./App1";
import Home from "./src/pages/Home";
import Details from "./src/pages/Details";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ConteinerView>
      <StatusBar />
      <NavigationContainer>
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
              title: route.params.item.nomeProduto,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ConteinerView>
  );
}
