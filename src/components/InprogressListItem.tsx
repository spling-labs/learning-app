import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

import ProgressCircle from 'react-native-progress-circle'

export default function InprogressListItem(props: any) {

    return (
        <TouchableOpacity
            onPress={() => {
            }}>
            <View style={style.container}>
                <View style={style.ViewStyle}>
                    <View>
                        <Text
                            style={style.textStyle}
                            color={COLORS.questionColor}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(16)}>
                            {props.item.title}
                        </Text>
                        <Text
                            style={style.textStyle}
                            color={COLORS.contentTwo}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(12)}>
                            {props.item.perComplete}
                        </Text>
                    </View>

                </View>
                <View>
                    <ProgressCircle
                        percent={30}
                        radius={22}
                        borderWidth={5}
                        color={COLORS.green}
                        shadowColor="#E0F8CE"
                        bgColor={COLORS.white}
                    >
                        <Text
                            color={COLORS.contentTwo}
                            fontFamily={FONT.semiBold}
                            align={'center'}
                            size={SCALE_SIZE(10)}>
                            {"30%"}
                        </Text>
                    </ProgressCircle>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
    },
    ViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1.0
    },
    IconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
    },
    arrowStyle: {
        height: SCALE_SIZE(8),
        width: SCALE_SIZE(16),

    },
    textStyle: {
        letterSpacing:-0.24
    },

})