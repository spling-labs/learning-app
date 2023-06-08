import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, inProList, leaderBordList } from "../types";

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
import InprogressListItem from "../components/InprogressListItem";
import LeaderBordItemList from "../components/LeaderBordItemList";

export default function Leaderboard(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text
                    style={styles.textStyle}
                    color={COLORS.black}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('Leaderboard')}
                </Text>
                <View style={styles.shareViewStyle}>
                    <Image style={styles.shareImageStyle} resizeMode="contain" source={IMAGES.ic_leader_share} />
                    <Text color={COLORS.contentColor} fontFamily={FONT.regular} align={'center'} size={SCALE_SIZE(16)}>{getTranslation('share')}</Text>
                </View>
            </View>

            <View style={styles.dropdownStyle}>
                <Text
                    style={styles.topStyle}
                    color={COLORS.black}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {'Top 100'}
                </Text>
                <View style={styles.shareViewStyle}>
                    <View style={styles.dailyStyle}>
                        <Text style={styles.dailytxtStyle} color={COLORS.contentColor} fontFamily={FONT.black} align={'center'} size={SCALE_SIZE(16)}>{'Daily'}</Text>
                        <Image style={[styles.dropdownImageStyle, { marginRight: SCALE_SIZE(16), marginLeft: SCALE_SIZE(16) }]} resizeMode="contain" source={IMAGES.dropdown} />
                    </View>
                    <View style={styles.dailyStyle}>
                        <Text style={styles.dailytxtStyle} color={COLORS.contentColor} fontFamily={FONT.black} align={'center'} size={SCALE_SIZE(16)}>{'Country'}</Text>
                        <Image style={[styles.dropdownImageStyle, { marginLeft: SCALE_SIZE(16) }]} resizeMode="contain" source={IMAGES.dropdown} />
                    </View>
                </View>
            </View>
            <FlatList
                data={leaderBordList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <LeaderBordItemList props={props} item={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        height: SCALE_SIZE(48),
    },
    textStyle: {
        marginLeft: SCALE_SIZE(16),
        alignSelf: 'center',
    },
    shareViewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: SCALE_SIZE(8),
        marginRight: SCALE_SIZE(16)
    },
    shareImageStyle: {
        height: SCALE_SIZE(18),
        width: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(8),
        alignSelf: 'center',
    },
    dropdownStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: SCALE_SIZE(16)
    },
    topStyle: {
        marginLeft: SCALE_SIZE(16),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(8)
    },
    dailytxtStyle: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    dailyStyle: {
        flexDirection: 'row',
    },
    dropdownImageStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(8),
        tintColor: COLORS.contentColor,
    },

})