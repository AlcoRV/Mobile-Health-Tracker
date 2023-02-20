import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainMenuScreen from "../src/screens/MainMenuScreen";
import MedCardScreen from "../src/screens/MedCardScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const NavigatorContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {/*<Stack.Screen name="Test" component={AuthorizationScreen} /> */}
                <Stack.Screen name="Tab" component={TabNavigator} />
                <Stack.Screen name="MainMenu" component={MainMenuScreen} />
                <Stack.Screen name="MedCard" component={MedCardScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigatorContainer;