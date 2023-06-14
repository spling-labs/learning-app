import React from "react";
import { View, StyleSheet, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";


export default function SubcriptionList(props: any) {


    return (

        <View style={style.container}>
            <View style={style.ViewStyle}>
                <Image style={style.IconStyle} resizeMode="contain" source={IMAGES.ic_right} />
                <Text
                    style={style.textStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(16)}>
                    {props.item.title}
                </Text>

            </View>
            <Text
                style={style.dicTextStyle}
                color={COLORS.contentColor}
                fontFamily={FONT.medium}
                size={SCALE_SIZE(14)}>
                {props.item.disc}
            </Text>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1.0
    },
    ViewStyle: {
        flexDirection: 'row',
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(24)
    },
    IconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
    },
    textStyle: {
        marginLeft: SCALE_SIZE(4),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20),
        alignSelf: 'center'
    },
    dicTextStyle: {
        marginLeft: SCALE_SIZE(54),
        marginRight: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20),
    },

})