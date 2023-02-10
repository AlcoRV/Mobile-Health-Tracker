import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigatorContainer;