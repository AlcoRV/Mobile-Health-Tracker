import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CommonMainBlock(props){
    let flex = props.flex;
    flex = flex ? flex : 1;

    return(
        <View style={{flex: flex}}>
            <Image source={require('../../images/logo2.png')} style={styles.logo}  />
            <View style={styles.avatar}>
                <Image height={100} width={100} source={require('../../images/profile.png')} />
                <Text style={styles.avatarText}>{'Информация\n пользователя'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        position: "absolute",
        right: 20,
        top: 40,
        alignItems: "center"
    },
    avatarText:{
        textAlign: "center", 
        fontFamily: 'lobster',
        fontSize: 16
    },
    logo:{
        width: 200, 
        height: 100, 
        left: 30, 
        bottom: 20, 
        position: "absolute"
    }
  });