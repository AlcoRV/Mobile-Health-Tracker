import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AuthorizationScreen from "../src/screens/AuthorizationScreen";
import MainScreen from "../src/screens/MainScreen";
import TestScreen from "../src/screens/TestScreen";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Main') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Test') {
                    iconName = focused ? 'person' : 'person-outline';
                  } else if (route.name === 'Auth') {
                    iconName = focused ? 'person' : 'person-outline';
                  }
        
                  return <Ionic name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#535AF5'
                }
              })} 
              tabBarOptions={{
                activeTintColor: '#F0CB35',
                inactiveTintColor: '#F5D34C',
              }}>
                <Tab.Screen name="Test" component={TestScreen} />
                <Tab.Screen name="Main" component={MainScreen} />
                <Tab.Screen name="Auth" component={AuthorizationScreen} />
            </Tab.Navigator>
    );
};

export default TabNavigator;