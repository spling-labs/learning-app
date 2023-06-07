import React, { useContext } from "react";
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
import { Text, Button } from "../components";

export default function StartLearning(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <ImageBackground style={styles.container} resizeMode='stretch' source={IMAGES.bgCreateProfile}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.slider_unfill} />           
            <View style={styles.container} />
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <Text
                    style={styles.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    align={'center'}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('learning_msg')}
                </Text>
                <Image resizeMode="contain" style={styles.image} source={IMAGES.learning_logo} />
            </View>
            <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                <Button
                    style={styles.btnContinue}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('start_learning')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.Learning.name)
                    }}
                />
            </View>
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
    }
})