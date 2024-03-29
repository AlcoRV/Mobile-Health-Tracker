import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { SelectList } from 'react-native-dropdown-select-list'

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
        title: 'Рост:',
        scale: 'м.',
        mask: '9,99'
    },
    weight: {
        title: 'Вес:',
        scale: 'кг.',
        mask: '99,99'
    },
    heartRate: {
        title: 'Пульс:',
        scale: 'уд./мин.',
        mask: '99'
    },
    bloodPressure: {
        title: 'Давление:',
        scale: 'мм. р. с.',
        mask: '999/99'
    },
    sleepH: {
        title: 'Сон:',
        scale: 'ч.',
        mask: '99'
    },
    sleepM: {
        title: '',
        scale: 'мин.',
        mask: '99'
    }
};

function InfoLineParameterList({paramName, paramValue, setParamValue, style, values, editable}){

    return(
        <View style={[styles.container, {alignContent: "flex-start"}, style]}>
            <Text ellipsizeMode="tail" style={[styles.parameterText, {fontWeight: "600"} ]}>{`${paramName}:`}</Text>
            { editable && <SelectList data={values} setSelected={setParamValue} save="value" defaultOption={{key: 1, value: paramValue}} />
                || <Text ellipsizeMode="tail" style={[styles.parameterText ]}>{`${paramValue}`}</Text> }
        </View>
    );
};

function InfoLineParameterWithMask({paramName, style}){

    const [parameter, setParameter] = useState('');

    return(
        <View style={[styles.container, {width: '45%'}, style]}>
            <Text ellipsizeMode="tail" style={[styles.parameterTextMask, {fontWeight: "600"} ]}>{parameters[paramName].title}</Text>
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

export {InfoLine, InfoLineParameterList, InfoLineParameterWithMask};

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
        margin: 10,
        color: 'black'
    },
    parameterTextMask: {
        fontSize: 20
    },
    textInput: {
        borderBottomWidth: 1,
        textAlign: "center",
        fontSize: 20,
        marginHorizontal: 5,
        width: '40%'
    }
});
