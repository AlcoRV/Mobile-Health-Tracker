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


const getAcceptArray = () => {
    const start = new Date(2023, 4, 1); // May 1, 2023
    const end = new Date(2023, 4, 31); // May 31, 2023
    const data = [];
    for (let i = 0; i < 50; i++) {
        const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
        const randomDate = new Date(randomTimestamp);
        const isAccepted = Math.random() >= 0.3 ? true : false;
        data.push({
            isAccepted: isAccepted,
            date: randomDate
        });
    }

    return data;
}

const getDataForWeeks = (acceptArray) => {
    const data = [0, 0, 0, 0, 0];
    acceptArray.forEach(el => {
        const index = (el.date.getDate() - 1) / 7;
        if(el.isAccepted){ data[index]++; }
    });
    return data;
}


const StatisticScreen = ({}) => {

    //const {title, datar} = route.params;

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


      const acceptArray = getAcceptArray();
      const countAcceptForWeeks = getDataForWeeks(acceptArray);

      const data = {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            data: countAcceptForWeeks,
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
                                fontSize: 20, color: "#ff0"}}>Статистика месяца по</Text>
                <Text style={{alignSelf: "center", marginBottom: 10, 
                                fontSize: 20, color: "#ff0"}}>Витамин С</Text>
                <BarChart style={{borderRadius: 20}}
                    data={data}
                    width={screenWidth}
                    height={500}
                    //xAxisLabel="$" 
                    
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    />
            </View>
        </MainTemplateBkg>
    );
}

export default StatisticScreen;