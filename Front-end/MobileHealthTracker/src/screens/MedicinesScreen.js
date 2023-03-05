import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import FormSection from "../components/FormSection";
import MenuItem from "../components/MainMenu/MenuItem";
import MainTemplateBkg from "../components/MainTemplateBkg";
import RNDateTimePicker from '@react-native-community/datetimepicker';

const testMedicines = [
    {
        name: 'Лекарство1',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [new Date()],
    },
    {
        name: 'Лекарство2',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство3',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство4',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство5',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство6',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство7',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство8',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство9',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство10',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство11',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство12',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство13',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство14',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство15',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    },
    {
        name: 'Лекарство16',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: []
    }
]

const ItemDescription = ({visible, medicine}) => {
    const {activeItem, setActiveItem} = medicine;
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentTime = selectedDate || time;
        setTime(currentTime);

        if(event.type != 'dismissed'){ 
            activeItem.takingTimes.push(currentTime); 
            if(activeItem.takingTimes.length === activeItem.needToTake) { setShowTimePicker(false); }
        }
    }

    const fillListTime = () => { 
        activeItem.takingTimes = [];

        setShowTimePicker(true); 
    }


    if(!activeItem) {
        return(null);
    }
    
    return(
        <Modal visible={visible} >
            <MainTemplateBkg>
                <BackButton onPress={() => {setActiveItem(null)}}/>
                <Text style={styles.modalHeader}>{activeItem.name}</Text>
                <Text style={styles.modalDescription}>{`Общее описание:\n${activeItem.description}`}</Text>
                <Text style={styles.modalPersonalRecipe}>{`Личные рекомендации:\n${activeItem.recipe}`}</Text>
                <View style={{flexDirection: "row", marginHorizontal: 20, marginBottom: 20}}>
                    <View flex={3}>
                    <Text>{`Принято: ${activeItem.takingTimes.length}/${activeItem.needToTake}`}</Text>
                    {
                        activeItem.takingTimes.map((item) => (
                            <Text >{item.toLocaleTimeString().slice(0,-3)}</Text>
                        ))
                    }
                    { showTimePicker && <RNDateTimePicker  display="default" mode='time' value={time} onChange={onChange}/> }
                    </View>
                    <View style={styles.modalChangeTimesButton}>
                        <TouchableOpacity onPress={() => fillListTime()}>
                            <Text style={{textAlign: "center", textAlignVertical: "center"}}>Изменить время приёма</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </MainTemplateBkg>
        </Modal>
    );
};

const MedicinesScreen = () => {
    const [listMedicines, setListMedicines] = useState(testMedicines);
    const [activeItem, setActiveItem] = useState(null);

    return(
        <MainTemplateBkg>
            <ItemDescription visible={true} medicine={{activeItem, setActiveItem}} />
            <FormSection>
                <FlatList style={styles.list} data={listMedicines} renderItem={({item}) => (
                    <MenuItem 
                    style={styles.item} 
                    colors={['#9C5800', '#E88A10']} 
                    onPress={() => {
                        setActiveItem(item)
                    }} >
                        {item.name}
                    </MenuItem>
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
    },
    modalHeader: {
        alignSelf: "center", 
        flex: 1,
        fontWeight:"600",
        fontSize: 22 
    },
    modalDescription: {
        flex: 1,
        marginHorizontal: 20,
        fontSize: 16
    },
    modalPersonalRecipe: {
        flex: 1,
        marginHorizontal: 20,
        fontSize: 16
    },
    modalChangeTimesButton: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10
    }
});