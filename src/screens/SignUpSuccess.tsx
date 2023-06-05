import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button } from "../components";

export default function SignUpSuccess(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <ImageBackground style={styles.container}
                source={IMAGES.backgroundWhite}
                resizeMode="stretch">
                <View style={styles.container} />
                <View style={[styles.container, { justifyContent: 'center' }]}>
                    <Image style={styles.successImage} resizeMode="contain" source={IMAGES.congrates} />
                    <Text
                        style={styles.title}
                        color={COLORS.questionColor}
                        align={'center'}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(32)}>
                        {getTranslation('message')}
                    </Text>
                    <Text
                        style={styles.description}
                        color={COLORS.contentTwo}
                        align={'center'}
                        fontFamily={FONT.medium}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('message_description')}
                    </Text>
                </View>
                <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                    <Button
                        style={styles.btnCreateProfile}
                        backgroundColor={COLORS.primary}
                        title={getTranslation('go_to_course_modules')}
                        size={SCALE_SIZE(16)}
                        color={COLORS.white}
                        family={FONT.bold}
                        onPress={() => {
                        }}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    successImage: {
        height: SCALE_SIZE(104),
        width: SCALE_SIZE(104),
        alignSelf: 'center'
    },
    title: {
        marginTop: SCALE_SIZE(8),
        lineHeight: 43
    },
    description: {
        marginTop: SCALE_SIZE(4),
        lineHeight: 22
    },
    btnCreateProfile: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        marginBottom: SCALE_SIZE(16)
    },
})