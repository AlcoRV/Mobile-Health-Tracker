import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import BackButton from "../BackButton";
import MainTemplateBkg from "../MainTemplateBkg";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CancelNotNeededNotifications, ShowSheduleNotification } from "../options/NotificationHelper";

const MedicineItemScreen = ({route}) => {
    let {medicine} = route.params;
    const navigation = useNavigation();
    const [takingTimes, setTakingTimes] = useState(medicine.takingTimes);
    const [activeNotification, setActiveNotification] = useState(medicine.activeNotification);
    console.log("qwer");

    const pushNotification = () => {
        medicine.takingTimes.map(date => {
            if(date < Date.now()){
                date.setDate(date.getDate()+1);
            };
            console.log(date);
            ShowSheduleNotification(medicine.name, "Примите лекарство", date, { value: medicine, active: activeNotification });
        });
        console.log("qwer222");
        setActiveNotification(true);
    };

    const cancelNotifications = () => {
        CancelNotNeededNotifications({
            value: medicine,
            active: activeNotification
        });
        setActiveNotification(false);
    }

    return(
            <MainTemplateBkg>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <BackButton/>
                    <View style={{flex: 1, margin: 35, marginRight: 10, marginTop: 10,
                                   borderRadius: 15, borderWidth: 2 }} >
                        <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Statistic") }>
                            <Text style={{flex: 1, textAlign: "center", textAlignVertical: "center", fontSize: 20}}>Просмотр статистики</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.modalHeader}>{medicine.name}</Text>
                <Text style={styles.modalDescription}>{`Общее описание:\n${medicine.description}`}</Text>
                <Text style={styles.modalPersonalRecipe}>{`Личные рекомендации:\n${medicine.recipe}`}</Text>
                <View style={{flexDirection: "row", marginHorizontal: 20, marginBottom: 20, flex: 1}}>
                    <View flex={3}>
                    <Text>{`Назначенное время: `}</Text>
                    {
                        medicine.takingTimes.map((item) => (
                            <Text >{item.toLocaleTimeString().slice(0,-3)}</Text>
                        ))
                    }
                    </View>
                    <View style={{flex: 2}}>
                        <View style={[styles.modalChangeTimesButton, {alignSelf: "center"}]}>
                            <TouchableOpacity style={{}} onPress={() => navigation.navigate("TimeDefine", {takingTimes: takingTimes, setTakingTimes: setTakingTimes}) }>
                                <Text style={{textAlign: "center", textAlignVertical: "center"}}>Изменить время приёма</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.modalChangeTimesButton, {alignSelf: "center"}]}>
                            <TouchableOpacity onPress={activeNotification ? cancelNotifications : pushNotification}>
                                <Text style={{textAlign: "center", textAlignVertical: "center"}}>{activeNotification ? "Выключить уведомления" : "Включить уведомления"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </MainTemplateBkg>
    );
};

export default MedicineItemScreen;

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
        flex: 2,
        marginHorizontal: 20,
        fontSize: 16
    },
    modalPersonalRecipe: {
        flex: 2,
        marginHorizontal: 20,
        fontSize: 16
    },
    modalChangeTimesButton: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5
    }
});