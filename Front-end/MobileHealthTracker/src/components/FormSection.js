import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

export default function FormSection({children}){
    return(
        <LinearGradient style={styles.formSection} 
            colors = {['#1A94D6', '#1CB0FF', '#029EF2']}>
                {children}
        </LinearGradient>
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