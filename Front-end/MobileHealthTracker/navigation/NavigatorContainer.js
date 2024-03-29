import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthorizationScreen from "../src/screens/AuthorizationScreen";
import DietScreen from "../src/screens/DietScreen";
import DoctorsAppointmentsScreen from "../src/screens/DoctorsAppointmentsScreen";
import ExercisesScreen from "../src/screens/ExercisesScreen";
import HealthScreen from "../src/screens/HealthScreen";
import MainMenuScreen from "../src/screens/MainMenuScreen";
import MedCardScreen from "../src/screens/MedCardScreen";
import MedicinesScreen from "../src/screens/MedicinesScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import QuickCallsScreen from "../src/screens/QuickCallsScreen";
import TabNavigator from "./TabNavigator";
import { TimeDefineScreen } from "../src/components/options/TimeDefineScreen";
import MedicineItemScreen from "../src/components/Medicines/MedicineItemScreen";
import StatisticScreen from "../src/components/StatisticScreen";
import MedicineDefineScreen from "../src/components/MedicineDefineScreen";

const Stack = createNativeStackNavigator();

const NavigatorContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                { /*<Stack.Screen name="Test" component={AuthorizationScreen} />*/ }
                <Stack.Screen name="Tab" component={TabNavigator} />
                <Stack.Screen name="MainMenu" component={MainMenuScreen} />
                <Stack.Screen name="MedCard" component={MedCardScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Health" component={HealthScreen} />
                <Stack.Screen name="Medicines" component={MedicinesScreen} />
                <Stack.Screen name="Exercises" component={ExercisesScreen} />
                <Stack.Screen name="Diet" component={DietScreen} />
                <Stack.Screen name="QuickCalls" component={QuickCallsScreen} />
                <Stack.Screen name="DoctorsAppointments" component={DoctorsAppointmentsScreen} />
                <Stack.Screen name="MedicineItem" component={MedicineItemScreen} />
                <Stack.Screen name="TimeDefine" component={TimeDefineScreen} />
                <Stack.Screen name="Statistic" component={StatisticScreen} />
                <Stack.Screen name="MedicineDefine" component={MedicineDefineScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigatorContainer;