import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Item from "../screens/Item";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

export const Stack = createStackNavigator()

export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
            }}  />
            <Stack.Screen name="Item" component={Item} options={{
                headerShown: false
            }}  />
        </Stack.Navigator>
    )
}

export const ProductNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    )
}

export const CartNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}
