import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text, Header, Button, ProgressSlider } from "../components";

export default function Question(props: any) {

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
        marginTop: SCALE_SIZE(8)
    }
})