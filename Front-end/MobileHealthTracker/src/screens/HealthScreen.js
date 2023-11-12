import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormSection from "../components/FormSection";
import { InfoLineParameterWithMask } from "../components/InfoLine";
import MainTemplateBkg from "../components/MainTemplateBkg";

const HealthScreen = () => {
const [changeDate, setChangeDate] = useState(new Date().toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: 'numeric'}).replace(/\//g, '.'));

    return(
        <MainTemplateBkg>
            <FormSection style={{justifyContent: "center"}}>
                <View style={{flexDirection: "row", margin: 20}}>
                    <InfoLineParameterWithMask paramName='weight' />
                    <InfoLineParameterWithMask paramName='height' />
                </View>
                <View style={{alignItems: "center"}}>
                    <InfoLineParameterWithMask style={styles.oneLineParameter} paramName='heartRate' />
                    <InfoLineParameterWithMask style={styles.oneLineParameter} paramName='bloodPressure' />
                </View>
                <View style={{flexDirection: "row", width: '60%', margin: 10}}>
                    <InfoLineParameterWithMask paramName='sleepH' />
                    <InfoLineParameterWithMask paramName='sleepM' />
                </View>
                <View>
                    <Text>{`Данные актуальны на ${changeDate}`}</Text>
                </View>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Сохранить</Text>
                    </View>
                </TouchableOpacity>
            </FormSection>
        </MainTemplateBkg>
    );
};

export default HealthScreen;

const styles = StyleSheet.create({
    oneLineParameter:{
        marginVertical: 20
    },
    button: {
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        margin: 10,
        backgroundColor: '#FFB029'
    },
    buttonText: {
    fontSize: 16,
    color: '#fff'
    }
});