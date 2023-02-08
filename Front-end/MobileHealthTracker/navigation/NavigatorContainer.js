import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthorizationScreen from "../src/screens/AuthorizationScreen";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

export const NavigatorContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {/*<Stack.Screen name="Test" component={AuthorizationScreen} /> */}
                <Stack.Screen name="Tab" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};