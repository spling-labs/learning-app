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
import { Text, Button, Header } from "../../components";
import { useFocusEffect } from "@react-navigation/native";
import AccountSettingItem from "../../components/AccountSettingItem";
import SubcriptionList from "../../components/SubscriptionItem";

export default function SubscriptionScreen(props: any) {

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
                color={COLORS.black}
                fontFamily={FONT.black}
                size={SCALE_SIZE(24)}>
                {getTranslation('get_unlimited')}
            </Text>
            <FlatList
                style={styles.listStyle}
                data={subcriptionList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <SubcriptionList props={props} item={item} />
                }}
            />
            <View>
                <Button
                    style={styles.btnContinue}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('Continue')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.SubscriptionPlanScreen.name)
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
        marginTop: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(24),
        marginRight: SCALE_SIZE(64)

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
    }
})