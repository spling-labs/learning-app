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
            <View style={[style.flexRowStyle, { justifyContent: 'space-between' }]}>
                <View style={style.flexRowStyle}>
                    <Image style={style.userImageStyle} resizeMode="contain" source={props.item.userImage} />
                    <View style={{ marginLeft: SCALE_SIZE(8) }}>
                        <View style={style.flexRowStyle}>
                            <Text color={COLORS.communityTextColor} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{props.item.userName}</Text>
                            <Text style={style.userTextStyle} color={COLORS.primary} fontFamily={FONT.semiBold} size={SCALE_SIZE(14)}>{'Follow'}</Text>
                        </View>
                        <View style={style.flexRowStyle}>
                            <Text style={style.snellTextStyle} color={COLORS.communitysnellColor} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{props.item.userSnell}</Text>
                            <Text style={style.levelTextStyle} color={COLORS.communitylevelColor} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'L.V 2'}</Text>
                            <Text style={style.hrTextStyle} color={COLORS.communityHrColor} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'1h ago'}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        props.modalVisible(true)
                    }}>
                    <Image style={style.dotsImageStyle} resizeMode="contain" source={IMAGES.threedots} />
                </TouchableOpacity>
            </View>
            <Text color={COLORS.communityTextColor} fontFamily={FONT.semiBold} size={SCALE_SIZE(16)}>{props.item.title}</Text>
            <Text color={COLORS.communityTextColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{props.item.discription} </Text>
            <Text color={COLORS.communitytagColor} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{props.item.usertag}</Text>
            {
                props.item.cummunitcationImage == "" ?
                    <View />
                    :
                    <ImageBackground source={props.item.cummunitcationImage} imageStyle={{ borderRadius: 20 }} style={style.postImgStyle} />

            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SCALE_SIZE(16) }}>
                <View style={style.flexRowStyle}>
                    <View style={style.flexRowStyle}>
                        {
                            props.item.likeCount == "0" ?
                                <Image style={style.favouriteImageStyle} resizeMode="contain" source={IMAGES.favourite} />
                                :
                                <Image style={[style.favouriteImageStyle]} resizeMode="contain" source={IMAGES.favouritefill} />
                        }
                        <Text
                            style={style.textStyle}
                            color={COLORS.communitytagColor}
                            fontFamily={FONT.regular}
                            size={SCALE_SIZE(14)}>
                            {props.item.likeCount}
                        </Text>
                    </View>
                    <View style={style.flexRowStyle}>
                        {
                            props.item.msgCount == "0" ?
                                <Image style={style.messageImageStyle} resizeMode="contain" source={IMAGES.message} />
                                :
                                <Image style={style.messageImageStyle} resizeMode="contain" source={IMAGES.messagefill} />
                        }
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
        marginHorizontal: SCALE_SIZE(16),
        flex: 1.0,
        marginTop: SCALE_SIZE(8)
    },
    postImgStyle: {
        height: SCALE_SIZE(192),
        resizeMode: 'cover',
        marginTop: SCALE_SIZE(8)
    },
    userImageStyle: {
        height: SCALE_SIZE(48),
        width: SCALE_SIZE(48),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(6)
    },
    favouriteImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(24)
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
        marginLeft: SCALE_SIZE(8)
    },
    snellTextStyle: {
        alignSelf: 'center',
        backgroundColor: '#FEFAEC',
        borderRadius: SCALE_SIZE(32),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8)
    },
    levelTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: '#F1FAEB',
        borderRadius: SCALE_SIZE(32),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8)

    },
    hrTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8)
    },
    flexRowStyle: {
        flexDirection: 'row'
    }
})