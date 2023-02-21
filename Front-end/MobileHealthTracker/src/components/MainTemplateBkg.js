import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

export default function MainTemplateBkg({children}){
    return(
        <LinearGradient colors={['#C02425', '#F0CB35']}
            style={styles.container}>
                { children }
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });