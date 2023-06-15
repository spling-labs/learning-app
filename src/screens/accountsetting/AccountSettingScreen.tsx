import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../../assets";

//TYPES
import { LocalizationContextType, accountList, contactList, dangerList, notificationList, shareList } from "../../types";

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

export default function AccountSettingScreen(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View style={styles.viewStyle} />
        );
    };

    function onNavigate(item: any) {

        if (item.Title == 'edit_profile') {
            props.navigation.navigate(SCREENS.EditProfile.name)
        } else if (item.Title == 'get_pro') {
            props.navigation.navigate(SCREENS.SubscriptionScreen.name)
        } else if (item.Title == 'language_change') {
            props.navigation.navigate(SCREENS.ChangeLanguageScreen.name)
        } else if (item.Title == 'privacy_policy') {
            props.navigation.navigate(SCREENS.PrivacyPolicyScreen.name)
        } else if (item.Title == 'terms_and_conditions') {
            props.navigation.navigate(SCREENS.TearmOfuseScreen.name)
        } else if (item.Title == 'help') {
            props.navigation.navigate(SCREENS.AboutUsScreen.name)
        }
        else if(item.Title == 'push_notification'){
            props.navigation.navigate(SCREENS.Notification.name)
        }
        else if(item.Title == 'rate_us'){
            props.navigation.navigate(SCREENS.Rate.name)

        }
    }

    return (
        <View style={styles.container}>
            <Header
                type={1}
                title={getTranslation('account_settings')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}>
                <View>
                    <Text
                        style={styles.titleTextStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(12)}>
                        {getTranslation('account')}
                    </Text>
                    <FlatList
                        style={styles.listStyle}
                        data={accountList}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return (
                                <AccountSettingItem
                                    props={props}
                                    item={item}
                                    onPress={(item: any) => {
                                        onNavigate(item)
                                    }} />
                            )
                        }}
                    />
                    <Text
                        style={styles.titleTextStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(12)}>
                        {getTranslation('notifications')}
                    </Text>
                    <FlatList
                        style={styles.listStyle}
                        data={notificationList}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return (
                                <AccountSettingItem
                                    props={props}
                                    item={item}
                                    onPress={(item: any) => {
                                        onNavigate(item)
                                    }} />
                            )

                        }}
                    />
                    <Text
                        style={styles.titleTextStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(12)}>
                        {getTranslation('share')}
                    </Text>
                    <FlatList
                        style={styles.listStyle}
                        data={shareList}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return (
                                <AccountSettingItem
                                    props={props}
                                    item={item}
                                    onPress={(item: any) => {
                                        onNavigate(item)
                                    }} />
                            )

                        }}
                    />
                    <Text
                        style={styles.titleTextStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(12)}>
                        {getTranslation('contact_us')}
                    </Text>
                    <FlatList
                        style={styles.listStyle}
                        data={contactList}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return (
                                <AccountSettingItem
                                    props={props}
                                    item={item}
                                    onPress={(item: any) => {
                                        onNavigate(item)
                                    }} />
                            )

                        }}
                    />
                    <Text
                        style={styles.titleTextStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(12)}>
                        {getTranslation('danger_zone')}
                    </Text>
                    <FlatList
                        style={[styles.listStyle, { marginBottom: SCALE_SIZE(16) }]}
                        data={dangerList}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return (
                                <AccountSettingItem
                                    props={props}
                                    item={item}
                                    onPress={(item: any) => {
                                        onNavigate(item)
                                    }} />
                            )

                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
    },
    titleTextStyle: {
        marginLeft: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(16),
    },
    listStyle: {
        marginTop: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        paddingBottom: SCALE_SIZE(8),
        paddingTop: SCALE_SIZE(4)
    },
    viewStyle: {
        marginTop: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(8),
        height: SCALE_SIZE(1),
        width: '100%',
        backgroundColor: COLORS.contentThree,
    },
})