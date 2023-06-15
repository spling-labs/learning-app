import React, { useEffect, useContext } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

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
            {props.isHide &&
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.passwordImage}
                    onPress={() => {
                        props.onPress()
                    }}>
                    <Image style={styles.passwordImage} resizeMode="contain" source={IMAGES.eye}/>
                </TouchableOpacity>
            }

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SCALE_SIZE(16),
        borderWidth: 1,
        borderColor: COLORS.color_EEEDED,
        backgroundColor: COLORS.color_FAFAFA,
        borderRadius: SCALE_SIZE(12),
        flexDirection: 'row'
    },
    inputStyles: {
        fontFamily: FONT.bold,
        color: COLORS.questionColor,
        fontSize: SCALE_SIZE(16),
        flex:1.0
    },
    passwordImage: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    }


})