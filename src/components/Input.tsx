import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, Alert, TextInput } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";


export default function Input(props: any) {

    return (
        <View style={[styles.container, props.style]}>
            <TextInput
                {...props}
                style={styles.inputStyles}
                numberOfLines={props.numberOfLines}
                placeholder={props.placeholder}
                value={props.value}
                placeholderTextColor={COLORS.contentTwo}
                onChangeText={text => props.onChangeText(text)}>
            </TextInput>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SCALE_SIZE(16),
        borderWidth: 1,
        borderColor: COLORS.color_EEEDED,
        backgroundColor: COLORS.color_FAFAFA,
        borderRadius: SCALE_SIZE(12)
    },
    inputStyles: {
        fontFamily: FONT.bold,
        color: COLORS.questionColor,
        fontSize: SCALE_SIZE(16)
    }

})