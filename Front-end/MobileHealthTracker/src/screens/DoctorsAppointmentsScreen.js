import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import FormSection from "../components/FormSection";
import MainTemplateBkg from "../components/MainTemplateBkg";
import 'intl';
import 'intl/locale-data/jsonp/ru';

const testAppointments = [
    {
        specialization: 'Терапевт',
        name: "Петров П.П.",
        date: new Date()
    },
    {
        specialization: 'Хирург',
        name: "Филиппов Ф.Ф.",
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

const AppointmentItem = ({item}) => {
    const {specialization, name, date} = item;

    return(
        <LinearGradient style={styles.item} colors={['#9C5800', '#E88A10']}>
            <TouchableOpacity onPress={ () => {} } style={{ flex: 1}}>
                <Text style={styles.itemSpecialization}>{specialization}</Text>
                <Text style={styles.itemOptions}>{name}</Text>
                <Text style={styles.itemOptions}>{getFullFormatDate(date)}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const DoctorsAppointmentsScreen = () => {
    const [appointments, setAppointments] = useState(testAppointments);

    return(
        <MainTemplateBkg>
            <FormSection>
                <FlatList style={styles.list} data={appointments} renderItem={({item}) => (
                        <AppointmentItem item={item} />
                    )}  />
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
    }
});