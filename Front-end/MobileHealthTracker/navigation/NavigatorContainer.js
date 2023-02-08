import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthorizationScreen from "./screens/AuthorizationScreen";

const Stack = createNativeStackNavigator();

export const NavigatorContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Test" component={AuthorizationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};