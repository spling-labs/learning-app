import React, { } from "react";
import { View, StyleSheet, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

export default function DialyLearningDialogItem(props: any) {

    return (
        <View style={style.container}>
            <View style={[style.listStyle, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={style.alamrImageStyle} resizeMode="contain" source={IMAGES.ic_alarm} />
                    <View style={{ marginLeft: SCALE_SIZE(16) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={style.titleTextstyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.bold}
                                size={SCALE_SIZE(16)}>
                                {props.item.title}
                            </Text>
                            {
                                props.item.userSelect == "select" &&
                                <Text
                                    style={style.activityTextStyle}
                                    color={COLORS.green}
                                    fontFamily={FONT.regular}
                                    size={SCALE_SIZE(12)}>{'Activate'}</Text>
                            }
                        </View>
                        <Text
                            style={style.subTitleTextstyle}
                            color={COLORS.contentTwo}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(12)}>
                            {props.item.disc}
                        </Text>
                    </View>
                </View>
                <Image style={style.arrowImageStyle} resizeMode="contain" source={props.item.checkImage} />

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    listStyle: {
        marginBottom: SCALE_SIZE(8),
        backgroundColor: COLORS.color_F6F6F6,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
    },
    alamrImageStyle: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        marginLeft: SCALE_SIZE(16),
        alignSelf: 'center'
    },
    activityTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: COLORS.green_bck_color,
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(8),
        paddingVertical: SCALE_SIZE(2)
    },
    arrowImageStyle: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'center',
        marginRight: SCALE_SIZE(8)
    },
    titleTextstyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20)
    },
    subTitleTextstyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(16)
    }
})