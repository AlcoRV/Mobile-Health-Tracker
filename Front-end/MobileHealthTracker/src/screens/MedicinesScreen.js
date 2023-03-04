import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import FormSection from "../components/FormSection";
import MenuItem from "../components/MainMenu/MenuItem";
import MainTemplateBkg from "../components/MainTemplateBkg";

const testMedicines = [
    {
        name: 'Лекарство1',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство2',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство3',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство4',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство5',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство6',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство7',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство8',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство9',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство10',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство11',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство12',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство13',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство14',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство15',
        description: 'Принимай столько и по столько'
    },
    {
        name: 'Лекарство16',
        description: 'Принимай столько и по столько'
    }
]

const MedicinesScreen = () => {
    const [listMedicines, setListMedicines] = useState(testMedicines);

    return(
        <MainTemplateBkg>
            <FormSection>
                <FlatList style={styles.list} data={listMedicines} renderItem={({item}) => (
                    <MenuItem style={styles.item} colors={['#9C5800', '#E88A10']} >{item.name}</MenuItem>
                )}  />
            </FormSection>
        </MainTemplateBkg>
    );
};

export default MedicinesScreen;

const styles = StyleSheet.create({
    list: {
        width: '90%', 
        margin: '5%'
    }
});