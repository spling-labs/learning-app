import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, SafeAreaView, FlatList, Platform, TouchableOpacity, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, lactures } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Header, Button, ProgressSlider, Question, ExecutionModel, CoveredDialog } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";

export default function LactureDetails(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [selectedQuestionIndex, setSelectedQuetionIndex] = useState<number>(0)
    const [runCode, setRunCode] = useState<boolean>(false)
    const [openCoveredOption, setOpenCoveredOption] = useState<boolean>(false)

    const selectedQuestion = lactures[0].lactures[selectedQuestionIndex]

    useFocusEffect(() => {
        if (Platform.OS == 'android') {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor(runCode ? 'rgba(59, 66, 74, 0.33)' : COLORS.white);
            StatusBar.setTranslucent(false);
        }
    })

    return (
        <>
            <View style={styles.container}>
                <Header
                    type={1}
                    mask
                    mask_number={'180'}
                    title='Introduction'
                    onBackPress={() => {
                        props.navigation.goBack()
                    }} />
                <ProgressSlider
                    type={2}
                    style={styles.progressSlider}
                    fillCount={selectedQuestionIndex + 1}
                    totalCount={lactures[0].lactures.length} />
                <Text
                    style={styles.txtStyle}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(14)}>
                    {getTranslation('Lesson') + (selectedQuestionIndex + 1) + "/" + lactures[0].lactures.length}
                </Text>
                <View style={styles.detailsView}>
                    <Question
                        type={1}
                        selectedQuestion={selectedQuestion}
                        runCode={() => {
                            setRunCode(true)
                        }} />
                </View>
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity
                    style={{
                        height: SCALE_SIZE(70),
                        width: SCALE_SIZE(70),
                    }}
                    onPress={() => {
                        setOpenCoveredOption(true)
                    }}>
                    <Image style={styles.frameImage} resizeMode="contain" source={IMAGES.frame} />
                </TouchableOpacity>
                <Button
                    style={styles.btnContinue}
                    backgroundColor={COLORS.primary}
                    title={lactures[0].lactures[selectedQuestionIndex + 1]?.question ? getTranslation('new_next') + lactures[0].lactures[selectedQuestionIndex + 1]?.question : getTranslation('new_next') + 'Quiz'}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        if (selectedQuestionIndex + 1 == lactures[0].lactures.length) {
                            props.navigation.navigate(SCREENS.StartQuiz.name)
                        }
                        else {
                            setSelectedQuetionIndex(selectedQuestionIndex + 1)
                        }
                    }}
                />
            </View>
            <ExecutionModel
                isvisible={runCode}
                onClose={() => {
                    setRunCode(false)
                }} />
            <CoveredDialog
                isVisible={openCoveredOption}
                onClosed={() => {
                    setOpenCoveredOption(false)
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.color_F6F6F6
    },
    progressSlider: {
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(24)
    },
    txtStyle: {
        marginHorizontal: SCALE_SIZE(16),
    },
    detailsView: {
        marginTop: SCALE_SIZE(16),
        flex: 1.0,
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        marginBottom: SCALE_SIZE(24)
    },
    bottomView: {
        flexDirection: 'column',
        backgroundColor: COLORS.color_F6F6F6
    },
    frameImage: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        marginHorizontal: SCALE_SIZE(16),
        marginVertical: SCALE_SIZE(16)
    }

})