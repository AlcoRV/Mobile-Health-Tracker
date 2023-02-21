import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MainTemplateBkg from "../components/MainTemplateBkg";
import ProfileForm from "../components/Profile/ProfileForm";


const ProfileScreen = () => {
    const navigation = useNavigation();

    return(
        <MainTemplateBkg>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={ () => navigation.goBack() }>
                    <Image source={require('../../images/goBack.png')} style={styles.goBack}/>
                </TouchableOpacity>
            </View>
            <ProfileForm />
        </MainTemplateBkg>
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