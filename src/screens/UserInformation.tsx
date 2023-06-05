import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, userQuestion } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button, ProgressSlider, Input } from "../components";

//PACKAGES
import Toast from 'react-native-simple-toast';

export default function UserInformation(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [answer, setAnswer] = useState<string>('')
    const [selectedQuestionIndex, setSelectedQuetionIndex] = useState<number>(0)

    const selectedQuestion = userQuestion[selectedQuestionIndex]

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => { props.navigation.goBack() }}>
                    <Image style={styles.back} resizeMode='contain' source={IMAGES.cancel} />
                </TouchableOpacity>
            </View>
            <ProgressSlider style={styles.progressSlider} fillCount={selectedQuestionIndex + 1} totalCount={userQuestion.length} />
            <Text
                style={styles.questionText}
                color={COLORS.contentTwo}
                fontFamily={FONT.regular}
                size={SCALE_SIZE(16)}>
                {getTranslation('Step') + (selectedQuestionIndex + 1) + "/" + 3}
            </Text>
            <ScrollView style={styles.container}
                showsVerticalScrollIndicator={false}>
                <Text
                    style={styles.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation(selectedQuestion?.question)}
                </Text>
                <Input
                    style={styles.input}
                    numberOfLines={1}
                    placeholder={getTranslation(selectedQuestion?.placeholder)}
                    keyboardType={selectedQuestion?.type}
                    value={answer}
                    onChangeText={(text: string) => {
                        setAnswer(text)
                    }}
                />
            </ScrollView>
            <Button
                style={styles.btnContinue}
                backgroundColor={COLORS.primary}
                title={getTranslation('Next')}
                size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.bold}
                onPress={() => {
                    userQuestion[selectedQuestionIndex].answer = answer
                    setAnswer('')
                    if (selectedQuestionIndex + 1 == userQuestion.length) {
                        if (userQuestion[selectedQuestionIndex].answer != '') {
                            props.navigation.navigate(SCREENS.VerifyEmail.name)
                        }else {
                            Toast.show('Please enter your answer', Toast.LONG);

                        }
                    }
                    else {                    
                        if (userQuestion[selectedQuestionIndex].answer != '') {
                            setSelectedQuetionIndex(selectedQuestionIndex + 1)
                        } else {
                            Toast.show('Please enter your answer', Toast.LONG);
                        }

                    }
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1.0
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
        marginTop: SCALE_SIZE(8),
        alignSelf: 'center',
        width: Dimensions.get('window').width - 32
    },
    questionText: {
        marginHorizontal: SCALE_SIZE(20),
        marginBottom: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(8)
    },
    question: {
        marginTop: SCALE_SIZE(24),
        marginHorizontal: SCALE_SIZE(16),
    },
    input: {
        marginTop: SCALE_SIZE(24),
        marginHorizontal: SCALE_SIZE(16)
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(32),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    toastStyles: {
        fontFamily: FONT.medium,
        fontSize: SCALE_SIZE(16),
        color: COLORS.questionColor
    }
})