import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, TouchableHighlight } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";


export default function AvailableCoursesItemList(props: any) {

    return (
        <TouchableOpacity style={style.programmingStyle}
            activeOpacity={1}
            onPress={() => {
                props.modal(true)
            }}>
            <View style={style.logoImageStyle} />
            {props.item.new == 'New' &&
                <View style={style.newContainer}>
                    <Text
                        style={{ marginTop: -2 }}
                        color={COLORS.white}
                        fontFamily={FONT.semiBold}
                        size={SCALE_SIZE(12)}>
                        {'New'}
                    </Text>
                </View>
            }

            <View style={{ marginLeft: SCALE_SIZE(16), alignSelf: 'center' }}>
                <Text
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {props.item.userName}
                </Text>
                <Text
                    color={COLORS.contentTwo}
                    fontFamily={FONT.regular}
                    size={SCALE_SIZE(14)}>
                    {props.item.programName}
                </Text>
                <Text
                    color={COLORS.questionColor}
                    fontFamily={FONT.regular}
                    size={SCALE_SIZE(14)}>
                    {props.item.snellItem}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    programmingStyle: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(16),
        paddingLeft: SCALE_SIZE(16),
        borderBottomWidth: 4,
        marginTop: SCALE_SIZE(16),
        borderColor: COLORS.contentThree,
        borderWidth: SCALE_SIZE(1),
        marginHorizontal: SCALE_SIZE(16),
        borderBottomColor: COLORS.contentThree,
    },
    cornerTextStyle: {
        backgroundColor: '#FF9900',
        borderRadius: SCALE_SIZE(24),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(54),
        position: 'absolute',
        alignSelf: "center"
    },
    logoImageStyle: {
        height: SCALE_SIZE(64),
        width: SCALE_SIZE(64),
        alignSelf: 'center',
        borderRadius: 64 / 2,
        overflow: "hidden",
        borderBottomWidth: 4,
        borderBottomColor: COLORS.image_shadow,
        backgroundColor: COLORS.color_E7E3E2,
    },
    newContainer: {
        paddingHorizontal: SCALE_SIZE(8),
        paddingVertical: SCALE_SIZE(2),
        backgroundColor: '#FF9900',
        borderRadius: SCALE_SIZE(23),
        position: 'absolute',
        alignSelf: 'center',
        left: SCALE_SIZE(27),
        bottom: SCALE_SIZE(16)
    }
})