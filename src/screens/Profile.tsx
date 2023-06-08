import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, inProList } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button } from "../components";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import AccountSettingItem from "../components/AccountSettingItem";
import InprogressListItem from "../components/InprogressListItem";

export default function Profile(props: any) {

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

    return (
        <View style={styles.container}>

            <View style={styles.toolbarStyle}>
                <Text
                    style={styles.textStyle}
                    color={COLORS.black}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('my_profile')}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate(SCREENS.AccountSettingScreen.name)
                    }}>
                    <Image style={styles.settingIconStyle} resizeMode="contain" source={IMAGES.setting} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1.0 }}>
                <View style={styles.profileStyle}>
                    <View style={styles.flexRowStyle}>
                        <Image style={styles.userImageStyle} resizeMode="contain" source={IMAGES.profile} />
                        <View style={{ marginLeft: SCALE_SIZE(8) }}>
                            <Text color={COLORS.communityTextColor} fontFamily={FONT.black} size={SCALE_SIZE(16)}>{'Alex Smith'}</Text>
                            <Text color={COLORS.contentTwo} fontFamily={FONT.regular} size={SCALE_SIZE(14)}>{'0 Followers | 12 Following'}</Text>
                        </View>
                    </View>
                    <View style={styles.snellViewStyle}>
                        <Text style={styles.snellTextStyle} color={COLORS.primary} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'12,340 Snell'}</Text>
                        <Text style={styles.levelTextStyle} color={COLORS.communitylevelColor} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'4 Days Days streak'}</Text>
                    </View>

                    <Text
                        style={styles.attachStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(10)}>
                        {getTranslation('achievements')}
                    </Text>
                </View>
                <Text
                    style={styles.inProgressStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('in_progress')}
                </Text>
                <FlatList
                    style={styles.listStyle}
                    data={inProList}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={({ item }) => {
                        return <InprogressListItem props={props} item={item} />
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    toolbarStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    textStyle: {
        marginLeft: SCALE_SIZE(16)
    },
    settingIconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignItems: 'center',
        marginRight: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(8)
    },
    profileStyle: {
        marginHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        borderWidth: SCALE_SIZE(1),
        marginTop: SCALE_SIZE(16),
        padding: SCALE_SIZE(8),
        borderColor: COLORS.contentThree
    },
    flexRowStyle: {
        flexDirection: 'row'
    },
    userImageStyle: {
        height: SCALE_SIZE(48),
        width: SCALE_SIZE(48),
        alignSelf: 'center',
    },
    userTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8)
    },
    snellTextStyle: {
        alignSelf: 'center',
        backgroundColor: COLORS.slider_unfill,
        borderRadius: SCALE_SIZE(32),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8),
        padding: SCALE_SIZE(6),
    },
    levelTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: '#F1FAEB',
        borderRadius: SCALE_SIZE(32),
        padding: SCALE_SIZE(6),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8),

    },
    hrTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8)
    },
    snellViewStyle: {
        flexDirection: 'row',
        marginTop: SCALE_SIZE(8)
    },
    attachStyle: {
        marginTop: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(8)
    },
    inProgressStyle: {
        marginTop: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16)
    },
    listStyle: {
        marginTop: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        paddingBottom: SCALE_SIZE(8),
        paddingTop: SCALE_SIZE(4),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
    },
    viewStyle: {
        marginTop: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(8),
        height: SCALE_SIZE(1),
        width: '100%',
        backgroundColor: COLORS.contentThree,
    },
})