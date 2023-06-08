import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

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
                <View>
                    <Text
                        style={style.textStyle}
                        color={COLORS.questionColor}
                        fontFamily={FONT.semiBold}
                        size={SCALE_SIZE(16)}>
                        {props.item.title}
                    </Text>
                    <Text
                        style={style.textStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(14)}>
                        {props.item.disc}
                    </Text>
                </View>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    ViewStyle: {
        flexDirection: 'row',
        marginTop: SCALE_SIZE(16)
    },
    IconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(24),
        marginTop: SCALE_SIZE(8)
    },
    textStyle: {
        marginLeft: SCALE_SIZE(8),
    },

})