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
        <TouchableOpacity
            onPress={() => {
                props.modal(true)
            }}>
            <View style={style.programmingStyle}>
                <View >
                    <ImageBackground style={style.logoImageStyle} source={IMAGES.background} />
                    {
                        props.item.new == "New" ?
                            <Text
                                style={style.cornerTextStyle}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.regular}
                                size={SCALE_SIZE(12)}>
                                {'New'}
                            </Text>
                            :
                            <View></View>
                    }

                </View>
                <View style={{ marginLeft: SCALE_SIZE(8) }}>
                    <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(16)}>{props.item.userName}</Text>
                    <Text color={COLORS.contentColor} fontFamily={FONT.regular} size={SCALE_SIZE(16)}>{props.item.programName}</Text>
                    <Text color={COLORS.questionColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{props.item.snellItem}</Text>
                </View>

            </View>
        </TouchableOpacity >


    )
}

const style = StyleSheet.create({
    programmingStyle: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingBottom: SCALE_SIZE(8),
        borderRadius: SCALE_SIZE(16),
        paddingLeft: SCALE_SIZE(16),
        paddingTop: SCALE_SIZE(8),
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
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderBottomWidth: 4,
        borderBottomColor: COLORS.image_shadow,
        backgroundColor: COLORS.contentThree,
    },
})