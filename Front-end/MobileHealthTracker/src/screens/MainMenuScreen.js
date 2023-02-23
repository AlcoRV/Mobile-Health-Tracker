import AppLoading from "expo-app-loading";
import React from "react";
import { View } from "react-native";
import * as Font from 'expo-font';
import MenuItem from "../components/MainMenu/MenuItem";
import CommonMainBlock from "../components/MainMenu/CommonMainBlock";
import MainTemplateBkg from "../components/MainTemplateBkg";
import { useNavigation } from "@react-navigation/native";

const loadFonts = () => Font.loadAsync({
    'lobster': require('../../assets/fonts/Lobster-Regular.ttf')
  });

const MainMenuScreen = () => {
    
    const [isFontsLoaded, setIsFontsLoaded] = React.useState(false);
    const navigation = useNavigation();

    if (!isFontsLoaded){
        return(
          <AppLoading startAsync={loadFonts} onFinish={() => setIsFontsLoaded(true)} onError={console.warn} />
        );
      }

    return(
        <MainTemplateBkg>
            <CommonMainBlock />
            <View style={{flex: 3}}>
                <MenuItem onPress={() => navigation.navigate("Health")}>Показатели здоровья</MenuItem>
                <MenuItem>Лекарства</MenuItem>
                <MenuItem>Процедуры и упражнения</MenuItem>
                <MenuItem>Диета</MenuItem>
                <MenuItem>Быстрые вызовы</MenuItem>
            </View>
        </MainTemplateBkg>
    );
}

export default MainMenuScreen;