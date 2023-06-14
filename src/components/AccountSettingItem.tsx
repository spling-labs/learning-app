import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";
import { LocalizationContext } from "../context/LocalizationProvider";
import { LocalizationContextType } from "../types";
import { SCREENS } from "../screens";

export default function AccountSettingItem(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                props.onPress(props.item)
                // props.props.navigation.navigate(SCREENS.SubscriptionScreen.name)
            }}>
            <View style={style.container}>
                <View style={style.ViewStyle}>
                    <Image style={style.IconStyle} resizeMode="contain" source={props.item.Image} />
                    {
                        props.item.Title == "get_pro" ?
                            <Text
                                style={style.textStyle}
                                color={COLORS.communitysnellColor}
                                fontFamily={FONT.bold}
                                size={SCALE_SIZE(16)}>
                                {getTranslation(props.item.Title)}
                            </Text>
                            :
                            props.item.Title == "delete_account" ?
                                <Text
                                    style={style.textStyle}
                                    color={COLORS.delete_color}
                                    fontFamily={FONT.bold}
                                    size={SCALE_SIZE(16)}>
                                    {getTranslation(props.item.Title)}
                                </Text>
                                :
                                <Text
                                    style={style.textStyle}
                                    color={COLORS.questionColor}
                                    fontFamily={FONT.bold}
                                    size={SCALE_SIZE(16)}>
                                    {getTranslation(props.item.Title)}
                                </Text>
                    }
                    <Image style={style.arrowStyle} resizeMode="center" source={IMAGES.ic_arrow} />
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
        paddingVertical: SCALE_SIZE(8),
        paddingHorizontal: SCALE_SIZE(16),
        justifyContent:'center'
    },
    IconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    },
    arrowStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),

    },
    textStyle: {
        marginLeft: SCALE_SIZE(16),
        flex: 1.0,
        letterSpacing:-0.24
    },

})