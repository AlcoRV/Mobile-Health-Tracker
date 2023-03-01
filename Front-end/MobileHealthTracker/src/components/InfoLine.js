import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text';

function InfoLine({paramName, paramValue}){
    return(
        <View style={styles.container}>
            <Text ellipsizeMode="tail" style={[styles.baseText, {fontWeight: "600"} ]}>{`${paramName}:`}</Text>
            <Text ellipsizeMode="tail" style={styles.baseText}>{paramValue}</Text>
        </View>
    );
};

const parameters = {
    height: {
        title: 'Рост',
        scale: 'м.',
        mask: '9,99'
    },
    weight: {
        title: 'Вес',
        scale: 'кг.',
        mask: '99,99'
    },
    heartRate: {
        title: 'Пульс',
        scale: 'уд./мин.',
        mask: '99'
    },
    bloodPressure: {
        title: 'Давление',
        scale: 'мм. р. с.',
        mask: '999/99'
    },
    sleep: {
        title: 'Сон',
        scale: 'мм. р. с.',
        mask: '999/99'
    }
};

function InfoLineParameter({paramName, style}){

    const [parameter, setParameter] = useState('');

    return(
        <View style={[styles.container, {width: '45%'}, style]}>
            <Text ellipsizeMode="tail" style={[styles.parameterText, {fontWeight: "600"} ]}>{`${parameters[paramName].title}:`}</Text>
            <TextInputMask 
                type="custom" 
                style={styles.textInput} 
                value={parameter}
                onChangeText={setParameter}
                options={{
                    mask: parameters[paramName].mask
                }}
                />
            <Text ellipsizeMode="tail" style={{fontSize: 20}}>{`${parameters[paramName].scale}`}</Text>
        </View>
    );
};

export {InfoLine, InfoLineParameter};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    baseText: {
        fontSize: 20,
        width: '40%',
        textAlign: "center"
    },
    parameterText: {
        fontSize: 20,
    },
    textInput: {
        borderBottomWidth: 1,
        textAlign: "center",
        fontSize: 20,
        marginHorizontal: 5,
        width: '40%'
    }
});
