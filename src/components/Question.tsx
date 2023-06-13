import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Bubble } from "../components";
import { LocalizationContextType } from "../types";

export default function Question(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const item = props.selectedQuestion

    return (
        <View>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}>
                <Text
                    style={styles.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {item?.question}
                </Text>
                <Text
                    style={styles.description}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {item?.description}
                </Text>
                {item.type == 'program' &&
                    <View style={styles.programView}>
                        <Text
                            style={styles.description}
                            color={COLORS.questionColor}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(16)}>
                            {'1 fn main() {\n2 println!("Hello World!");\n3 }'}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                props.runCode()
                            }}
                            activeOpacity={1}
                            style={styles.runCode}>
                            <Text
                                color={COLORS.questionColor}
                                fontFamily={FONT.bold}
                                size={SCALE_SIZE(12)}>
                                {'Run Code'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                }                
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: 8,
    },
    question: {
        lineHeight: SCALE_SIZE(41),
    },
    description: {
        lineHeight: SCALE_SIZE(25),
        marginTop: SCALE_SIZE(8),
        marginBottom:24
    },
    programView: {
        backgroundColor: COLORS.color_F6F6F6,
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(8)
    },
    runCode: {
        paddingHorizontal: SCALE_SIZE(32),
        paddingVertical: SCALE_SIZE(8),
        backgroundColor: COLORS.warning,
        borderBottomWidth: 4,
        borderBottomColor: COLORS.warningShadow,
        marginTop: SCALE_SIZE(32),
        borderRadius: SCALE_SIZE(16),
        width: SCALE_SIZE(136)
    },
    shallView: {
        flexDirection: 'row',
    },
    maskImage: {
        width: SCALE_SIZE(16),
        height: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(8),
        alignSelf: 'center'
    },
    unselectedView: {
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(8),
        backgroundColor: COLORS.color_F6F6F6,
        flexDirection: 'row'
    },
    checkImage: {
        width: SCALE_SIZE(24),
        height: SCALE_SIZE(24),
        alignSelf: 'center'
    },
    seletedView: {
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(8),
        backgroundColor: COLORS.color_F1FAEB,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.green
    }

})