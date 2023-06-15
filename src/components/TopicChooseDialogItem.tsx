import React, { } from "react";
import { View, StyleSheet, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

export default function TopicChooseDialogItem(props: any) {

    return (
        <View style={style.container}>

            {
                props.item.select == "select" ?

                    <View style={[style.listStyle, {
                        backgroundColor: COLORS.questionColor,
                        marginRight:SCALE_SIZE(8)
                    }]}>
                        <Image style={style.arrowImageStyle} resizeMode="contain" source={props.item.checkImage} />
                        <Image style={style.alamrImageStyle} resizeMode="contain" source={props.item.alarmImage} />
                        <Text
                            style={style.selectTextStyle}
                            color={COLORS.white}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(14)}>
                            {props.item.title}
                        </Text>

                    </View>
                    :
                    <View style={style.listStyle}>
                        <Image style={style.alamrImageStyle} resizeMode="contain" source={props.item.alarmImage} />
                        <Text
                            style={style.selectTextStyle}
                            color={COLORS.questionColor}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(14)}>
                            {props.item.title}
                        </Text>

                    </View>
            }


        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    listStyle: {
        flexDirection: 'row',
        marginBottom: SCALE_SIZE(8),
        backgroundColor: COLORS.color_F6F6F6,
        borderRadius: SCALE_SIZE(32),
        paddingVertical: SCALE_SIZE(6),
        marginRight:SCALE_SIZE(8),
    },
    alamrImageStyle: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        marginLeft: SCALE_SIZE(8),
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
        marginLeft: SCALE_SIZE(8)
    },
    selectTextStyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20),
        alignSelf: 'center',
        marginHorizontal: SCALE_SIZE(8)
    }

})