import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CommonMainBlock from "../components/MainMenu/CommonMainBlock";
import MainTemplateBkg from "../components/MainTemplateBkg";
import MenuItem from "../components/MainMenu/MenuItem";
import { useNavigation } from "@react-navigation/native";

const MedCardScreen = () => {
    const navigation = useNavigation();

    return(
        <MainTemplateBkg>
            <CommonMainBlock flex={2} />
            <View style={{flex: 5}}>
                <MenuItem onPress={() => navigation.navigate("DoctorsAppointments")}>Записи к врачу</MenuItem>
                <MenuItem>Найти врача</MenuItem>
                <MenuItem>Посмотреть мед. карточку</MenuItem>
            </View>
            <View style={{flex: 1, alignItems: "flex-end"}}>
                <View style={styles.chat}>
                    <Image source={require('../../images/chat.png')} style={styles.chatImage}  />
                    <Text style={{fontWeight: "600"}}>Чат</Text>
                </View>
            </View>
        </MainTemplateBkg>
    );
};

export default MedCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chat:{
        flex: 1,
        alignItems: "center",
        paddingRight: 20
    },
    chatImage:{
        width: 70, 
        height: 70
    }
  });