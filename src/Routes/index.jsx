import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Details from "../pages/Details"
import { View } from "./style";

const Stack = createNativeStackNavigator()

export default function Route() {
    return (
        <View>
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
        </View>
    )
}