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
import DateHelper from "../components/options/DateHelper";

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

const testValues = {
    doctors: ["Петров П.П.", "Филиппов Ф.Ф.", 'Сидоров С.С.'],
    specializations: ['Терапевт', 'Хирург', 'Стоматолог'],
    clinics: ["Клиника №1", "Клиника №2", "Клиника №3"],
    dates: [new Date('2023-03-18'), new Date('2023-03-17'), new Date('2022-03-19')],
    times: [new Date("0-0-0T10:30"), new Date("0-0-0T11:30:00.000Z"), new Date(10*40)]
}

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
    const [editable, setEditable] = useState(false);

    const AppointmentFormItem = () => {    
        const visible = (Boolean)(activeItem);
        const [clinic, setClinic] = useState(activeItem?.doctor?.clinic);
        const [specialization, setSpecialization] = useState(activeItem?.doctor?.specialization);
        const [doctor, setDoctor] = useState(activeItem?.doctor?.name);
        const [date, setDate] = useState(new DateHelper().getDate(activeItem?.date));
        const [time, setTime] = useState(new DateHelper().getTime(activeItem?.date));

        return( 
            <Modal visible={visible}>
                <MainTemplateBkg>
                    <FormSection buttonOnPress={() => setActiveItem(null)} style={{ justifyContent: "center" }}>
                        <InfoLineParameterList 
                            paramName={"Клиника"} paramValue={clinic} setParamValue={setClinic} values={testValues.clinics} editable={editable}/>
                        <InfoLineParameterList 
                            paramName={"Специализация"} paramValue={specialization} setParamValue={setSpecialization} values={testValues.specializations} editable={editable} />
                        <InfoLineParameterList 
                            paramName={"Врач"} paramValue={doctor} setParamValue={setDoctor} values={testValues.doctors} editable={editable} />
                        <InfoLineParameterList 
                            paramName={"День"} paramValue={date} setParamValue={setDate} values={testValues.dates.map(d => new DateHelper().getDate(d))} editable={editable} />
                        <InfoLineParameterList 
                            paramName={"Время"} paramValue={time} setParamValue={setTime} values={testValues.times.map(t => new DateHelper().getTime(t))} editable={editable} />
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
                            <AppointmentItem item={item} onPress={() => {
                                setActiveItem(new DocktorsAppointment(item));
                                setEditable(false);
                            }} />
                    )}  />
                    <View style={{}}>
                        <TouchableOpacity onPress={ () => {
                                setActiveItem(new DocktorsAppointment());
                                setEditable(true);
                            }}>
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