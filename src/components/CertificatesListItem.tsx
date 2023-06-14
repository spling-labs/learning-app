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
            onPress={() => {
            }}>
            <View style={style.container}>

                <View style={style.ViewStyle}>
                    {
                        props.item.certificate == 'done' ?
                            <Image style={style.userImageStyle} resizeMode="contain" source={IMAGES.donecertificate} />
                            :
                            <Image style={[style.userImageStyle, { tintColor: COLORS.communitysnellColor }]} resizeMode="contain" source={IMAGES.donecertificate} />
                    }

                    <View>
                        <Text
                            style={style.textStyle}
                            color={COLORS.black}
                            fontFamily={FONT.black}
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

                </View>
                <View style={{ marginRight: SCALE_SIZE(16) }}>
                    {
                        props.item.certificate == 'done' ?
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={style.userImageStyle} resizeMode="contain" source={IMAGES.completeeye} />
                                <Image style={style.userShareStyle} resizeMode="contain" source={IMAGES.compleshare} />
                            </View>
                            :
                            <ProgressCircle
                                percent={30}
                                radius={20}
                                borderWidth={5}
                                color={COLORS.green}
                                shadowColor="#E0F8CE"
                                bgColor={COLORS.white}
                            >
                                <Text
                                    color={COLORS.contentColor}
                                    fontFamily={FONT.regular}
                                    size={SCALE_SIZE(10)}>
                                    {"30%"}
                                </Text>
                            </ProgressCircle>
                    }

                </View>
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
    },
    userImageStyle: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(16)
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
        width: SCALE_SIZE(150),
        marginLeft: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(20)

    },
    textStyle: {
        marginLeft: SCALE_SIZE(16),
    },

})