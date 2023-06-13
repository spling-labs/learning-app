import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, TouchableHighlight, Dimensions } from "react-native";

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

export default function SubscriptionPlanScreen(props: any) {

    const [yearltSelected, setYearlySelected] = useState(true);
    const [monthlySelected, setMonthlySelected] = useState(false);
    const [lifetimeSelected, setLifetimeSelected] = useState(false);

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })

    const yearlyImageStyle = () => {
        return yearltSelected ? styles.selectRightPostIcon : styles.rightPostIcon;
    }

    const yearlyBackgroundStyle = () => {
        return yearltSelected ? styles.selectPlanViewStyle : styles.planViewStyle;
    }

    const monthlyImageStyle = () => {
        return monthlySelected ? styles.selectRightPostIcon : styles.rightPostIcon;
    }

    const monthlyBackgroundStyle = () => {
        return monthlySelected ? styles.selectPlanViewStyle : styles.planViewStyle;
    }

    const lifetimeImageStyle = () => {
        return lifetimeSelected ? styles.selectRightPostIcon : styles.rightPostIcon;
    }

    const lifetimeBackgroundStyle = () => {
        return lifetimeSelected ? styles.selectPlanViewStyle : styles.planViewStyle;
    }
    const yearlySelect = () => {
        setYearlySelected(true)
        setMonthlySelected(false)
        setLifetimeSelected(false)
    }

    const monthlySelect = () => {
        setMonthlySelected(true)
        setYearlySelected(false)
        setLifetimeSelected(false)
    }

    const lifetimeSelect = () => {
        setLifetimeSelected(true)
        setMonthlySelected(false)
        setYearlySelected(false)
    }
    return (
        <View style={styles.container}>

            <Header title={getTranslation('subscription')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />

            <Text style={styles.titleTextStyle} color={COLORS.contentColor} fontFamily={FONT.black} size={SCALE_SIZE(12)}>{'1 of 3'}</Text>
            <ProgressSlider type={2} style={styles.progressSlider} fillCount={1} totalCount={3} />
            <Text style={styles.battleMessages} color={COLORS.questionColor} fontFamily={FONT.black} align={'center'} size={SCALE_SIZE(24)}>{getTranslation('choose_plan')}</Text>
            <Text style={styles.upgradeessages} color={COLORS.contentColor} fontFamily={FONT.regular} align={'center'} size={SCALE_SIZE(14)}>{getTranslation('upgrade')}</Text>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={() => yearlySelect()}>
                            <View style={[yearlyBackgroundStyle(), { marginTop: SCALE_SIZE(8) }]}>
                                <Image style={yearlyImageStyle()} resizeMode="contain" source={IMAGES.ic_circle_right} />
                                <View >
                                    <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{getTranslation('year')}</Text>
                                    <Text color={COLORS.contentColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{getTranslation('yeardis')}</Text>
                                    <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{'$30.99/year $60.99/year'}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.offTextStyle}>
                            <Text color={COLORS.white} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{getTranslation('txtOff')}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => monthlySelect()}>
                        <View style={[monthlyBackgroundStyle(), { marginTop: SCALE_SIZE(16), marginBottom: SCALE_SIZE(16) }]}>
                            <Image style={monthlyImageStyle()} resizeMode="contain" source={IMAGES.ic_circle_right} />
                            <View >
                                <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{getTranslation('month')}</Text>
                                <Text color={COLORS.contentColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{getTranslation('monthdis')}</Text>
                                <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{'$30.99/year'}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => lifetimeSelect()}>
                        <View style={lifetimeBackgroundStyle()}>
                            <Image style={lifetimeImageStyle()} resizeMode="contain" source={IMAGES.ic_circle_right} />
                            <View >
                                <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{getTranslation('lifetime')}</Text>
                                <Text color={COLORS.contentColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{getTranslation('lifetimedis')}</Text>
                                <Text color={COLORS.questionColor} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{getTranslation('lifetimedis1')}</Text>
                                <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{'$200'}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View>
                <Button style={styles.btnContinue} backgroundColor={COLORS.primary} title={getTranslation('Continue')} size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.SubscriptionPaymentScreen.name)
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
    battleMessages: {
        marginTop: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(38),
        marginHorizontal: SCALE_SIZE(40)
    },
    upgradeessages: {
        marginBottom: SCALE_SIZE(24),
        marginHorizontal: SCALE_SIZE(40)
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
    planViewStyle: {
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        padding: SCALE_SIZE(16),
        borderColor: COLORS.white,
        borderWidth: SCALE_SIZE(3)
    },
    rightPostIcon: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginRight: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(4)

    },
    selectPlanViewStyle: {
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.slider_unfill,
        borderRadius: SCALE_SIZE(12),
        padding: SCALE_SIZE(16),
        borderColor: COLORS.primary,
        borderWidth: SCALE_SIZE(3)
    },
    selectRightPostIcon: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginRight: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(4),
        tintColor: COLORS.primary

    },
    offTextStyle: {
        position: 'absolute',
        backgroundColor: COLORS.primary,
        borderRadius: SCALE_SIZE(32),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8),
        marginLeft: SCALE_SIZE(Dimensions.get('screen').width - 150)
    }
})