import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../../assets";

//TYPES
import { LocalizationContextType, accountList, contactList, dangerList, notificationList, shareList, subcriptionList } from "../../types";

//SCREENS
import { SCREENS } from "..";

//CONSTANTS
import { SCALE_SIZE } from "../../constants/uttils";
import { FONT } from "../../constants/font";

//CONTEXT
import { LocalizationContext } from "../../context/LocalizationProvider";

//COMPONENT
import { Text, Button, Header, ProgressSlider, Input } from "../../components";
import { useFocusEffect } from "@react-navigation/native";
import AccountSettingItem from "../../components/AccountSettingItem";
import SubcriptionList from "../../components/SubscriptionItem";

export default function PremiumSuccessScreen(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
    })

    return (
        <ImageBackground style={styles.container}
            source={IMAGES.bgCreateProfile}
            resizeMode="cover">
            <View style={{ justifyContent: 'center', flex: 1.0 }}>
                <Image style={styles.lockImage} resizeMode="contain" source={IMAGES.premiumsuccess} />
                <Text style={styles.upgradeessages}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    align={'center'}
                    size={SCALE_SIZE(24)}>
                    {'Welcome to our\npremium family'}
                </Text>
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }}
                activeOpacity={1}
                onPress={() => {    
                    props.navigation.navigate(SCREENS.BottomBar.name)
                }}>
                <Text style={styles.goHomeStyle} color={COLORS.contentTwo} fontFamily={FONT.bold} size={SCALE_SIZE(16)}>
                    {getTranslation('go_to_home')}
                </Text>
            </TouchableOpacity>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    lockImage: {
        height: SCALE_SIZE(48),
        width: SCALE_SIZE(48),
        alignSelf: 'center'
    },
    upgradeessages: {
        alignSelf: 'center',
        marginHorizontal: SCALE_SIZE(64),
        lineHeight: SCALE_SIZE(32),
        letterSpacing: -0.24,
        marginTop: SCALE_SIZE(16)
    },
    goHomeStyle: {
        alignSelf: 'center',
        marginBottom: SCALE_SIZE(64),
        lineHeight: SCALE_SIZE(20),
        letterSpacing: -0.24
    },

})