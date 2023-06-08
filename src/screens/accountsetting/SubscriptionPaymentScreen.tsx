import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";

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
import { Text, Button, Header, ProgressSlider } from "../../components";
import { useFocusEffect } from "@react-navigation/native";
import AccountSettingItem from "../../components/AccountSettingItem";
import SubcriptionList from "../../components/SubscriptionItem";

export default function SubscriptionPaymentScreen(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })

    return (
        <View style={styles.container}>

            <Header
                title={getTranslation('subscription')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <Text
                style={styles.titleTextStyle}
                color={COLORS.contentColor}
                fontFamily={FONT.black}
                size={SCALE_SIZE(12)}>
                {'2 of 3'}
            </Text>
            <ProgressSlider
                type={2}
                style={styles.progressSlider}
                fillCount={2}
                totalCount={3} />
            <Text
                style={styles.battleMessages}
                color={COLORS.questionColor}
                fontFamily={FONT.black}
                align={'center'}
                size={SCALE_SIZE(24)}>
                {getTranslation('setup_payment')}

            </Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Image style={styles.lockImage} resizeMode="contain" source={IMAGES.lactureLock} />
                <Text style={styles.upgradeessages} color={COLORS.contentColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>
                    {getTranslation('secure_payent')}
                </Text>
            </View>
            <View style={{ flex: 1.0 }}>
                <TouchableOpacity
                    onPress={() => {
                    }}>

                    <View style={[styles.maincontainer, { backgroundColor: COLORS.questionColor }]}>
                        <View style={styles.ViewStyle}>
                            <Image style={styles.IconStyle} resizeMode="contain" source={IMAGES.ic_credit} />
                            <Text
                                style={styles.textStyle}
                                color={COLORS.white}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('credit_card')}
                            </Text>
                        </View>
                        <Image style={[styles.arrowStyle, { tintColor: COLORS.white }]} resizeMode="contain" source={IMAGES.ic_arrow} />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                    }}>

                    <View style={styles.maincontainer}>
                        <View style={styles.ViewStyle}>
                            <Image style={styles.IconStyle} resizeMode="contain" source={IMAGES.ic_paypal} />
                            <Text
                                style={styles.textStyle}
                                color={COLORS.black}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('paypal')}
                            </Text>
                        </View>
                        <Image style={styles.arrowStyle} resizeMode="contain" source={IMAGES.ic_arrow} />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                    }}>

                    <View style={styles.maincontainer}>
                        <View style={styles.ViewStyle}>
                            <Image style={styles.IconStyle} resizeMode="contain" source={IMAGES.ic_online_bank} />
                            <Text
                                style={styles.textStyle}
                                color={COLORS.black}
                                fontFamily={FONT.semiBold}
                                size={SCALE_SIZE(16)}>
                                {getTranslation('online_banking')}
                            </Text>
                        </View>
                        <Image style={styles.arrowStyle} resizeMode="contain" source={IMAGES.ic_arrow} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Button
                    style={styles.btnContinue}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('card_info')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.SubscriptionCreditScreen.name)

                    }}
                />
                <Text
                    style={styles.bottomTextStyle}
                    color={COLORS.contentColor}
                    fontFamily={FONT.regular}
                    size={SCALE_SIZE(12)}>
                    {getTranslation('cancel_anytime')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    titleTextStyle: {
        marginTop: SCALE_SIZE(16),
        alignSelf: 'center'
    },
    listStyle: {
        marginTop: SCALE_SIZE(24),
        marginHorizontal: SCALE_SIZE(24)

    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    bottomTextStyle: {
        alignSelf: 'center',
        marginBottom: SCALE_SIZE(8)
    },
    progressSlider: {
        marginHorizontal: SCALE_SIZE(64),
        marginTop: SCALE_SIZE(8)
    },
    battleMessages: {
        marginTop: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(38),
        marginHorizontal: SCALE_SIZE(24)
    },
    upgradeessages: {
        marginBottom: SCALE_SIZE(24),
    },
    lockImage: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(5),
        marginRight: SCALE_SIZE(8)
    },
    ViewStyle: {
        flexDirection: 'row',
        height: SCALE_SIZE(32),
        alignItems: 'center'
    },
    maincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: SCALE_SIZE(48),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16)
    },
    IconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16),
    },
    arrowStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(8),

    },
    textStyle: {
        marginLeft: SCALE_SIZE(16),
    },
})