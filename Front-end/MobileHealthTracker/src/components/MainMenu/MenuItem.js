import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";



export default function MenuItem({children}){
   
    return(
        <LinearGradient style={styles.menuItem} colors={['#1A94D6', '#1CB0FF', '#029EF2']}>
            <Text style={styles.menuText}>{children}</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    menuItem:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    },
    menuText: {
        fontSize: 24,
        padding: 10,
        fontWeight: "600"
    }
  });