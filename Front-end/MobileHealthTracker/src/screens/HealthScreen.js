import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormSection from "../components/FormSection";
import { InfoLineParameter } from "../components/InfoLine";
import MainTemplateBkg from "../components/MainTemplateBkg";

const HealthScreen = () => {
const [changeDate, setChangeDate] = useState(new Date().toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric', year: 'numeric'}).replace(/\//g, '.'));

    return(
        <MainTemplateBkg>
            <FormSection style={{justifyContent: "center"}}>
                <View style={{flexDirection: "row", margin: 20}}>
                    <InfoLineParameter paramName='weight' />
                    <InfoLineParameter paramName='height' />
                </View>
                <View style={{alignItems: "center"}}>
                    <InfoLineParameter style={styles.oneLineParameter} paramName='heartRate' />
                    <InfoLineParameter style={styles.oneLineParameter} paramName='bloodPressure' />
                </View>
                <View style={{flexDirection: "row", width: '60%', margin: 10}}>
                    <InfoLineParameter paramName='sleepH' />
                    <InfoLineParameter paramName='sleepM' />
                </View>
                <View>
                    <Text>{`Данные актуальны на ${changeDate}`}</Text>
                </View>
            </FormSection>
        </MainTemplateBkg>
    );
};

export default HealthScreen;

const styles = StyleSheet.create({
    oneLineParameter:{
        marginVertical: 20
    }
});