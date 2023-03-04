import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function BackButton({onPress}){

    const navigation = useNavigation();

    onPress = onPress || navigation.goBack;

    return(
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={ () => onPress() }>
                <Image source={require('../../images/goBack.png')} style={styles.goBack}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    goBack:{
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 30
    }
  });