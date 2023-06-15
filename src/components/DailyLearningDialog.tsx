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
import DailyLearningDialogItem from "./DailyLearningDialogItem";

const { width, height } = Dimensions.get("window");

export default function DailyLearningDialog(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    interface shortList {
        alarmImage: any,
        title: string
        disc: string,
        userSelect: string,
        checkImage: any,

    }
    const actionList: Array<shortList> = [
        {
            alarmImage: IMAGES.ic_alarm,
            title: '10 Min Daily',
            disc: 'Lite learner',
            userSelect: 'unSelect',
            checkImage: IMAGES.ic_circle_right
        },
        {
            alarmImage: IMAGES.ic_alarm,
            title: '30 Min Daily',
            disc: 'Serious Learner',
            userSelect: 'select',
            checkImage: IMAGES.check
        },
        {
            alarmImage: IMAGES.ic_alarm,
            title: '60 Min Daily',
            disc: 'Super Hard',
            userSelect: 'unSelect',
            checkImage: IMAGES.ic_circle_right
        },
        {
            alarmImage: IMAGES.ic_alarm,
            title: '90 Min Daily',
            disc: 'Extra Dedicated',
            userSelect: 'unSelect',
            checkImage: IMAGES.ic_circle_right
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
                        <View style={style.topHeaderStyle}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.modalVisible(false)
                                }}>
                                <Image style={style.headerIcon} resizeMode="contain" source={IMAGES.close} />
                            </TouchableOpacity>
                            <Text
                                style={style.titleTextStyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('daily_goal')}
                            </Text>
                            <View style={style.headerIcon} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View >
                                <FlatList
                                    style={{ marginBottom: SCALE_SIZE(16), marginTop: SCALE_SIZE(24) }}
                                    data={actionList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => {
                                        return <DailyLearningDialogItem props={props} item={item} />
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
    },
    titleTextStyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20)
    }
})