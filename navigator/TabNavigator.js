import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartNavigator, HomeNavigator, ProductNavigator, ProfileNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home Tab" component={HomeNavigator} options={{
                headerShown: false
            }} />
            <Tab.Screen name="Products Tab" component={ProductNavigator} options={{
                headerShown: false
            }}  />
            <Tab.Screen name="Cart Tab" component={CartNavigator} options={{
                headerShown: false
            }}  />
            <Tab.Screen name="Profile Tab" component={ProfileNavigator} options={{
                headerShown: false
            }}  />
        </Tab.Navigator>
    )
}