import React, { useContext, useEffect } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//SCREENS
import { SCREENS } from ".";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text } from "../components";

export default function StartQuiz(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate(SCREENS.Quiz.name)
        }, 2000);
    }, [])

    return (
        <ImageBackground style={styles.container} resizeMode='cover' source={IMAGES.bgCreateProfile}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.slider_unfill} />
            <View style={styles.container} />
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <Text
                    style={styles.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    align={'center'}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('quiz_title')}
                </Text>
                <Text
                    style={styles.txtDescription}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    align={'center'}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('quiz_message')}
                </Text>
                <Image resizeMode="contain" style={styles.image} source={IMAGES.learning_logo} />
            </View>
            <View style={styles.container} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    question: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(41),
        alignSelf: 'center'
    },
    image: {
        width: SCALE_SIZE(200),
        height: SCALE_SIZE(88),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(24)
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    imageBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        aspectRatio: 1.1
    },
    txtDescription: {
        marginTop: SCALE_SIZE(8),
        lineHeight: SCALE_SIZE(25)
    }
})