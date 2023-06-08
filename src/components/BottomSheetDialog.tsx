import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import Text from "./Text";
import { LocalizationContext } from "../context/LocalizationProvider";
import { LocalizationContextType } from "../types";
import BottomSheetDialogItem from "./BottomSheetDialogItem";

const { width, height } = Dimensions.get("window");

export default function BottomSheetDialog(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    interface shortList {
        userImage: any,
        userName: string
        userSelect: string,
        checkImage: any,

    }

    const shortList: Array<shortList> = [
        {
            userImage: IMAGES.recent,
            userName: getTranslation('recent'),
            userSelect: 'select',
            checkImage: IMAGES.uncheck

        },
        {
            userImage: IMAGES.popular,
            userName: getTranslation('popular'),
            userSelect: 'select',
            checkImage: IMAGES.check

        },
    ];


    const actionList: Array<shortList> = [
        {
            userImage: IMAGES.bookmark,
            userName: getTranslation('bookmark'),
            userSelect: '',
            checkImage: IMAGES.uncheck
        },
        {
            userImage: IMAGES.nointerested,
            userName: getTranslation('no_interested'),
            userSelect: '',
            checkImage: IMAGES.uncheck
        },
        {
            userImage: IMAGES.report,
            userName: getTranslation('report'),
            userSelect: '',
            checkImage: IMAGES.uncheck
        },
        {
            userImage: IMAGES.blockimahe,
            userName: getTranslation('block_this'),
            userSelect: '',
            checkImage: IMAGES.uncheck
        },
    ];

    return (

        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.item}
                style={style.modalBox}
                onRequestClose={() => props.modalVisible(false)}
            >
                <View style={{ backgroundColor: COLORS.dialog_transparent, flex: 1.0 }}>
                    <View style={style.content}>
                        <View style={style.lineStyle}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SCALE_SIZE(16) }}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.modalVisible(false)
                                }}>
                                <Image style={style.headerIcon} resizeMode="contain" source={IMAGES.close} />
                            </TouchableOpacity>
                            <Text
                                color={COLORS.black}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(16)}>
                                {getTranslation(props.modalActionVisible)}
                            </Text>
                            <View style={style.headerIcon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View >
                                {
                                    props.modalActionVisible == "actions" ?
                                        <FlatList
                                            style={{ marginBottom: SCALE_SIZE(16), marginTop: SCALE_SIZE(16) }}
                                            data={actionList}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item }) => {
                                                return <BottomSheetDialogItem props={props} item={item} />
                                            }}
                                        /> :
                                        <FlatList
                                            style={{ marginBottom: SCALE_SIZE(16), marginTop: SCALE_SIZE(16) }}
                                            data={shortList}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item }) => {
                                                return <BottomSheetDialogItem props={props} item={item} />
                                            }}
                                        />
                                }

                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        justifyContent: 'center',
    },
    headerIcon: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(24)
    },
    lineStyle: {
        backgroundColor: COLORS.dialog_line_coloe,
        borderRadius: SCALE_SIZE(32),
        height: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(16),
        width: SCALE_SIZE(64),
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginRight: SCALE_SIZE(40)

    },
    modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height,
        width,
        backgroundColor: "transparent"
    },
    content: {
        position: "absolute",
        bottom: 0,
        width,
        borderTopLeftRadius: SCALE_SIZE(20),
        borderTopRightRadius: SCALE_SIZE(20),
        backgroundColor: COLORS.white
    },
    textStyle: {
        fontSize: 22
    }
})