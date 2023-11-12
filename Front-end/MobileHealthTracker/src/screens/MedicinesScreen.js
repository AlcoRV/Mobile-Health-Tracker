import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import FormSection from "../components/FormSection";
import MenuItem from "../components/MainMenu/MenuItem";
import MainTemplateBkg from "../components/MainTemplateBkg";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";

const defaultTimes = [
    new Date(`0001-01-01T10:00:00.000Z`),
    new Date(`0001-01-01T12:00:00.000Z`),
    new Date(`0001-01-01T14:00:00.000Z`),
    new Date(`0001-01-01T16:00:00.000Z`),
    new Date(`0001-01-01T18:00:00.000Z`)
];

const testMedicines = [
    {
        name: 'Витамин С',
        description: 'Показания к применению: Профилактика и лечение дефицита витамина С. Состояния повышенной потребности в аскорбиновой кислоте: период интенсивного роста, несбалансированное питание, повышенные умственные и физические нагрузки, период реконвалесценции после тяжелых заболеваний, лихорадочных состояний на фоне острых респираторных заболеваний, острые респираторно-вирусные инфекции, длительно текущие хронические инфекции.',
        recipe: 'Приём раз в день по одной таблетке',
        needToTake: 5,
        taked: 1,
        takingTimes: [new Date(`0001-01-01T14:00:00.000Z`)],
        activeNotification: false
    },
    {
        name: 'Лизобакт',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    /*{
        name: 'Лекарство3',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство4',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство5',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство6',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство7',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство8',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство9',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство10',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство11',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство12',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство13',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство14',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство15',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    },
    {
        name: 'Лекарство16',
        description: 'Какое-то описание лекарственного средства (активные вещества, показания/противопоказания, как обычно принимают))',
        recipe: 'Приём по таким-то дням и по столько',
        needToTake: 5,
        taked: 1,
        takingTimes: [],
        activeNotification: false
    }*/
]

const ItemDescription = ({visible, medicine}) => {
    const {activeItem, setActiveItem} = medicine;
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const navigation = useNavigation();

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
                    <Text>{`Назначенное время: `}</Text>
                    {
                        activeItem.takingTimes.map((item) => (
                            <Text >{item.toLocaleTimeString().slice(0,-3)}</Text>
                        ))
                    }
                    { showTimePicker && <RNDateTimePicker  display="default" mode='time' value={time} onChange={onChange}/> }
                    </View>
                    <View style={[styles.modalChangeTimesButton, {alignSelf: "center"}]}>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate("TimeDefine")  /*fillListTime()*/}>
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
    const navigation = useNavigation();

    return(
        <MainTemplateBkg>
            <ItemDescription visible={true} medicine={{activeItem, setActiveItem}} />
            <FormSection>
                <FlatList style={styles.list} data={listMedicines} renderItem={({item}) => (
                    <MenuItem 
                    colors={['#9C5800', '#E88A10']} 
                    onPress={() => {
                        //setActiveItem(item)
                        navigation.navigate("MedicineItem", {medicine: item})
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