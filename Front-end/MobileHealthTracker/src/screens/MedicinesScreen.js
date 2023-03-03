import React, { useState } from "react";
import { StyleSheet } from "react-native";
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
    }
]

const MedicinesScreen = () => {
    const [listMedicines, setListMedicines] = useState(testMedicines);

    return(
        <MainTemplateBkg>
            <FormSection>
                {
                    listMedicines.map(item => (
                        <MenuItem style={styles.item}>{item.name}</MenuItem>
                    ))
                }
            </FormSection>
        </MainTemplateBkg>
    );
};

export default MedicinesScreen;

const styles = StyleSheet.create({
    item: {
        height: 100
    }
});