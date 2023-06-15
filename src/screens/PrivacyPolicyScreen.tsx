import React, { useContext } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

//ASSETS
import { COLORS } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";


//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Header, Text } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";
import { LocalizationContext } from "../context/LocalizationProvider";

export default function PrivacyPolicyScreen(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })


    return (
        <View style={styles.container}>
            <Header
                type={2}
                title={getTranslation('privacy_policy')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />

            <Text
                style={styles.titleTextStyle}
                color={COLORS.questionColor}
                fontFamily={FONT.bold}
                size={SCALE_SIZE(24)}>
                {'Privacy policy updage'}
            </Text>
            <Text
                style={styles.titleUserStyle}
                color={'#3E2F2A'}
                fontFamily={FONT.medium}
                size={SCALE_SIZE(16)}>
                {'Dear Users'}
            </Text>
            <Text
                style={styles.titleDiscStyle}
                color={COLORS.questionColor}
                fontFamily={FONT.medium}
                size={SCALE_SIZE(16)}>
                {'Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur. Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur.Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur.'}
            </Text>
            <Text
                style={styles.titleDiscStyle}
                color={COLORS.questionColor}
                fontFamily={FONT.medium}
                size={SCALE_SIZE(16)}>
                {'Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur. Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur.Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur.'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    titleTextStyle: {
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(32)
    },
    titleUserStyle: {
        marginHorizontal: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(24)
    },
    titleDiscStyle: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(24)
    },
})