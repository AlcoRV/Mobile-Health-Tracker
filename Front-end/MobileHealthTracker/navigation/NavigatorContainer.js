


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TestScreen } from "./screens/TestScreen";

const Stack = createNativeStackNavigator();

export const NavigatorContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Test" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};