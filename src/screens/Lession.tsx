import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, SafeAreaView, FlatList, Platform } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, lactures } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Header, LactureItems, StartLearningModel } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";

export default function Lession(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [startLearning, setStartLearning] = useState<boolean>(false)
    const [lactureItem, setLactureItem] = useState<any>(null)

    useFocusEffect(() => {
        if (Platform.OS == 'android') {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor(COLORS.white);
            StatusBar.setTranslucent(false);
        }

    })

    return (
        <>
            <View style={styles.container}>
                <Header
                    mask
                    mask_number={'180'}
                    title='Introduction'
                    onBackPress={() => {
                        props.navigation.goBack()
                    }} />
                <Text
                    style={styles.battleMessages}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    align={'center'}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('welcome')}
                    <Text
                        color={COLORS.primary}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(24)}>
                        {'Nills'}
                        <Text
                            color={COLORS.questionColor}
                            fontFamily={FONT.black}
                            align={'center'}
                            size={SCALE_SIZE(24)}>
                            {getTranslation('are_you_ready_for_battle')}
                        </Text>
                    </Text>
                </Text>
                <FlatList
                    data={lactures}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <LactureItems
                                item={item}
                                index={index}
                                onPress={(item: any) => {
                                    setLactureItem(item)
                                    setStartLearning(true)
                                }}
                            />
                        )
                    }}
                />
            </View>
            <StartLearningModel
                startLearning={startLearning}
                item={lactureItem}
                onClose={() => {
                    setStartLearning(false)
                }}
                onLearning={() => {
                    setStartLearning(false)
                    props.navigation.navigate(SCREENS.LactureDetails.name)
                }} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.color_F6F6F6
    },
    battleMessages: {
        marginTop: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(41),
        marginBottom: SCALE_SIZE(24),
    },
    headerComponent: {
        height: SCALE_SIZE(0)
    }
})
