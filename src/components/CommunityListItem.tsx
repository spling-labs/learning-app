import React, { } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";

export default function CommunityListItem(props: any) {

    return (
        <View style={style.container}>
            <View style={[style.flexRowStyle]}>
                <View style={[style.flexRowStyle, { flex: 1.0 }]}>
                    <View style={style.profileImage}>
                        <Image style={style.userImageStyle} resizeMode="cover" source={IMAGES.profile} />
                    </View>
                    <View style={{ marginLeft: SCALE_SIZE(8), alignSelf: 'center' }}>
                        <View style={style.flexRowStyle}>
                            <Text
                                color={COLORS.communityTextColor}
                                fontFamily={FONT.bold}
                                size={SCALE_SIZE(14)}>
                                {props.item.userName}
                            </Text>
                            <Text
                                style={style.userTextStyle}
                                color={COLORS.primary}
                                fontFamily={FONT.bold}
                                size={SCALE_SIZE(14)}>
                                {'Follow'}
                            </Text>
                        </View>
                        <View style={[style.flexRowStyle, { marginTop: SCALE_SIZE(4) }]}>
                            <Text
                                style={style.snellTextStyle}
                                color={COLORS.warning}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(12)}>
                                {props.item.userSnell}
                            </Text>
                            <Text
                                style={style.levelTextStyle}
                                color={COLORS.communitylevelColor}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(12)}>
                                {'L.V 2'}
                            </Text>
                            <Text
                                style={style.hrTextStyle}
                                color={COLORS.communityHrColor}
                                fontFamily={FONT.regular}
                                size={SCALE_SIZE(12)}>
                                {'1h ago'}
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => {
                        props.modalVisible(true)
                        props.modalActionVisible('short_by')
                    }}>
                    <Image style={style.dotsImageStyle} resizeMode="contain" source={IMAGES.threedots} />
                </TouchableOpacity>
            </View>
            <Text
                style={{ marginTop: SCALE_SIZE(16) }}
                color={COLORS.communityTextColor}
                fontFamily={FONT.semiBold}
                size={SCALE_SIZE(16)}>
                {props.item.title}
            </Text>
            <Text
                style={{ marginTop: SCALE_SIZE(4) }}
                color={COLORS.communityTextColor}
                fontFamily={FONT.regular}
                size={SCALE_SIZE(14)}>
                {props.item.discription}
            </Text>
            <Text
                style={{ marginTop: SCALE_SIZE(4) }}
                color={COLORS.communitytagColor}
                fontFamily={FONT.regular}
                size={SCALE_SIZE(12)}>
                {props.item.usertag}
            </Text>
            {
                props.item.cummunitcationImage == "" ?
                    <View />
                    :
                    <ImageBackground style={style.postImgStyle} source={props.item.cummunitcationImage} resizeMode='cover'  />

            }
            <View style={{ flexDirection: 'row', marginTop: SCALE_SIZE(16), justifyContent:'space-between'}}>
                <View style={style.flexRowStyle}>
                    <View style={style.flexRowStyle}>
                        <Image style={[style.favouriteImageStyle]} resizeMode="contain" source={IMAGES.favourite} />
                        <Text
                            style={style.textStyle}
                            color={COLORS.communitytagColor}
                            fontFamily={FONT.regular}
                            size={SCALE_SIZE(14)}>
                            {props.item.likeCount}
                        </Text>
                    </View>
                    <View style={style.flexRowStyle}>
                        <Image style={style.messageImageStyle} resizeMode="contain" source={IMAGES.message} />
                        <Text
                            style={style.textStyle}
                            color={COLORS.communitytagColor}
                            fontFamily={FONT.regular}
                            size={SCALE_SIZE(14)}>
                            {props.item.msgCount}
                        </Text>
                    </View>
                </View>
                <Image style={style.shareImageStyle} resizeMode="contain" source={IMAGES.share} />

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: SCALE_SIZE(16),
        flex: 1.0,
        paddingVertical: SCALE_SIZE(16)
    },
    postImgStyle: {
        height: SCALE_SIZE(192),
        marginTop: SCALE_SIZE(8),
        borderRadius:SCALE_SIZE(8),
        overflow:'hidden'
    },
    userImageStyle: {
        height: SCALE_SIZE(36),
        width: SCALE_SIZE(36),
        alignSelf: 'center',
    },
    favouriteImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(16)
    },
    messageImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(24)
    },
    shareImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
    },
    dotsImageStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(8),
        alignItems: 'center',
        alignSelf: 'center',
    },
    textStyle: {
        marginLeft: SCALE_SIZE(8)
    },
    userTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(16)
    },
    snellTextStyle: {
        alignSelf: 'center',
        backgroundColor: '#FEFAEC',
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(4)
    },
    levelTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: '#F1FAEB',
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(4)
    },
    hrTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8)
    },
    flexRowStyle: {
        flexDirection: 'row'
    },
    profileImage: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        borderRadius: SCALE_SIZE(20),
        backgroundColor: COLORS.white,
        elevation: 2,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})