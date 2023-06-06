import React, { } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

export default function BottomSheetDialogItem(props: any) {

    return (
        <View style={style.container}>
            <View style={style.ViewStyle}>
                <Image style={style.selectionStyle} resizeMode="contain" source={props.item.userImage} />
                <Image style={style.IconStyle} resizeMode="contain" source={props.item.userImage} />
                <Text
                    style={style.textStyle}
                    color={COLORS.black}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {props.item.userName}
                </Text>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: SCALE_SIZE(16),
        flex: 1.0,
        marginTop: SCALE_SIZE(16)
    },
    ViewStyle: {
        flexDirection: 'row',
        backgroundColor: COLORS.dialog_item_background,
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
        height: SCALE_SIZE(56),
        borderRadius: SCALE_SIZE(12)
    },
    selectionStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(24)
    },
    IconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(16)
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginLeft: SCALE_SIZE(16)
    },

})