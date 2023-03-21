import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FormSection from "../components/FormSection";
import MainTemplateBkg from "../components/MainTemplateBkg";
import 'intl';
import 'intl/locale-data/jsonp/ru';
import DocktorsAppointment from "../../models/DoctorsAppointment";
import { InfoLineParameterList } from "../components/InfoLine";
import MenuItem from "../components/MainMenu/MenuItem";
//import ComboBox from 'react-native-combobox';

const testAppointments = [
    {
        doctor: {
            specialization: 'Терапевт',
            name: "Петров П.П.",
            clinic: "Клиника №1"
        },
        date: new Date()
    },
    {
        doctor: {
            specialization: 'Хирург',
            name: "Филиппов Ф.Ф.",
            clinic: "Клиника №1"
        },
        date: new Date()
    }
]

const getFullFormatDate = date => {

    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    dateStyle: 'full',
    timeStyle: 'full',
    locale: 'ru-RU'
    };

    return date.toLocaleString('ru-RU', options);
}

const AppointmentItem = ({item, onPress}) => {
    const {doctor, date} = item;
    const {name, specialization} = doctor;
    onPress = onPress || (() => {});

    return(
        <LinearGradient style={styles.item} colors={['#9C5800', '#E88A10']}>
            <TouchableOpacity onPress={ () => onPress() } style={{ flex: 1}}>
                <Text style={styles.itemSpecialization}>{specialization}</Text>
                <Text style={styles.itemOptions}>{name}</Text>
                <Text style={styles.itemOptions}>{getFullFormatDate(date)}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const DoctorsAppointmentsScreen = () => {
    const [appointments, setAppointments] = useState(testAppointments);
    const [activeItem, setActiveItem] = useState(null);

    const AppointmentFormItem = () => {    
        const visible = (Boolean)(activeItem);
        console.log(activeItem);

        return(
            <Modal visible={visible}>
                <MainTemplateBkg>
                    <FormSection buttonOnPress={() => setActiveItem(null)} style={{ justifyContent: "center" }}>
                        <InfoLineParameterList paramName={"Клиника"} paramValue={activeItem?.doctor?.clinic} />
                        <InfoLineParameterList paramName={"Специализация"} paramValue={activeItem?.doctor?.specialization} />
                        <InfoLineParameterList paramName={"Врач"} paramValue={activeItem?.doctor?.name} />
                        {!(activeItem?.doctor?.clinic) && <MenuItem style={{ margin: 20, flex: 0, height: 60}} colors={['#9C5800', '#E88A10']} >Выбрать дату и время</MenuItem> }
                    </FormSection>
                </MainTemplateBkg>
            </Modal>
        );
    };

    return(
        <MainTemplateBkg>
            <FormSection>
                <AppointmentFormItem />
                <FlatList style={styles.list} data={appointments} renderItem={({item}) => (
                            <AppointmentItem item={item} onPress={() => setActiveItem(item)} />
                    )}  />
                    <View style={{}}>
                        <TouchableOpacity onPress={ () => setActiveItem(new DocktorsAppointment()) }>
                            <Image source={require('../../images/addButton.png')} style={styles.addButton}/>
                        </TouchableOpacity>
                    </View>
            </FormSection>
        </MainTemplateBkg>
    );
};

export default DoctorsAppointmentsScreen;


const styles = StyleSheet.create({
    list: {
        width: '90%', 
        margin: '5%'
    },
    item:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        borderRadius: 5,
        padding: 10
    },
    itemSpecialization: {
        fontWeight: "600",
        fontSize: 24
    },
    addButton: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});