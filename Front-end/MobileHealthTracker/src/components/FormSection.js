import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "./BackButton";

export default function FormSection({children, style}){
    return(
        <View flex={1}>
            <BackButton/>
            <LinearGradient style={[styles.formSection, style]} 
            colors = {['#1A94D6', '#1CB0FF', '#029EF2']}>
                {children}
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    formSection: {
        flex: 10,
        margin: 20,
        borderRadius: 30,
        alignItems: "center"
    }
});