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

const { width, height } = Dimensions.get("window");

export default function MyCourseDialog(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    interface shortList {
        title: string
    }
    const actionList: Array<shortList> = [
        {
            title: 'Rust'
        },
        {
            title: 'Rust'
        },
        {
            title: 'Rust'
        },
        {
            title: 'Rust'

        }
    ];

    return (

        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                style={style.modalBox}
                onRequestClose={() => props.setModal(false)}
            >
                <View style={{ backgroundColor: COLORS.dialog_transparent, flex: 1.0 }}>
                    <View style={style.content}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={style.lineStyle}
                            onPress={() =>
                                props.setModal(false)
                            }>
                        </TouchableOpacity>
                        <View style={style.topHeaderStyle}>
                            <Text
                                style={style.titleTextStyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('my_course')}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View >
                                <FlatList
                                    data={actionList}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={style.flatStyle}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={style.itemViewStyle}>
                                                <View style={style.imageViewStyle}>
                                                    <Image style={style.alamrImageStyle} resizeMode="contain" source={IMAGES.rush} />
                                                </View>

                                                <Text
                                                    style={style.textStyle}
                                                    color={COLORS.questionColor}
                                                    fontFamily={FONT.black}
                                                    size={SCALE_SIZE(16)}>
                                                    {item.title}
                                                </Text>

                                            </View>
                                        )
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
        marginLeft: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        flexDirection: 'row'
    },
    titleTextStyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20),
        marginLeft: SCALE_SIZE(16)
    },
    itemViewStyle: {
        backgroundColor: '#FFE7DA',
        borderRadius: SCALE_SIZE(12),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
        marginRight: SCALE_SIZE(24),
        borderBottomColor: COLORS.contentThree,
        borderBottomWidth: 4
    },
    textStyle: {
        marginTop: SCALE_SIZE(-8),
        marginBottom: SCALE_SIZE(16),
        alignSelf: 'center',
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(24)
    },
    imageViewStyle: {
        height: SCALE_SIZE(64),
        width: SCALE_SIZE(64),
        borderRadius: 64 / 2,
        backgroundColor: COLORS.color_E7E3E2,
        marginHorizontal: SCALE_SIZE(24),
        marginVertical: SCALE_SIZE(16),
        borderColor: COLORS.contentThree,
        borderBottomColor: COLORS.image_shadow,
        borderBottomWidth: 4,
        justifyContent: 'center'
    },
    alamrImageStyle: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        alignSelf: 'center',
    },
})