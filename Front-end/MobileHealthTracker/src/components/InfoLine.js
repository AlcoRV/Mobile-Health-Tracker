import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function InfoLine({paramName, paramValue}){
    return(
        <View style={styles.container}>
            <Text ellipsizeMode="tail" style={[styles.text, {fontWeight: "600"} ]}>{`${paramName}:`}</Text>
            <Text ellipsizeMode="tail" style={styles.text}>{paramValue}</Text>
        </View>
    );
};

//const [parameter, setParameter] = useState(null);

function InfoLineParameter({paramName, scaleName, maxLength}){

    return(
        <View style={styles.container}>
            <Text ellipsizeMode="tail" style={[styles.text, {fontWeight: "600"} ]}>{`${paramName}:`}</Text>
            <TextInput keyboardType="numeric" style={styles.textInput} maxLength={maxLength} />
            <Text ellipsizeMode="tail" style={[styles.text, {fontWeight: "600"} ]}>{`${scaleName}`}</Text>
        </View>
    );
};

export {InfoLine, InfoLineParameter};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        marginHorizontal: 10,
        fontSize: 20,
        width: '40%',
        marginVertical: 10,
        textAlign: "center"
    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        
        textAlign: "center",
        fontSize: 20,

    }
});
