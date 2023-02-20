import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
    const navigation = useNavigation();

    return(
        <LinearGradient colors={['#C02425', '#F0CB35']}
        style={styles.container} >
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={ () => navigation.goBack() }>
                    <Image source={require('../../images/goBack.png')} style={styles.goBack}/>
                </TouchableOpacity>
            </View>
            <LinearGradient style={styles.formInfo} 
                colors = {['#1A94D6', '#1CB0FF', '#029EF2']}>
                    <View style={{flex: 1, alignItems: "center", padding: 30}}>
                        <View style={styles.profilePhoto}></View>
                        <Text style={styles.titlePhoto}>Photo</Text>
                    </View>
                    <View >
                        
                    </View>
            </LinearGradient>
        </LinearGradient>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    goBack:{
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 30
    },
    formInfo: {
        flex: 10,
        margin: 20,
        borderRadius: 30
    },
    profilePhoto: {
        width: 200, 
        height: 200, 
        backgroundColor: 'red', 
        borderRadius: 30
    },
    titlePhoto: {
        fontWeight: "600",
        fontSize: 20,
        marginTop: 10
    }
  });