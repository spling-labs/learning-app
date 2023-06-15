import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

export default function Splash(props: any) {

    const { setI18nConfig } = useContext(LocalizationContext) as LocalizationContextType;

    useEffect(() => {
        setI18nConfig('en')
        setTimeout(() => {
            props.navigation.navigate(SCREENS.GetStarted.name)
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent={false} backgroundColor={COLORS.primary} />
            <Image resizeMode="contain" style={styles.image} source={IMAGES.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.primary,
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 88,
        alignSelf: 'center'
    }
})