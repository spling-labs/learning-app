import React, { } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

export default function QuestionOptions(props: any) {

    return (
        <TouchableOpacity style={[style.container, props.style]} onPress={()=>{
            props.onPress()
        }}>
            <Text
                style={{ alignSelf: 'center' }}
                color={COLORS.primary}
                fontFamily={FONT.black}
                size={SCALE_SIZE(16)}>
                {props.title}
            </Text>
        </TouchableOpacity >
    )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(16),
        flex: 1.0
    }
})