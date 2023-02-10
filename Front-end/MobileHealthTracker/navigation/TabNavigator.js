import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AuthorizationScreen from "../src/screens/AuthorizationScreen";
import MainScreen from "../src/screens/MainScreen";
import TestScreen from "../src/screens/TestScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="Test" component={TestScreen} />
                <Tab.Screen name="Main" component={MainScreen} />
                <Tab.Screen name="Auth" component={AuthorizationScreen} />
            </Tab.Navigator>
    );
};

export default TabNavigator;