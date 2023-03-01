import React from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "../components/BackButton";
import FormSection from "../components/FormSection";
import { InfoLineParameter } from "../components/InfoLine";
import MainTemplateBkg from "../components/MainTemplateBkg";

const HealthScreen = () => {
    return(
        <MainTemplateBkg>
            <BackButton/>
            <FormSection>
                <View style={{flexDirection: "row", margin: 20}}>
                    <InfoLineParameter paramName='weight' />
                    <InfoLineParameter paramName='height' />
                </View>
                <View style={{alignItems: "center"}}>
                    <InfoLineParameter style={styles.oneLineParameter} paramName='heartRate' />
                    <InfoLineParameter style={styles.oneLineParameter} paramName='bloodPressure' />

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