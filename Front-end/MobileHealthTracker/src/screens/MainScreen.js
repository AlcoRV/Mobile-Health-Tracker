import AppLoading from "expo-app-loading";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import MenuItem from "../components/MenuItem";

const loadFonts = () => Font.loadAsync({
    'lobster': require('../../assets/fonts/Lobster-Regular.ttf')
  });

const MainScreen = () => {
    
    const [isFontsLoaded, setIsFontsLoaded] = React.useState(false);

    if (!isFontsLoaded){
        return(
          <AppLoading startAsync={loadFonts} onFinish={() => setIsFontsLoaded(true)} onError={console.warn} />
        );
      }

    return(
        <LinearGradient colors={['#C02425', '#F0CB35']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
            <View style={{flex: 1}}>
            <Image source={require('../../images/logo2.png')} style={styles.logo}  />
                <View style={styles.avatar}>
                    <Image height={100} width={100} source={require('../../images/profile.png')} />
                    <Text style={styles.avatarText}>{'Информация\n пользователя'}</Text>
                </View>
            </View>
            <View style={{flex: 3}}>
                <MenuItem>Показатели здоровья</MenuItem>
                <MenuItem>Лекарства</MenuItem>
                <MenuItem>Процедуры и упражнения</MenuItem>
                <MenuItem>Диета</MenuItem>
                <MenuItem>Быстрые вызовы</MenuItem>
            </View>
        </LinearGradient>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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