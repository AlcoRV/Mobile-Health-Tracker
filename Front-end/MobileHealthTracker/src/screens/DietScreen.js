import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FormSection from "../components/FormSection";
import MainTemplateBkg from "../components/MainTemplateBkg";

const recommendProducts = [
    "Овощи (брокколи, морковь, помидоры)",
    'Фрукты (яблоки, бананы, груши)',
    "Рыба (лосось, тунец, скумбрия)",
    "Орехи (грецкие орехи, миндаль, фисташки)",
    "Зеленые листья (шпинат, салат)"
];

const anrecommendProducts = [
    'Полуфабрикаты (гамбургеры, пицца, колбасы)',
    'Сладости (шоколад, пирожные, мороженое)',
    'Газированные напитки (кола, газированная вода с сахаром)',
    'Фастфуд (фри, хот-доги, картошка по-французски)',
    'Мучные изделия (белый хлеб, паста, булочки)'
];

const DietItem = ({item}) => {
    const [element, setElement] = useState(item);

    return(
        <Text style={styles.dietItem}> {' * '+item} </Text>
    );
};

const DietScreen = () => {
    return(
        <MainTemplateBkg>
            <FormSection style={{padding: 20}}>
                <View style={styles.cage}>
                    <Text style={styles.header}>Рекомендуемые продукты:</Text>
                    <FlatList style={styles.list} data={recommendProducts} renderItem={({item}) => (
                        <DietItem item={item} />
                        )}  />
                </View>
                <View style={styles.cage}>
                    <Text style={styles.header}>Нерекомендуемые продукты:</Text>
                    <FlatList style={styles.list} data={anrecommendProducts} renderItem={({item}) => (
                        <DietItem item={item} />
                        )}  />
                </View>
            </FormSection>
        </MainTemplateBkg>
    );
};

export default DietScreen;

const styles = StyleSheet.create({
    form: {
        padding: 20,
    },
    cage: {
        flex: 1,
        width: '100%'
    },
    header:{
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center"
    },
    list: {
        alignSelf: "center",
        margin: 10
    },
    dietItem: {
        fontSize: 18,
        
    }
});