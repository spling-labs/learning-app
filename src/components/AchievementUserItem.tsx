import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

export default function AchievementUserItem(props: any) {

    return (
        <TouchableOpacity
            onPress={() => {
            }}>
            <View style={style.container}>

                <View style={style.mainViewStyle}>
                    <ImageBackground style={style.logoImageStyle}>
                        <Image style={style.userImageStyle} resizeMode="contain" source={IMAGES.user_witout_back} />
                    </ImageBackground>
                    {
                        props.item.title == 'lock' &&
                        <View style={style.imageViewStyel}>
                            <Image style={style.cornerTextStyle} resizeMode="contain" source={IMAGES.lactureLock} />

                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    mainViewStyle: {
        marginRight: SCALE_SIZE(8),
        height: SCALE_SIZE(74),
        alignSelf: 'center',
        alignItems: 'center'
    },
    userImageStyle: {
        width: SCALE_SIZE(58),
        height: SCALE_SIZE(58),
        alignSelf: 'center'
    },
    cornerTextStyle: {
        height: SCALE_SIZE(12),
        width: SCALE_SIZE(12),
        tintColor: '#141B34',
    },
    logoImageStyle: {
        height: SCALE_SIZE(64),
        width: SCALE_SIZE(64),
        alignSelf: 'center',
        borderRadius: 150 / 2,
        overflow: "hidden",
        backgroundColor: COLORS.color_F6F6F6,
        borderColor: COLORS.contentThree,
        borderWidth: SCALE_SIZE(3)
    },
    imageViewStyel: {
        position: 'absolute',
        marginTop: SCALE_SIZE(48),
        marginRight: SCALE_SIZE(12),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 150 / 2,
        height: SCALE_SIZE(20),
        width: SCALE_SIZE(20),
        borderColor: COLORS.black,
        borderWidth: SCALE_SIZE(1)
    }

})