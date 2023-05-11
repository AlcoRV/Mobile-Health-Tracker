import React from "react";
import { View } from "react-native";
import MainTemplateBkg from "./MainTemplateBkg";
import BackButton from "./BackButton";

const testData = [
    {
        date: new Date(Date.now() - 1000*60*2),
        accepted: true
    },
    {
        date: new Date(Date.now() - 1000*60*4),
        accepted: true
    },
    {
        date: new Date(Date.now() - 1000*60*6),
        accepted: true
    },
    {
        date: new Date(Date.now() - 1000*60*8),
        accepted: false
    },
    {
        date: new Date(Date.now() - 1000*60*10),
        accepted: false
    },
    {
        date: new Date(Date.now() - 1000*60*12),
        accepted: true
    },
    {
        date: new Date(Date.now() - 1000*60*14),
        accepted: true
    },
    {
        date: new Date(Date.now() - 1000*60*16),
        accepted: false
    },
    {
        date: new Date(Date.now() - 1000*60*18),
        accepted: false
    },
    {
        date: new Date(Date.now() - 1000*60*20),
        accepted: false
    },
    {
        date: new Date(Date.now() - 1000*60*22),
        accepted: true
    }
];

const StatisticScreen = () => {


    return(
        <MainTemplateBkg>
            <BackButton />

        </MainTemplateBkg>
    );
}

export default StatisticScreen;