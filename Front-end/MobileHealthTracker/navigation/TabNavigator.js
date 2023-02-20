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
                    backgroundColor: '#535AF5'
                },
                title: itemOptions[route.name].title,
              })} 
              tabBarOptions={{
                activeTintColor: '#F0CB35',
                inactiveTintColor: '#F5D34C',
              }}>
                <Tab.Screen name="MainMenu" component={MainMenuScreen} />
                <Tab.Screen name="MedCard" component={MedCardScreen} />
            </Tab.Navigator>
    );
};

export default TabNavigator;