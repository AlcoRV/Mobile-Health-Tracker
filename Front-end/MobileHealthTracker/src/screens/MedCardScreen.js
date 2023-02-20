import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CommonMainBlock from "../components/CommonMainBlock";
import MenuItem from "../components/MenuItem";

const MedCardScreen = () => {
    return(
        <LinearGradient colors={['#C02425', '#F0CB35']}
        style={styles.container} >
            <CommonMainBlock flex={2} />
            <View style={{flex: 5}}>
                <MenuItem>Записаться к врачу</MenuItem>
                <MenuItem>Найти врача</MenuItem>
                <MenuItem>Посмотреть мед. карточку</MenuItem>
            </View>
            <View style={{flex: 1, alignItems: "flex-end"}}>
                <View style={styles.chat}>
                    <Image source={require('../../images/chat.png')} style={styles.chatImage}  />
                    <Text style={{fontWeight: "600"}}>Чат</Text>
                </View>
            </View>
        </LinearGradient>
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