import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

import ProgressCircle from 'react-native-progress-circle'

export default function CertificateListItem(props: any) {

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => { }}>
            <View style={style.container}>
                <View style={style.ViewStyle}>
                    {
                        props.item.certificate == 'done' ?
                            <Image style={style.userImageStyle} resizeMode="contain" source={IMAGES.donecertificate} />
                            :
                            <Image style={[style.userImageStyle, { tintColor: COLORS.communitysnellColor }]} resizeMode="contain" source={IMAGES.donecertificate} />
                    }

                    <View style={{ marginLeft: SCALE_SIZE(16), flex: 1.0 }}>
                        <Text
                            style={style.textStyle}
                            color={COLORS.questionColor}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(16)}>
                            {props.item.title}
                        </Text>
                        {
                            props.item.certificate == 'done' ?
                                <Text
                                    style={style.doneTextstyle}
                                    color={COLORS.contentColor}
                                    fontFamily={FONT.regular}
                                    size={SCALE_SIZE(12)}>
                                    {'You already achieved this certificate'}
                                </Text>
                                :
                                <Text
                                    style={style.textStyle}
                                    color={COLORS.contentColor}
                                    fontFamily={FONT.regular}
                                    size={SCALE_SIZE(12)}>
                                    {props.item.perComplete}
                                </Text>
                        }

                    </View>
                    <View>
                    {
                        props.item.certificate == 'done' ?
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={style.userImageStyle} resizeMode="contain" source={IMAGES.completeeye} />
                                <Image style={style.userShareStyle} resizeMode="contain" source={IMAGES.compleshare} />
                            </View>
                            :
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
                                    size={SCALE_SIZE(10)}>
                                    {"30%"}
                                </Text>
                            </ProgressCircle>
                    }

                </View>
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
        alignSelf: 'center'
    },
    userImageStyle: {
        height: SCALE_SIZE(36),
        width: SCALE_SIZE(36),
        alignSelf: 'center',
    },
    userShareStyle: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(16),
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
    doneTextstyle: {

    },
    textStyle: {
        letterSpacing:-0.24
    },

})