import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground, Alert, ScrollView, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, quiz } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//SCREENS
import { SCREENS } from ".";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Header, Button, Bubble, QuizModel } from "../components";

export default function Quiz(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [selectedQuestionIndex, setSelectedQuetionIndex] = useState<number>(0)
    const [selectedQuizIndex, setSelectedQuizIndex] = useState<number>(-1)
    const [isSelectedCorrect, setSelectedCorrect] = useState<boolean>(false)

    const [quizModel, setQuizModel] = useState<boolean>(false)

    const selectedQuestion = quiz[selectedQuestionIndex]

    useEffect(() => {
        checkAnswer()
        getBubbleTitle()
    }, [selectedQuizIndex])

    function checkAnswer() {
        if (selectedQuizIndex >= 0) {
            const isCorrect = selectedQuestion.options[selectedQuizIndex].option == selectedQuestion.correct
            setSelectedCorrect(isCorrect)
        }
    }

    function getBubbleTitle() {
        if (selectedQuizIndex >= 0) {
            const isCorrect = selectedQuestion.options[selectedQuizIndex].option == selectedQuestion.correct
            if (isCorrect) {
                return getTranslation('bubble_msg_two')
            }
            else {
                return getTranslation('bubble_msg_three')
            }
        }
        else {
            return getTranslation('bubble_msg_one')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <Header
                type={1}
                mask
                mask_number={'180'}
                title='Introduction'
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <View style={styles.detailsView}>
                <View>
                    <ScrollView style={styles.scrolledStyle}
                        showsVerticalScrollIndicator={false}>
                        <Text
                            style={styles.description}
                            color={COLORS.contentTwo}
                            fontFamily={FONT.semiBold}
                            size={SCALE_SIZE(16)}>
                            {'Quiz ' + (selectedQuestionIndex + 1) + " of " + quiz.length}
                        </Text>
                        <Text
                            style={[styles.question, { marginTop: SCALE_SIZE(0) }]}
                            color={COLORS.questionColor}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(20)}>
                            {selectedQuestion.question}
                        </Text>
                        <View style={styles.shallView}>
                            <Text
                                color={COLORS.contentTwo}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(12)}>
                                {getTranslation('correct_answer')}
                            </Text>
                            <Image style={styles.maskImage} resizeMode="contain" source={IMAGES.mask} />
                            <Text
                                style={{ marginLeft: SCALE_SIZE(4) }}
                                color={COLORS.contentTwo}
                                fontFamily={FONT.bold}
                                size={SCALE_SIZE(12)}>
                                {'4 Snell'}
                            </Text>
                        </View>
                        {selectedQuestion.options.map((item: any, index: number) => {
                            const correctAnswer = item.option == selectedQuestion?.correct
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        setSelectedQuizIndex(index)
                                    }}
                                    activeOpacity={1}
                                    style={selectedQuizIndex == index ?
                                        (isSelectedCorrect ?
                                            [styles.seletedView, { marginTop: index == 0 ? SCALE_SIZE(24) : SCALE_SIZE(8) }]
                                            :
                                            [styles.incorrectView, { marginTop: index == 0 ? SCALE_SIZE(24) : SCALE_SIZE(8) }]
                                        )
                                        :
                                        correctAnswer && selectedQuizIndex >= 0 ?
                                            [styles.seletedView, { marginTop: index == 0 ? SCALE_SIZE(24) : SCALE_SIZE(8) }]
                                            :
                                            [styles.unselectedView, { marginTop: index == 0 ? SCALE_SIZE(24) : SCALE_SIZE(8) }]}>
                                    <Image style={styles.checkImage} resizeMode="contain"
                                        source={selectedQuizIndex == index ? correctAnswer ? IMAGES.check : IMAGES.wrong : (correctAnswer && selectedQuizIndex >= 0) ? IMAGES.check : IMAGES.unfill} />
                                    <Text
                                        style={{ marginLeft: SCALE_SIZE(16), marginTop: SCALE_SIZE(-1.2) }}
                                        color={selectedQuizIndex == index ? isSelectedCorrect ? COLORS.green : COLORS.red : (correctAnswer && selectedQuizIndex >= 0) ? COLORS.green : COLORS.questionColor}
                                        fontFamily={FONT.black}
                                        size={SCALE_SIZE(14)}>
                                        {item?.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                        {selectedQuizIndex > 0 &&
                            <>
                                <Text
                                    style={{ marginTop: SCALE_SIZE(24) }}
                                    color={isSelectedCorrect ? COLORS.green : COLORS.red}
                                    fontFamily={FONT.black}
                                    size={SCALE_SIZE(16)}>
                                    {isSelectedCorrect ? getTranslation('correct_quiz') : getTranslation('incorrect')}
                                </Text>
                                <Text
                                    style={{ marginTop: SCALE_SIZE(4) }}
                                    color={COLORS.contentTwo}
                                    fontFamily={FONT.semiBold}
                                    size={SCALE_SIZE(14)}>
                                    {isSelectedCorrect ? getTranslation('correct_msg') : getTranslation('incorrect_msg')}
                                </Text>
                            </>
                        }
                        <Bubble type={2} title={getBubbleTitle()} />
                        <View style={{ height: SCALE_SIZE(32) }} />
                    </ScrollView>
                </View>
            </View>
            {selectedQuizIndex == -1 ?
                <Button
                    style={[styles.btnContinue, {
                        borderBottomColor: selectedQuizIndex != -1 ? COLORS.drop_shadow : COLORS.color_D5D3D3,
                    }]}
                    backgroundColor={selectedQuizIndex != -1 ? COLORS.primary : COLORS.contentThree}
                    title={getTranslation('Continue')}
                    size={SCALE_SIZE(16)}
                    color={selectedQuizIndex != -1 ? COLORS.white : COLORS.contentColor}
                    family={FONT.bold}
                    onPress={() => {

                    }}
                />
                :
                isSelectedCorrect ?
                    <Button
                        style={[styles.btnContinue, {
                            borderBottomColor: selectedQuizIndex != -1 ? COLORS.drop_shadow : COLORS.color_D5D3D3,
                        }]}
                        backgroundColor={selectedQuizIndex != -1 ? COLORS.primary : COLORS.contentThree}
                        title={selectedQuestionIndex + 1 == quiz.length ? getTranslation('check_answer') : getTranslation('Continue')}
                        size={SCALE_SIZE(16)}
                        color={selectedQuizIndex != -1 ? COLORS.white : COLORS.contentColor}
                        family={FONT.bold}
                        onPress={() => {
                            if (selectedQuestionIndex + 1 == quiz.length) {
                                setQuizModel(true)
                            }
                            else {
                                setSelectedQuizIndex(-1)
                                setSelectedCorrect(false)
                                setSelectedQuetionIndex(selectedQuestionIndex + 1)
                            }
                        }}
                    />
                    :
                    <View style={styles.viewBottomView}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.skipButton, { marginRight: SCALE_SIZE(8) }]}
                            onPress={() => {
                                if (selectedQuestionIndex + 1 == quiz.length) {
                                    setQuizModel(true)
                                }
                                else {
                                    setSelectedQuizIndex(-1)
                                    setSelectedCorrect(false)
                                    setSelectedQuetionIndex(selectedQuestionIndex + 1)
                                }

                            }}>
                            <Text
                                style={{ alignSelf: 'center' }}
                                color={COLORS.contentTwo}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('skip')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.btnTryAgain, { marginLeft: SCALE_SIZE(8) }]}
                            onPress={() => {
                                setSelectedQuizIndex(-1)
                                setSelectedCorrect(false)
                                setSelectedQuetionIndex(selectedQuestionIndex)
                            }}>
                            <Text
                                style={{ alignSelf: 'center' }}
                                color={COLORS.white}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('try_again')}
                            </Text>
                        </TouchableOpacity>
                    </View>
            }
            <QuizModel
                isVisible={quizModel}
                retackQuiz={()=>{
                    setQuizModel(false)
                    setSelectedQuizIndex(-1)
                    setSelectedCorrect(false)
                    setSelectedQuetionIndex(0)
                }}
                skip={()=>{
                    props.navigation.navigate(SCREENS.QuizFinish.name)
                }}
                onClose={() => {
                    setQuizModel(false)
                }} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.color_F6F6F6
    },
    detailsView: {
        marginTop: SCALE_SIZE(16),
        flex: 1.0
    },
    bottomView: {
        flexDirection: 'column',
        backgroundColor: COLORS.color_F6F6F6
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        marginBottom: SCALE_SIZE(24)
    },
    question: {
        lineHeight: SCALE_SIZE(41),
    },
    description: {
        lineHeight: SCALE_SIZE(25),
        marginTop: SCALE_SIZE(8)
    },
    scrolledStyle: {
        marginHorizontal: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: 8,
        marginBottom: SCALE_SIZE(16)
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
    },
    incorrectView: {
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(8),
        backgroundColor: '#FDEEEE',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#F5ACA9'
    },
    viewBottomView: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(24),
        flexDirection: 'row',
    },
    skipButton: {
        flex: 1.0,
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.skipShadow,
        backgroundColor: COLORS.skipBackground
    },
    btnTryAgain: {
        flex: 1.0,
        paddingVertical: SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        backgroundColor: COLORS.primary
    }
})