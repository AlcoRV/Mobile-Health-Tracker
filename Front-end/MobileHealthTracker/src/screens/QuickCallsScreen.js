import React, { useState } from "react";
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormSection from "../components/FormSection";
import MenuItem from "../components/MainMenu/MenuItem";
import MainTemplateBkg from "../components/MainTemplateBkg";

const testPhoneList = [
    {
        name: 'Скорая мед. помощь',
        phone: '103'
    },
    {
        name: 'Служба экстренного реагирования',
        phone: '112'
    },
    {
        name: 'Терапевт',
        phone: '+79378453464'
    }
]

const QuickCallsScreen = () => {
    const [phoneList, setPhoneList] = useState(testPhoneList);

    return(
        <MainTemplateBkg>
            <FormSection>
                <FlatList style={styles.list} data={phoneList} renderItem={({item}) => (
                    <MenuItem 
                    colors={['#9C5800', '#E88A10']} 
                    onPress={() => {
                        Linking.openURL(`tel:${item.phone}`)
                    }} >
                        {item.name}
                    </MenuItem>
                )}  />
            </FormSection>
        </MainTemplateBkg>
    );
};

export default QuickCallsScreen;

const styles = StyleSheet.create({
    list: {
        width: '90%', 
        margin: '5%'
    }
});