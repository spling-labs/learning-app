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

export default function QuizFinish(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <ImageBackground style={styles.container} resizeMode='stretch' source={IMAGES.bgCreateProfile}>
            <>
                <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.slider_unfill} />
                <Image style={styles.successImage} resizeMode="contain" source={IMAGES.congrates} />
                <Text
                    style={{ marginTop: SCALE_SIZE(16), alignSelf: 'center' }}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(12)}>
                    {getTranslation('lession_completed')}
                </Text>
                <Text
                    style={{ marginTop: SCALE_SIZE(8), alignSelf: 'center' }}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('excelent_job')}
                </Text>
                <Text
                    style={{ marginTop: SCALE_SIZE(8), alignSelf: 'center' }}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    align={'center'}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('lession_message')}
                </Text>
                <View style={styles.snell}>
                    <View style={{ flex: 1.0, flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={styles.image} resizeMode="contain" source={IMAGES.mask} />
                        <Text
                            style={{ marginLeft: SCALE_SIZE(6) }}
                            color={COLORS.questionColor}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(24)}>
                            {'60 '}
                            <Text
                                color={COLORS.contentTwo}
                                fontFamily={FONT.regular}
                                align={'center'}
                                size={SCALE_SIZE(16)}>
                                {'Snell'}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ flex: 1.0, flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={styles.image} resizeMode="contain" source={IMAGES.time} />
                        <Text
                            style={{ marginLeft: SCALE_SIZE(6) }}
                            color={COLORS.questionColor}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(24)}>
                            {'12 '}
                            <Text
                                color={COLORS.contentTwo}
                                fontFamily={FONT.regular}
                                align={'center'}
                                size={SCALE_SIZE(16)}>
                                {'Time Bonus'}
                            </Text>
                        </Text>
                    </View>
                </View>
            </>
            <View style={{ flex: 1.0 }} />
            <Button
                style={styles.btnContinue}
                backgroundColor={COLORS.primary}
                title={getTranslation('Next lesson')}
                size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.bold}
                onPress={() => {

                }}
            />
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
    successImage: {
        marginTop: SCALE_SIZE(88),
        height: SCALE_SIZE(104),
        width: SCALE_SIZE(104),
        alignSelf: 'center'
    },
    snell: {
        paddingVertical: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(40),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'center'
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
})