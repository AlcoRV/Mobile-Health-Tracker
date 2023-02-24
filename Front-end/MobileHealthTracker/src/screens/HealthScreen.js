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
                <View style={{flexDirection: "row", margin: 20, backgroundColor: 'red'}}>
                    <InfoLineParameter paramName='Вес' scaleName='кг.' maxLength={5} />
                    <InfoLineParameter paramName='Рост' scaleName='м.' maxLength={4} />
                </View>
                
            </FormSection>
        </MainTemplateBkg>
    );
};

export default HealthScreen;

const styles = StyleSheet.create({
    
});