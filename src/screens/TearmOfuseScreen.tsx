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
import { Button, Header, Text } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";
import { LocalizationContext } from "../context/LocalizationProvider";

export default function TearmOfuseScreen(props: any) {

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
                title={getTranslation('term_of_use')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />

            <Text
                style={styles.titleTextStyle}
                color={COLORS.questionColor}
                fontFamily={FONT.bold}
                size={SCALE_SIZE(24)}>
                {'Term of Use'}
            </Text>
            <Text
                style={styles.titleUserStyle}
                color={'#3E2F2A'}
                fontFamily={FONT.medium}
                size={SCALE_SIZE(16)}>
                {'Dear Users'}
            </Text>
            <View style={styles.termViewStyle}>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'1. '}
                </Text>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur. Lorem ipsum dolor .'}
                </Text>
            </View>

            <View style={styles.termViewStyle}>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'2. '}
                </Text>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur. Lorem ipsum dolor .'}
                </Text>
            </View>
            <View style={styles.termViewStyle}>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'3. '}
                </Text>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur. Lorem ipsum dolor .'}
                </Text>
            </View>
            <View style={styles.termViewStyle}>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'4. '}
                </Text>
                <Text
                    style={styles.titleDiscStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(16)}>
                    {'Lorem ipsum dolor sit amet consectetur. Senectus sagittis vitae augue lorem lectus id integer. Duis urna mi sit eu amet est congue consectetur. Lorem ipsum dolor .'}
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: SCALE_SIZE(48), marginHorizontal: SCALE_SIZE(16) }}>
                <Button
                    style={styles.btnContinue}
                    backgroundColor={COLORS.contentThree}
                    title={getTranslation('decline')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.questionColor}
                    family={FONT.bold}
                    onPress={() => {
                    }}
                />

                <Button
                    style={styles.acceptBtnContinue}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('accept')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white,
    },
    titleTextStyle: {
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(32)
    },
    titleUserStyle: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(8),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(24)
    },
    termViewStyle: {
        marginTop: SCALE_SIZE(16),
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16)
    },
    titleDiscStyle: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(24)
    },
    btnContinue: {
        borderBottomWidth: 4,
        flex: 1.0,
        marginRight: SCALE_SIZE(8),
        borderBottomColor: '#C3C3C3'
    },
    acceptBtnContinue: {
        borderBottomWidth: 4,
        flex: 1.0,
        marginLeft: SCALE_SIZE(8),
        borderBottomColor: COLORS.drop_shadow
    },
})