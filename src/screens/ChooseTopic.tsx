import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, Dimensions, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//SCREENS
import { SCREENS } from ".";

//TYPES
import { LocalizationContextType, question } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button, ProgressSlider, QuestionOptions } from "../components";

export default function ChooseTopic(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [selectedQuestionIndex, setSelectedQuetionIndex] = useState<number>(0)
    const [selectedQuestionBoxes, setSelectedQuestionBoxes] = useState<number>(0)
    const [selectedQuestionOptions, setSelectedQuestionOptions] = useState<number>(0)
    
    const selectedQuestion = question[selectedQuestionIndex]

    return (
        <View style={style.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <View style={style.header}>
                <TouchableOpacity style={style.back} onPress={() => { props.navigation.goBack() }}>
                    <Image style={style.back} resizeMode='contain' source={IMAGES.back} />
                </TouchableOpacity>
                <ProgressSlider style={style.progressSlider} fillCount={selectedQuestionIndex + 1} totalCount={question.length} />
            </View>
            <ScrollView
                style={[style.container]}
                showsVerticalScrollIndicator={false}>
                <Text
                    style={style.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {selectedQuestion?.question}
                </Text>
                <Text
                    style={style.descripation}
                    color={COLORS.contentColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {selectedQuestion?.description}
                </Text>
                {selectedQuestion?.type == 'box' ?
                    <View style={{ flexDirection: 'row', marginRight: SCALE_SIZE(16), flexWrap: 'wrap' }}>
                        {
                            selectedQuestion?.options.map((item: any, index: number) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={[style.boxes]}
                                        onPress={() => {
                                            setSelectedQuestionBoxes(index)
                                        }}>
                                        <View style={selectedQuestionBoxes == index ? [style.boxSelected] : [style.unSelected]}>
                                            <Image resizeMode='contain' style={style.image} source={item.image} />
                                            <Text
                                                style={style.txtTitle}
                                                color={selectedQuestionBoxes == index ? COLORS.primary : COLORS.black}
                                                fontFamily={FONT.black}
                                                size={SCALE_SIZE(16)}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    :
                    <>
                        {
                            selectedQuestion?.options.map((item: any, index: any) => {
                                return (
                                    <QuestionOptions
                                        title={item.title}
                                        style={[selectedQuestionOptions == index ? style.selected : style.unselected, { marginTop: index == 0 ? SCALE_SIZE(24) : SCALE_SIZE(16) }]}
                                        key={index}
                                        onPress={() => {
                                            setSelectedQuestionOptions(index)
                                        }} />
                                )
                            })
                        }
                    </>
                }
            </ScrollView >
            <Button
                style={style.btnContinue}
                backgroundColor={COLORS.primary}
                title={getTranslation('Continue')}
                size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.bold}
                onPress={() => {
                    if (selectedQuestionIndex + 1 == question.length) {
                        props.navigation.navigate(SCREENS.Success.name)
                    }
                    else {
                        setSelectedQuetionIndex(selectedQuestionIndex + 1)
                    }
                }}
            />
        </View >
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    header: {
        height: SCALE_SIZE(54),
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16)
    },
    progressSlider: {
        marginHorizontal: SCALE_SIZE(16),
        alignSelf: 'center',
        flex: 1.0
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    descripation: {
        marginTop: SCALE_SIZE(4),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(25),
    },
    question: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(41),
    },
    boxes: {
        flexDirection: 'row',
        width: (Dimensions.get('window').width - SCALE_SIZE(49)) / 2,
        marginTop: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(16)
    },
    unSelected: {
        flexDirection: 'column',
        paddingVertical: SCALE_SIZE(32),
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        borderRightWidth: 1,
        borderRadius: SCALE_SIZE(16),
        flex: 1.0,
        borderTopColor: COLORS.contentThree,
        borderLeftColor: COLORS.contentThree,
        borderRightColor: COLORS.contentThree,
        borderBottomColor: COLORS.contentThree,
    },
    boxSelected: {
        flexDirection: 'column',
        paddingVertical: SCALE_SIZE(32),
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        backgroundColor: COLORS.backgroundColor,
        borderRightWidth: 1,
        borderRadius: SCALE_SIZE(16),
        flex: 1.0,
        borderTopColor: COLORS.primary,
        borderLeftColor: COLORS.primary,
        borderRightColor: COLORS.primary,
        borderBottomColor: COLORS.borderShadow,
    },
    image: {
        width: SCALE_SIZE(48),
        height: SCALE_SIZE(40),
        alignSelf: 'center'
    },
    txtTitle: {
        textAlign: 'center',
        marginTop: SCALE_SIZE(8),
        alignSelf: 'center'
    },
    back: {
        height: SCALE_SIZE(30),
        width: SCALE_SIZE(30),
        alignSelf: 'center'
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
    }
})