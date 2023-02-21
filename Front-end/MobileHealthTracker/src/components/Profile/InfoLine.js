import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InfoLine({paramName, paramValue}){
    return(
        <View style={styles.container}>
            <Text ellipsizeMode="tail" style={[styles.text, {fontWeight: "600"} ]}>{`${paramName}:`}</Text>
            <Text ellipsizeMode="tail" style={styles.text}>{paramValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    text: {
        marginHorizontal: 10,
        fontSize: 20,
        maxWidth: '50%',
        marginVertical: 10
    }
});
