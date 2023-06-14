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
            <View style={style.listStyle}>
                {
                    props.item.select == "select" ?
                        <Image style={style.arrowImageStyle} resizeMode="contain" source={props.item.checkImage} />
                        :
                        <View></View>

                }
                <Image style={style.alamrImageStyle} resizeMode="contain" source={props.item.alarmImage} />
                <Text
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {props.item.title}
                </Text>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    listStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: SCALE_SIZE(8),
        backgroundColor: COLORS.color_F6F6F6,
        borderRadius: SCALE_SIZE(32),
        marginHorizontal: SCALE_SIZE(8),
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
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8)
    },

})