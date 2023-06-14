import React, { useContext } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";

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

export default function CreateProfile(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.slider_unfill} />
            <ImageBackground style={styles.container}
                source={IMAGES.bgCreateProfile}
                resizeMode="stretch">
                <>
                    <View style={styles.centerView}>
                        <Text
                            style={styles.title}
                            color={COLORS.questionColor}
                            align={'center'}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(24)}>
                            {getTranslation('create_account_msg')}
                        </Text>
                        <Button
                            style={styles.btnSignEmail}
                            backgroundColor={COLORS.white}
                            title={getTranslation('sign_up_with_emails')}
                            size={SCALE_SIZE(16)}
                            color={COLORS.questionColor}
                            family={FONT.bold}
                            onPress={() => {
                                props.navigation.navigate(SCREENS.UserInformation.name)
                            }}
                        />
                        <Text
                            style={styles.orText}
                            color={COLORS.questionColor}
                            align={'center'}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('or')}
                        </Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.btnPhantom}>
                            <Image style={styles.imgPhantom} resizeMode="contain" source={IMAGES.phantom} />
                            <Text
                                style={styles.txtBtnText}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('sign_up_with_phantom')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.btnSolflare}>
                            <Image style={styles.imgPhantom} resizeMode="contain" source={IMAGES.solflare} />
                            <Text
                                style={styles.txtBtnText}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('sign_up_with_solflare')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.btnSolflare, { backgroundColor: COLORS.color_53ADF0, borderBottomColor: COLORS.color_398DCC }]}>
                            <Image style={styles.imgPhantom} resizeMode="contain" source={IMAGES.grow} />
                            <Text
                                style={styles.txtBtnText}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('sign_up_with_grow')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
                <Text
                    style={{ marginBottom: SCALE_SIZE(24) }}
                    color={COLORS.contentTwo}
                    align={'center'}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'Agree with terms & Conditions'}
                </Text>

            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    centerView: {
        justifyContent: 'center',
        flex: 1.0
    },
    title: {
        lineHeight: SCALE_SIZE(41)
    },
    btnSignEmail: {
        marginTop: SCALE_SIZE(32),
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.color_9DA499,
    },
    orText: {
        marginVertical: SCALE_SIZE(16),
        alignSelf: 'center'
    },
    btnSolflare: {
        marginTop: SCALE_SIZE(8),
        borderRadius: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        justifyContent: 'center',
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.blueShedow,
        marginBottom: SCALE_SIZE(16),
        flexDirection: 'row',
        backgroundColor: COLORS.blue
    },
    btnPhantom: {
        borderRadius: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        marginBottom: SCALE_SIZE(16),
        flexDirection: 'row'
    },
    imgPhantom: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'center'
    },
    txtBtnText: {
        marginHorizontal: SCALE_SIZE(8),
        alignSelf: 'center'
    }
})
