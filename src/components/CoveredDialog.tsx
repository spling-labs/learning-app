import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, availableList } from "../types";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import Text from "./Text";
import Button from "./Button";

export default function CoveredDialog(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;


    interface courtStartList {
        image: any,
        title: string,
        isQuiz: boolean
    }

    const courtStartList: Array<courtStartList> = [
        {
            image: IMAGES.completed,
            title: 'Who is the course for?',
            isQuiz: false
        },
        {
            image: IMAGES.completed_unfill,
            title: 'What is rust?',
            isQuiz: false
        },
        {
            image: IMAGES.completed_unfill,
            title: 'Why rust?',
            isQuiz: false
        },
        {
            image: IMAGES.completed_unfill,
            title: 'The basic program',
            isQuiz: false
        },
        {
            image: IMAGES.quiz,
            title: 'Quiz 1',
            isQuiz: true
        },
        {
            image: IMAGES.completed_unfill,
            title: 'The basic formatting',
            isQuiz: false
        }
    ];



    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}
                style={style.modalBox}
                onRequestClose={() => { }}>
                <View style={style.itemContainer}>
                    <View style={style.content}>
                        <View style={style.scrolled}>
                            <TouchableOpacity style={style.lineStyle}
                                activeOpacity={1}
                                onPress={() => {
                                    props.onClosed()
                                }} />
                            <View style={style.headerView}>
                                <Image style={style.coveredImage} resizeMode='contain' source={IMAGES.covered} />
                                <Text
                                    style={style.txtStyle}
                                    color={COLORS.questionColor}
                                    fontFamily={FONT.black}
                                    size={SCALE_SIZE(22)}>
                                    {'What we’ll cover the following'}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        props.onClosed()
                                    }}>
                                    <Image style={style.down} resizeMode='contain' source={IMAGES.down} />
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={courtStartList}
                                showsVerticalScrollIndicator={false}
                                ListHeaderComponent={() => {
                                    return (
                                        <View style={{ height: SCALE_SIZE(24) }}></View>
                                    )
                                }}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <>
                                            <View style={style.itemView}>

                                                <View style={style.selectedView}>
                                                    <Image style={style.selectedImage} source={item.image} />
                                                </View>
                                                <Text
                                                    style={{ marginLeft: SCALE_SIZE(16), alignSelf: 'center' }}
                                                    color={COLORS.questionColor}
                                                    fontFamily={FONT.bold}
                                                    size={SCALE_SIZE(14)}>
                                                    {item.title}
                                                </Text>
                                            </View>
                                            {index + 1 != courtStartList.length &&
                                                <View style={style.devider} />
                                            }

                                        </>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    itemContainer: {
        backgroundColor: COLORS.dialog_transparent,
        flex: 1.0
    },
    content: {
        position: "absolute",
        bottom: 0,
        flex: 1,
        width: '100%',
        borderTopLeftRadius: SCALE_SIZE(20),
        borderTopRightRadius: SCALE_SIZE(20),
        backgroundColor: COLORS.white,
    },
    scrolled: {
        flex: 1,
        height: Dimensions.get('screen').height - 128
    },
    lineStyle: {
        backgroundColor: COLORS.dialog_line_coloe,
        borderRadius: SCALE_SIZE(32),
        height: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(16),
        width: SCALE_SIZE(64),
        alignSelf: 'center'
    },
    headerView: {
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.06)',
        alignItems: 'center',
    },
    coveredImage: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'center'
    },
    down: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center',
    },
    itemView: {
        marginHorizontal: SCALE_SIZE(16),
        flexDirection: 'row'
    },
    selectedView: {
        height: 28,
        width: 28,
        alignSelf: 'center',
        backgroundColor: COLORS.contentThree,
        borderRadius: 28 / 2,
        justifyContent: 'center'
    },
    selectedImage: {
        height: 26,
        width: 26,
        alignSelf: 'center',
    },
    devider: {
        width: SCALE_SIZE(2),
        height: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(32),
        backgroundColor: COLORS.contentThree,
    },
    txtStyle: {
        marginLeft: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(-4),
        flex: 1.0
    }
})



