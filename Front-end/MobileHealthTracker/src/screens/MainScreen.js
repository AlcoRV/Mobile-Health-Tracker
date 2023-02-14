import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

const MainScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.avatar}>
                <Image height={100} width={100} source={require('../../images/profile.png')} />
            </View>
        </SafeAreaView>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        //backgroundColor: 'red',
    },
    avatar: {
        alignItems: "flex-end",
        paddingRight: 20,
        paddingTop: 40
    }
  });