import React, { useContext } from "react";
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
import TopicChooseDialogItem from "./TopicChooseDialogItem";

const { width, height } = Dimensions.get("window");

export default function TopicChooseDialog(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    interface shortList {
        alarmImage: any,
        title: string
        checkImage: any,
        select: string

    }
    const actionList: Array<shortList> = [
        {
            alarmImage: IMAGES.rush,
            title: 'Rust',
            checkImage: IMAGES.check,
            select: 'select'
        },
        {
            alarmImage: IMAGES.rush,
            title: 'Solana',
            checkImage: IMAGES.check,
            select: 'unselect'

        },
        {
            alarmImage: IMAGES.rush,
            title: 'C#',
            checkImage: IMAGES.ic_circle_right,
            select: 'unselect'

        },
        {
            alarmImage: IMAGES.rush,
            title: 'Javascript',
            checkImage: IMAGES.ic_circle_right,
            select: 'unselect'

        },
        {
            alarmImage: IMAGES.rush,
            title: 'SQL',
            checkImage: IMAGES.check,
            select: 'select'

        },
        {
            alarmImage: IMAGES.rush,
            title: 'PHP',
            checkImage: IMAGES.ic_circle_right,
            select: 'unselect'

        },
    ];

    return (

        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.topicModalVisible}
                style={style.modalBox}
                onRequestClose={() => props.topicSetModal(false)}
            >
                <View style={{ backgroundColor: COLORS.dialog_transparent, flex: 1.0 }}>
                    <View style={style.content}>
                        <View style={style.lineStyle}></View>
                        <View style={style.topHeaderStyle}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.topicSetModal(false)
                                }}>
                                <Image style={style.headerIcon} resizeMode="contain" source={IMAGES.close} />
                            </TouchableOpacity>
                            <Text
                                style={style.titleTextStyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('topics_chosen')}
                            </Text>
                            <View style={style.headerIcon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View >
                                <FlatList
                                    data={actionList}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={3}
                                    style={style.flatStyle}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => {
                                        return <TopicChooseDialogItem props={props} item={item} />
                                    }}
                                />

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
    topHeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SCALE_SIZE(16),
    },
    headerIcon: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: SCALE_SIZE(8),
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

    flatStyle: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: SCALE_SIZE(20),
        marginTop: SCALE_SIZE(24),
        flexDirection: 'row'
    },
    titleTextStyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20)
    }
})