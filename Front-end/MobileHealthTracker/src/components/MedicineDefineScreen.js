import React from "react";
import MainTemplateBkg from "./MainTemplateBkg";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";


const MedicineDefineScreen = () => {


    return(
        <MainTemplateBkg>
            <LinearGradient style={{flex: 1, borderRadius: 70, margin: "15%", marginVertical: "70%"}} 
            colors = {['#1A94D6', '#1CB0FF', '#029EF2']}>
                <TouchableOpacity style={{flex: 1}} onPress={() => {   }}>
                                <Text style={{fontSize: 40, flex: 1, alignSelf: "center", textAlign: "center", textAlignVertical: "center"}}>Лекарство принято!</Text>
                            </TouchableOpacity>
            </LinearGradient>
        </MainTemplateBkg>
    );
}

export default MedicineDefineScreen;