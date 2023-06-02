import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, learningQuestion } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button, ProgressSlider, QuestionOptions } from "../components";

export default function Learning(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [selectedQuestionIndex, setSelectedQuetionIndex] = useState<number>(0)
    const [selectedQuestionOption, setSelectedQuestionOptions] = useState<number>(0)

    const selectedQuestion = learningQuestion[selectedQuestionIndex]

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => { props.navigation.goBack() }}>
                    <Image style={styles.back} resizeMode='contain' source={IMAGES.cancel} />
                </TouchableOpacity>
                <ProgressSlider style={styles.progressSlider} fillCount={selectedQuestionIndex + 1} totalCount={learningQuestion.length} />
                <TouchableOpacity style={styles.back} onPress={() => { props.navigation.goBack() }}>
                    <Image style={styles.back} resizeMode='contain' source={IMAGES.mask} />
                </TouchableOpacity>
                <Text
                    style={styles.countText}
                    color={COLORS.primary}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(18)}>
                    {'4'}
                </Text>
            </View>
            <Text
                style={styles.questionText}
                color={COLORS.contentTwo}
                fontFamily={FONT.regular}
                size={SCALE_SIZE(16)}>
                {getTranslation('Questions') + (selectedQuestionIndex + 1) + "/" + learningQuestion.length}
            </Text>
            <ScrollView
                style={[styles.container, { marginBottom: SCALE_SIZE(16) }]}
                showsVerticalScrollIndicator={false}>
                <Text
                    style={styles.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {selectedQuestion?.question}
                </Text>
                {
                    selectedQuestion?.options.map((item: any, index: any) => {
                        return (
                            <QuestionOptions
                                title={item.title}
                                style={[selectedQuestionOption == index ? styles.selected : styles.unselected, { marginTop: index == 0 ? SCALE_SIZE(24) : SCALE_SIZE(16) }]}
                                key={index}
                                onPress={() => {
                                    setSelectedQuestionOptions(index)
                                }} />
                        )
                    })
                }
                <Text
                    style={styles.correctTxt}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('correct')}
                </Text>
                <Text
                    style={styles.hintText}
                    color={COLORS.questionColor}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('explanation')}
                    <Text
                        style={[styles.hintText, { marginLeft: SCALE_SIZE(16) }]}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('explaination_msg')}
                    </Text>
                </Text>
            </ScrollView>
            <View style={{ flexDirection: 'row', marginBottom: SCALE_SIZE(24) }}>
                <Image style={styles.logoImage} resizeMode='contain' source={IMAGES.learning} />
                {/* <View style={styles.awesomeView}>

                </View> */}
            </View>
            <Button
                style={styles.btnContinue}
                backgroundColor={COLORS.primary}
                title={getTranslation('Continue')}
                size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.semiBold}
                onPress={() => {
                    if (selectedQuestionIndex + 1 == learningQuestion.length) {

                    }
                    else {
                        setSelectedQuetionIndex(selectedQuestionIndex + 1)
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    header: {
        height: SCALE_SIZE(54),
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16)
    },
    back: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    },
    progressSlider: {
        marginHorizontal: SCALE_SIZE(16),
        alignSelf: 'center',
        flex: 1.0
    },
    countText: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(-4)
    },
    questionText: {
        marginHorizontal: SCALE_SIZE(56),
        marginTop: SCALE_SIZE(-16),
        marginBottom: SCALE_SIZE(8)
    },
    question: {
        marginTop: SCALE_SIZE(24),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(41),
    },
    selected: {
        backgroundColor: COLORS.backgroundColor,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        borderRightWidth: 1,
        borderTopColor: COLORS.primary,
        borderLeftColor: COLORS.primary,
        borderRightColor: COLORS.primary,
        borderBottomColor: COLORS.borderShadow,
    },
    unselected: {
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        borderRightWidth: 1,
        borderTopColor: COLORS.contentThree,
        borderLeftColor: COLORS.contentThree,
        borderRightColor: COLORS.contentThree,
        borderBottomColor: COLORS.contentThree,
    },
    correctTxt: {
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(24)
    },
    hintText: {
        marginTop: SCALE_SIZE(8),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(25),
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    logoImage: {
        width: SCALE_SIZE(88),
        height: SCALE_SIZE(48),
        marginHorizontal: SCALE_SIZE(16),
    },
    awesomeView: {
        paddingHorizontal: SCALE_SIZE(16),
        borderTopLeftRadius: SCALE_SIZE(8),
        borderTopRightRadius: SCALE_SIZE(8),
        borderBottomLeftRadius: SCALE_SIZE(0),
        borderBottomRightRadius: SCALE_SIZE(8),
        elevation: 1,
        marginTop: -56
    }
})