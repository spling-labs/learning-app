import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ScrollView } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../../assets";

//TYPES
import { LocalizationContextType } from "../../types";

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


export default function SubscriptionCreditScreen(props: any) {

    const [name, setname] = useState<string>('')
    const [cardNumber, setCardNumber] = useState<string>('')
    const [expiredate, setExpireDate] = useState<string>('')
    const [security, setSecurity] = useState<string>('')

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })

    return (
        <View style={styles.container}>
            <Header
                type={1}
                title={getTranslation('subscription')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />

            <Text
                style={styles.titleTextStyle}
                color={COLORS.contentColor}
                fontFamily={FONT.bold}
                size={SCALE_SIZE(12)}>
                {'3 of 3'}
            </Text>
            <ProgressSlider
                type={2}
                style={styles.progressSlider}
                fillCount={3}
                totalCount={3} />
            <Text
                style={styles.battleMessages}
                color={COLORS.questionColor}
                fontFamily={FONT.black}
                align={'center'}
                size={SCALE_SIZE(24)}>
                {getTranslation('setup_payment')}

            </Text>
            <View style={styles.secureTxtStyle}>
                <Image style={styles.lockImage} resizeMode="contain" source={IMAGES.lactureLock} />
                <Text style={styles.upgradeessages} color={COLORS.contentColor} fontFamily={FONT.medium} size={SCALE_SIZE(14)}>
                    {getTranslation('secure_payent')}
                </Text>
            </View>
            <ScrollView>
                <View style={{ flex: 1.0, marginTop: SCALE_SIZE(48) }}>
                    <View>
                        <Text
                            style={styles.nameStyle}
                            color={COLORS.questionColor}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(14)}>
                            {getTranslation('Name')}
                        </Text>
                        <Input
                            style={styles.input}
                            numberOfLines={1}
                            placeholder={'e.g johndue'}
                            keyboardType={'default'}
                            value={name}
                            onChangeText={(text: string) => {
                                setname(text)
                            }}
                        />
                    </View>
                    <View>
                        <Text
                            style={styles.cardStyle}
                            color={COLORS.questionColor}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(14)}>
                            {getTranslation('card_number')}
                        </Text>
                        <Input
                            style={styles.input}
                            numberOfLines={1}
                            placeholder={'e.g 123 456 789'}
                            keyboardType={'number-pad'}
                            value={cardNumber}
                            onChangeText={(text: string) => {
                                setCardNumber(text)
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Text
                                style={styles.expireStyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(14)}>
                                {getTranslation('expiry_date')}
                            </Text>
                            <Input
                                style={styles.expireinput}
                                numberOfLines={1}
                                placeholder={'DD/MM/YY'}
                                keyboardType={'number-pad'}
                                value={expiredate}
                                onChangeText={(text: string) => {
                                    setExpireDate(text)
                                }}
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.securityStyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(14)}>
                                {getTranslation('security_code')}
                            </Text>
                            <Input
                                style={styles.securityinput}
                                numberOfLines={1}
                                placeholder={'CVV'}
                                keyboardType={'number-pad'}
                                value={security}
                                onChangeText={(text: string) => {
                                    setSecurity(text)
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                <Button
                    style={styles.btnContinue}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('confirm_payment')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.PremiumSuccessScreen.name)

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
        backgroundColor: COLORS.white
    },
    titleTextStyle: {
        marginTop: SCALE_SIZE(24),
        alignSelf: 'center',
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(16)
    },
    progressSlider: {
        marginHorizontal: SCALE_SIZE(72),
        marginTop: SCALE_SIZE(8)
    },
    battleMessages: {
        marginTop: SCALE_SIZE(24),
        lineHeight: SCALE_SIZE(32),
        marginHorizontal: SCALE_SIZE(40),
        letterSpacing: -0.24
    },
    upgradeessages: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20)

    },
    lockImage: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(8),
        tintColor: COLORS.contentColor
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
        marginVertical: SCALE_SIZE(8)
    },
    nameStyle: {
        marginHorizontal: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20)
    },
    cardStyle: {
        marginHorizontal: SCALE_SIZE(16),
        letterSpacing: -0.24,
        marginTop: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(20)
    },
    input: {
        marginTop: SCALE_SIZE(8),
        marginHorizontal: SCALE_SIZE(16)
    },

    expireStyle: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(20),
        letterSpacing: -0.24
    },
    expireinput: {
        marginTop: SCALE_SIZE(8),
        marginHorizontal: SCALE_SIZE(16),
        width: SCALE_SIZE(175)
    },
    securityStyle: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(20)
    },
    securityinput: {
        marginTop: SCALE_SIZE(8),
        marginLeft: SCALE_SIZE(16),
        width: SCALE_SIZE(175)
    },
    secureTxtStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: SCALE_SIZE(8)
    }
})