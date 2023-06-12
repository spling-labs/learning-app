import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";

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


export default function CongratulationScreen(props: any) {

    const { setI18nConfig, getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <ImageBackground style={styles.container}
            source={IMAGES.backgroundWhite}
            resizeMode="cover">
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <View style={styles.container}>

            </View>
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <Text
                    style={styles.title}
                    color={COLORS.questionColor}
                    align={'center'}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('congrates_msg')}
                </Text>
                <Text
                    style={styles.description}
                    color={COLORS.contentTwo}
                    align={'center'}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('congrates_des')}
                </Text>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={styles.imageOne}
                        source={IMAGES.roundOne}>
                        <Image style={styles.imageRight} resizeMode='contain' source={IMAGES.right} />
                        <Text
                            style={{ alignSelf: 'center' }}
                            color={COLORS.white}
                            align={'center'}
                            fontFamily={FONT.semiBold}
                            size={SCALE_SIZE(16)}>
                            {'90%'}
                        </Text>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row', marginTop: SCALE_SIZE(-16) }}>
                        <ImageBackground
                            style={styles.imageOne}
                            source={IMAGES.roundTwo}>
                            <Image style={styles.imageRight} resizeMode='contain' source={IMAGES.right} />
                            <Text
                                style={{ alignSelf: 'center' }}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {'90%'}
                            </Text>
                        </ImageBackground>
                        <ImageBackground
                            style={styles.imageOne}
                            source={IMAGES.roundThree}>
                            <Image style={styles.imageRight} resizeMode='contain' source={IMAGES.right} />
                            <Text
                                style={{ alignSelf: 'center' }}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {'90%'}
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View style={[styles.container, { justifyContent: 'flex-end', marginBottom: SCALE_SIZE(32) }]}>
                <Button
                    style={styles.btnCreateProfile}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('create_profile')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.CreateProfile.name)
                    }}
                />
                <Text
                    style={styles.description}
                    color={COLORS.contentTwo}
                    align={'center'}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('not_now')}
                </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    title: {
        lineHeight: SCALE_SIZE(41)
    },
    description: {
        marginTop: SCALE_SIZE(8),
        lineHeight: SCALE_SIZE(25)
    },
    imageContainer: {
        alignSelf: 'center',
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(16)
    },
    imageOne: {
        height: SCALE_SIZE(96),
        width: SCALE_SIZE(96),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btnCreateProfile: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        marginBottom: SCALE_SIZE(16)
    },
    imageRight: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    }
})
