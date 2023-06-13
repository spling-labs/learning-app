import React, { useContext, useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import Text from "./Text";
import { LocalizationContext } from "../context/LocalizationProvider";
import { LocalizationContextType, availableList } from "../types";
import Button from "./Button";

const { width, height } = Dimensions.get("window");

export default function AvaialbeCoursesBottomDialog(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    interface courtStartList {
        image: any,
        title: string

    }

    const courtStartList: Array<courtStartList> = [
        {
            image: "",
            title: getTranslation('getting_started')
        },
        {
            image: IMAGES.lactureLock,
            title: getTranslation("basic_structure")
        },
        {
            image: IMAGES.lactureLock,
            title: getTranslation('variables')
        },
        {
            image: IMAGES.lactureLock,
            title: getTranslation('data_types')
        },
        {
            image: IMAGES.lactureLock,
            title: getTranslation('operators')
        },
        {
            image: IMAGES.lactureLock,
            title: getTranslation('conditional_expressions')
        }
    ];

    return (

        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.item}
                style={style.modalBox}
                onRequestClose={() => props.modalVisible(false)}
            >
                <View style={style.itemContainer}>
                    <View style={style.content}>
                        <ScrollView
                            style={style.scrolled}
                            showsVerticalScrollIndicator={false}>
                            <View>
                                <View style={style.lineStyle} />
                                <Text
                                    style={{ marginTop: SCALE_SIZE(16) }}
                                    color={COLORS.questionColor}
                                    fontFamily={FONT.black}
                                    size={SCALE_SIZE(22)}>
                                    {'Rust for Begginers'}
                                </Text>
                                <Text
                                    color={COLORS.contentTwo}
                                    fontFamily={FONT.medium}
                                    size={SCALE_SIZE(14)}>
                                    {'66 Lessons'}
                                </Text>
                                <Text
                                    style={{ marginTop: SCALE_SIZE(16) }}
                                    color={COLORS.questionColor}
                                    fontFamily={FONT.black}
                                    size={SCALE_SIZE(16)}>
                                    {getTranslation('what_learn')}
                                </Text>
                                <Text
                                    color={COLORS.contentTwo}
                                    fontFamily={FONT.medium}
                                    size={SCALE_SIZE(14)}>
                                    {getTranslation('Learn_modern')}
                                </Text>
                                <FlatList
                                    scrollEnabled={false}
                                    style={{ marginBottom: SCALE_SIZE(16) }}
                                    data={availableList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View style={style.ViewStyle}>
                                                <Image style={style.IconStyle} resizeMode="contain" source={IMAGES.ic_right} />
                                                <View>
                                                    <Text
                                                        style={style.textStyle}
                                                        color={COLORS.questionColor}
                                                        fontFamily={FONT.bold}
                                                        size={SCALE_SIZE(14)}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                                <Text
                                    style={{ marginTop: SCALE_SIZE(8) }}
                                    color={COLORS.questionColor}
                                    fontFamily={FONT.black}
                                    size={SCALE_SIZE(16)}>
                                    {getTranslation('course_summary')}
                                </Text>
                                <Text
                                    style={{ marginTop: SCALE_SIZE(8) }}
                                    color={COLORS.contentColor}
                                    fontFamily={FONT.regular}
                                    size={SCALE_SIZE(14)}>
                                    {getTranslation('rust_does')}
                                </Text>
                                <FlatList
                                    scrollEnabled={false}
                                    style={{ marginBottom: SCALE_SIZE(16) }}
                                    data={courtStartList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={lessonsItemView}
                                />
                                <Button
                                    style={style.btnContinue}
                                    backgroundColor={COLORS.primary}
                                    title={getTranslation('enroll_now')}
                                    size={SCALE_SIZE(16)}
                                    color={COLORS.white}
                                    family={FONT.bold}
                                    onPress={() => {

                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal >
        </View>
    )
}

const lessonsItemView = (props: any) => {

    return (
        <View style={style.lessonsViewStyle}>
            <Text
                style={style.textStyle}
                color={COLORS.questionColor}
                fontFamily={FONT.black}
                size={SCALE_SIZE(16)}>
                {props.item.title}
            </Text>
            {
                props.item.image == "" ?

                    <View
                        style={style.readTextStyle}>
                        <Text
                            style={{marginTop:-2}}
                            color={COLORS.questionColor}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(12)}>
                            {"Read First Lesson"}
                        </Text>
                    </View>
                    :
                    <Image style={style.lockIconStyle} resizeMode="contain" source={props.item.image} />

            }

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        justifyContent: 'center',
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        marginBottom: SCALE_SIZE(16)
    },
    ViewStyle: {
        flexDirection: 'row',
        marginTop: SCALE_SIZE(8)
    },
    IconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(24),
        marginTop: SCALE_SIZE(8)
    },
    lockIconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginRight: SCALE_SIZE(16)
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
        backgroundColor: "transparent"
    },
    content: {
        position: "absolute",
        bottom: 0,
        flex: 1,
        width,
        borderTopLeftRadius: SCALE_SIZE(20),
        borderTopRightRadius: SCALE_SIZE(20),
        backgroundColor: COLORS.white,
        paddingHorizontal: SCALE_SIZE(16)
    },
    textStyle: {
        marginLeft: SCALE_SIZE(8),
        flex:1.0,
        alignSelf:'center'
    },
    lessonsViewStyle: {
        backgroundColor: COLORS.color_F6F6F6,
        borderRadius: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(16),
        paddingHorizontal:SCALE_SIZE(16),
        paddingVertical:SCALE_SIZE(16),
        flexDirection: "row",
    },
    readTextStyle: {
        backgroundColor: '#F7CA45',
        borderRadius: SCALE_SIZE(12),
        paddingHorizontal: SCALE_SIZE(32),
        height: SCALE_SIZE(32),
        marginRight: SCALE_SIZE(8),
        borderBottomWidth: 4,
        paddingVertical: SCALE_SIZE(4),
        borderBottomColor: '#BEB184',
    },
    itemContainer: {
        backgroundColor: COLORS.dialog_transparent,
        flex: 1.0
    },
    scrolled: {
        flex: 1,
        height: Dimensions.get('screen').height - 128
    }
})