import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

import CircularProgress from "./CircularProgress";

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
                            color={COLORS.black}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(16)}>
                            {props.item.title}
                        </Text>
                        <Text
                            style={style.textStyle}
                            color={COLORS.contentColor}
                            fontFamily={FONT.regular}
                            size={SCALE_SIZE(12)}>
                            {props.item.perComplete}
                        </Text>
                    </View>

                </View>
                <CircularProgress
                    percent={30}
                    radius={24}
                    bgRingWidth={3}
                    progressRingWidth={3}
                    ringColor={COLORS.primary}
                    ringBgColor={COLORS.slider_unfill}
                    textFontSize={SCALE_SIZE(16)}
                    textFontColor={COLORS.contentColor}
                    startDegrees={0}
                />
            </View>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SCALE_SIZE(16)
    },
    IconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16),
    },
    arrowStyle: {
        height: SCALE_SIZE(8),
        width: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(8),

    },
    textStyle: {
        marginLeft: SCALE_SIZE(16),
    },

})