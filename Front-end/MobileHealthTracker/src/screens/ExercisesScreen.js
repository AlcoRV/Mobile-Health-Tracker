import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import FormSection from "../components/FormSection";
import MenuItem from "../components/MainMenu/MenuItem";
import MainTemplateBkg from "../components/MainTemplateBkg";
import RNDateTimePicker from '@react-native-community/datetimepicker';

const testMedicines = [
    {
        name: 'Упражнение1',
        purpose: 'Нужно для такого-то эффекта',
        comment: 'Что-то не обязательное',
        needToTake: 5,
        takingTimes: [new Date()],
    },
    {
        name: 'Процедура1',
        purpose: 'Нужно для такого-то эффекта',
        comment: 'Что-то не обязательное',
        needToTake: 5,
        takingTimes: [new Date()],
    },
    {
        name: 'Закапывание глаз',
        purpose: 'Нужно для сохранения зрения и лечения сухости глаз',
        comment: 'Что-то не обязательное',
        needToTake: 5,
        takingTimes: [new Date()],
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
        <Modal visible={visible}>
            <MainTemplateBkg>
                <BackButton onPress={() => {setActiveItem(null)}}/>
                <Text style={styles.modalHeader}>{activeItem.name}</Text>
                <Text style={styles.modalDescription}>{`Цель:\n${activeItem.purpose}`}</Text>
                <Text style={styles.modalPersonalRecipe}>{`Примечание:\n${activeItem.comment}`}</Text>
                <View style={{flexDirection: "row", marginHorizontal: 20, marginBottom: 20}}>
                    <View flex={3}>
                    <Text>{`Выполнено: ${activeItem.takingTimes.length}/${activeItem.needToTake}`}</Text>
                    {
                        activeItem.takingTimes.map((item) => (
                            <Text >{item.toLocaleTimeString().slice(0,-3)}</Text>
                        ))
                    }
                    { showTimePicker && <RNDateTimePicker  display="default" mode='time' value={time} onChange={onChange}/> }
                    </View>
                    <View style={styles.modalChangeTimesButton}>
                        <TouchableOpacity onPress={() => fillListTime()}>
                            <Text style={{textAlign: "center", textAlignVertical: "center"}}>Изменить время выполнения</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </MainTemplateBkg>
        </Modal>
    );
};

const ExercisesScreen = () => {
    const [listExercises, setListExercises] = useState(testMedicines);
    const [activeItem, setActiveItem] = useState(null);

    return(
        <MainTemplateBkg>
            <ItemDescription visible={true} medicine={{activeItem, setActiveItem}} />
            <FormSection>
                <FlatList style={styles.list} data={listExercises} renderItem={({item}) => (
                    <MenuItem 
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

export default ExercisesScreen;


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