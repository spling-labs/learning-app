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

export default function VerifyEmail(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor={'transparent'} />
            <ImageBackground style={styles.container}
                source={IMAGES.bgCreateProfile}
                resizeMode="cover">
                <View style={styles.container}></View>
                <View style={[styles.container, { justifyContent: 'center' }]}>
                    <Image style={styles.emailImage} resizeMode="contain" source={IMAGES.email} />
                    <Text
                        style={styles.title}
                        color={COLORS.questionColor}
                        align={'center'}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(32)}>
                        {getTranslation('check_your_mail')}
                    </Text>
                    {/* <View style={styles.roundedView}>
                        <Text
                            color={COLORS.contentTwo}
                            align={'center'}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('email_message')}
                        </Text>
                    </View>
                    <Image style={styles.learningImage} resizeMode="contain" source={IMAGES.learning} /> */}
                </View>
                <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: SCALE_SIZE(16),
                        marginBottom: SCALE_SIZE(32)
                    }}>
                        <Image style={styles.newImage} resizeMode="contain" source={IMAGES.learning} />
                        <View style={styles.descriptionItem}>
                            <Text
                                style={{ lineHeight: 19 }}
                                color={COLORS.contentTwo}
                                align={'center'}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('email_message')}
                            </Text>
                        </View>
                    </View>
                    <Button
                        style={styles.btnContinue}
                        backgroundColor={COLORS.primary}
                        title={getTranslation('check_your_inbox')}
                        size={SCALE_SIZE(16)}
                        color={COLORS.white}
                        family={FONT.bold}
                        onPress={() => {
                            props.navigation.navigate(SCREENS.SignUpSuccess.name)
                        }}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        flexDirection: 'column',
    },
    emailImage: {
        height: SCALE_SIZE(144),
        width: SCALE_SIZE(184),
        alignSelf: 'center'
    },
    title: {
        lineHeight: SCALE_SIZE(41),
        marginTop: SCALE_SIZE(16)
    },
    roundedView: {
        marginTop: SCALE_SIZE(48),
        borderWidth: 1,
        borderColor: '#E3C0AC',
        borderTopLeftRadius: SCALE_SIZE(8),
        borderBottomRightRadius: SCALE_SIZE(8),
        borderBottomLeftRadius: SCALE_SIZE(0),
        borderTopRightRadius: SCALE_SIZE(8),
        alignSelf: 'center',
        marginEnd: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
    },
    learningImage: {
        marginLeft: SCALE_SIZE(16),
        height: SCALE_SIZE(46),
        width: SCALE_SIZE(96),
        marginTop: SCALE_SIZE(4)
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    newImage: {
        width: 96,
        height: 56
    },
    descriptionItem: {
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        borderTopLeftRadius: SCALE_SIZE(8),
        borderTopRightRadius: SCALE_SIZE(8),
        borderBottomLeftRadius: SCALE_SIZE(0),
        borderBottomRightRadius: SCALE_SIZE(8),
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#E3C0AC',
        bottom: SCALE_SIZE(80),
        left: SCALE_SIZE(88)
    },
})