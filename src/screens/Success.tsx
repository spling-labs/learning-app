import React, { useContext } from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, ImageBackground } from "react-native";

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

export default function Success(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <ImageBackground style={styles.container} source={IMAGES.successBackground} resizeMode='cover'>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
                <Image style={styles.image} resizeMode='contain' source={IMAGES.success} />
                <Text
                    style={styles.question}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    align={'center'}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('dont_miss_msg')}
                </Text>
                <Text
                    style={styles.descripation}
                    color={COLORS.contentColor}
                    fontFamily={FONT.medium}
                    align={'center'}
                    size={SCALE_SIZE(16)}>
                    {getTranslation('dont_miss_des')}
                </Text>
            </View>
            <Button
                style={styles.btnContinue}
                backgroundColor={COLORS.primary}
                title={getTranslation('Continue')}
                size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.semiBold}
                onPress={() => {
                    props.navigation.navigate(SCREENS.StartLearning.name)
                }}
            />
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    image: {
        marginTop: SCALE_SIZE(56),
        marginHorizontal: SCALE_SIZE(32),
        width: (Dimensions.get('window').width - SCALE_SIZE(64)),
        height: ((Dimensions.get('window').width - SCALE_SIZE(64)) * 253) / 336
    },
    descripation: {
        marginTop: SCALE_SIZE(4),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(25),
    },
    question: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(41),
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
})