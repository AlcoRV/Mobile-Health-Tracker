import React from "react";
import { Dimensions, Text, View } from "react-native";
import MainTemplateBkg from "./MainTemplateBkg";
import BackButton from "./BackButton";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


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

    const chartConfig = {
        //backgroundColor: '#f000f0',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientFromOpacity: 0.3,
    fillShadowGradientFromOffset: 0.55,
    backgroundGradientTo: '#efefef',
    backgroundGradientToOpacity: 0,
    fillShadowGradientToOffset: 1,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    fillShadowGradient: "skyblue",
    fillShadowGradientOpacity: 1,
    labelColor: (opacity = 1) => `rgba(255,255,0, ${1})`,
    style: {
      borderRadius: 16,
    },
    propsForLabels:{
        fontSize: 16,
        },
      };

      const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };

      const screenWidth = Dimensions.get("window").width;

    return(
        <MainTemplateBkg>
            <BackButton />
            
            <View style={{flex: 4 }}>
                <Text style={{alignSelf: "center", marginBottom: 10, 
                                fontSize: 20, color: "#ff0"}}>Статистика приёма лекарств</Text>
                <BarChart style={{borderRadius: 20}}
                    data={data}
                    width={screenWidth}
                    height={500}
                    //yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    />
            </View>
        </MainTemplateBkg>
    );
}

export default StatisticScreen;