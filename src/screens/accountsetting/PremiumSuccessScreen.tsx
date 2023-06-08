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
        StatusBar.setBackgroundColor(COLORS.slider_unfill);
        StatusBar.setTranslucent(false);
    })

    return (
        <ImageBackground style={styles.container}
            source={IMAGES.bgCreateProfile}
            resizeMode="stretch">

            <View style={{ justifyContent: 'center', flex: 1.0 }}>
                <Image style={styles.lockImage} resizeMode="contain" source={IMAGES.premiumsuccess} />
                <Text style={styles.upgradeessages} color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(24)}>
                    {getTranslation('welcome_to_our')}
                </Text>
                <Text style={styles.upgradeessages} color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(24)}>
                    {getTranslation('premium_family')}
                </Text>
            </View>

            <Text style={styles.goHomeStyle} color={COLORS.questionColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>
                {getTranslation('go_to_home')}
            </Text>
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
        marginTop: SCALE_SIZE(5),
        marginRight: SCALE_SIZE(8),
        alignSelf: 'center'
    },
    upgradeessages: {
        alignSelf: 'center'
    },
    goHomeStyle: {
        alignSelf: 'center',
        marginBottom: SCALE_SIZE(32)
    },

})