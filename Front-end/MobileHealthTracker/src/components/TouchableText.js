import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function TouchableText({textStyles, onPress, children}){
    return(
        <TouchableOpacity onPress={onPress()}>
            <Text style={textStyles}>{children}</Text>
        </TouchableOpacity>
    );
};