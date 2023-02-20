import AppLoading from "expo-app-loading";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import MenuItem from "../components/MenuItem";
import CommonMainBlock from "../components/CommonMainBlock";

const loadFonts = () => Font.loadAsync({
    'lobster': require('../../assets/fonts/Lobster-Regular.ttf')
  });

const MainMenuScreen = () => {
    
    const [isFontsLoaded, setIsFontsLoaded] = React.useState(false);

    if (!isFontsLoaded){
        return(
          <AppLoading startAsync={loadFonts} onFinish={() => setIsFontsLoaded(true)} onError={console.warn} />
        );
      }

    return(
        <LinearGradient colors={['#C02425', '#F0CB35']}
        style={styles.container} >
            <CommonMainBlock />
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

export default MainMenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });