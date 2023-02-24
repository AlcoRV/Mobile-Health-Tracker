import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormSection from "../FormSection";
import { InfoLine } from "../InfoLine";


function Button(){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Сменить пароль</Text>
            </View>      
        </TouchableOpacity>
    );
};

export default function ProfileForm(){
    return(
        <FormSection>
                <View style={{flex: 1, alignItems: "center", padding: 30}}>
                    <View style={styles.profilePhoto}>
                        <Text style={{ alignSelf: "center", fontSize: 22 }}>{"Photo (To Do: Delete later)"}</Text>
                    </View>
                   
                </View>
                <View style={styles.listInfo}>
                    <InfoLine paramName='Фамилия' paramValue='Иванов' />
                    <InfoLine paramName='Имя' paramValue='Иван' />
                    <InfoLine paramName='Отчество' paramValue='Иванович' />
                    <InfoLine paramName='Дата рождения' paramValue='01/01/2000' />
                    <InfoLine paramName='Адрес проживания' paramValue='г. Москва, Красная площадь' />
                    <InfoLine paramName='Номер полиса' paramValue='0000000000' />
                   
                    <Button />
                </View>
        </FormSection>
    );
};

const styles = StyleSheet.create({
    profilePhoto: {
        width: 200, 
        height: 200, 
        backgroundColor: 'red', 
        borderRadius: 30
    },
    titlePhoto: {
        fontWeight: "600",
        fontSize: 26,
        marginTop: 10
    },
    listInfo: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 25
    },
    button: {
        backgroundColor: '#D98211',
        padding: 8,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 20
    }
  });