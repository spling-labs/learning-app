import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";


export default function TopicChooseItem(props: any) {

    return (

        <View style={style.container}>

            {
                props.item.perComplete == "add" ?
                    <TouchableOpacity
                        onPress={() => {
                            props.topicSetModal(true)
                        }}>
                        <View style={style.ViewStyle}>

                            <Image style={style.addIconStyle} resizeMode="contain" source={IMAGES.ic_add} />

                            <Text
                                style={style.textStyle}
                                color={COLORS.black}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(16)}>
                                {'Add'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    :
                    <View style={style.ViewStyle}>

                        <Image style={style.IconStyle} resizeMode="contain" source={IMAGES.rush} />

                        <Text
                            style={style.textStyle}
                            color={COLORS.black}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(16)}>
                            {props.item.title}
                        </Text>
                    </View>
            }


        </View>

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
        justifyContent: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: COLORS.contentThree,
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(4)
    },
    IconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
    },
    addIconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
    },
    arrowStyle: {
        height: SCALE_SIZE(8),
        width: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(8),

    },
    textStyle: {
        marginLeft: SCALE_SIZE(8),
    },

})