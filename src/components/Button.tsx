import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import Text from "./Text";

export default function Button(props: any) {

    return (
        <TouchableOpacity activeOpacity={1}
            style={[style.container, { backgroundColor: props.backgroundColor }, props.style]}
            onPress={() => {
                props.onPress()
            }}>
            <Text
                style={style.text}
                size={SCALE_SIZE(16)}
                fontFamily={props.family}
                color={props.color}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },
})