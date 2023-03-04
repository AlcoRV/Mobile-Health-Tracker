import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";



export default function MenuItem({children, onPress, style, colors}){
   
    onPress = onPress ? onPress : () => {};
    colors = colors ? colors : ['#1A94D6', '#1CB0FF', '#029EF2'];

    return(
        <LinearGradient style={[styles.menuItem, style]} colors={colors}>
            <TouchableOpacity onPress={ onPress } style={{ flex: 1}}>
                <Text style={styles.menuText}>{children}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    menuItem:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        borderRadius: 5
    },
    menuText: {
        fontSize: 24,
        padding: 10,
        fontWeight: "600"
    }
  });