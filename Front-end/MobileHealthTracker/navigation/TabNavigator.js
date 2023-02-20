import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MainMenuScreen from "../src/screens/MainMenuScreen";
import MedCardScreen from "../src/screens/MedCardScreen";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const itemOptions = {
  MainMenu: {
    title: 'Главное меню',
    activeIconName: 'home',
    inactiveIconName: 'home-outline'
  },
  MedCard: {
    title: 'Мед. карточка',
    activeIconName: 'person',
    inactiveIconName: 'person-outline'
  }
};

const TabNavigator = () => {
    return(
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? itemOptions[route.name].activeIconName : itemOptions[route.name].inactiveIconName;  
                  return <Ionic name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#535AF5',
                    display: "flex"
                },
                tabBarActiveTintColor: '#F0CB35',
                tabBarInactiveTintColor: '#F5D34C',
                title: itemOptions[route.name].title,
              })} >
                <Tab.Screen name="MainMenu" component={MainMenuScreen} />
                <Tab.Screen name="MedCard" component={MedCardScreen} />
            </Tab.Navigator>
    );
};

export default TabNavigator;