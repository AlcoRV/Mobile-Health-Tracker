import { useNavigation } from "@react-navigation/native";
import MainTemplateBkg from "../MainTemplateBkg";
import FormSection from "../FormSection";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";




export function TimeDefineScreen({route}){
    let {takingTimes, setTakingTimes} = route.params;
    const navigation = useNavigation();
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [time, setTime] = useState(null);
    const [index, setIndex] = useState(null);

    const onChange = (event, selectedDate) => {
        const currentTime = selectedDate || time;
        setTime(currentTime);

        console.log(showTimePicker);

        if(event.type != 'dismissed'){ 
            takingTimes[index] = currentTime;
        }

        setShowTimePicker(false);
    }

    return(
        <MainTemplateBkg>
            <FormSection buttonOnPress={() => { setTakingTimes(takingTimes); navigation.goBack() }}>
                { showTimePicker && <RNDateTimePicker  display="default" mode='time' value={new Date()} onChange={onChange}/> }
                {
                    takingTimes.map((el, i) => (
                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress={() => {  setIndex(i); setShowTimePicker(true); }}>
                                <Text style={{fontSize: 40, flex: 1, textAlignVertical: "center"}}>{el.toLocaleTimeString().slice(0,-3)}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </FormSection>
        </MainTemplateBkg>
    );
};