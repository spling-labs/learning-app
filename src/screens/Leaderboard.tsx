import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, FlatList } from "react-native";

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
import LeaderBordItemList from "../components/LeaderBordItemList";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";


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
                    <Text
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        align={'center'}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('share')}
                    </Text>
                </View>
            </View>
            <View style={[styles.dropdownStyle, {}]}>
                <Text
                    style={styles.topStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {'Top 100'}
                </Text>
                <View style={{ alignSelf: 'center', flexDirection: 'row', marginEnd: SCALE_SIZE(16), marginTop: SCALE_SIZE(5) }}>
                    <View style={[styles.dailyStyle, { marginRight: SCALE_SIZE(24) }]}>
                        <Text
                            style={styles.dailytxtStyle}
                            color={COLORS.contentTwo}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(14)}>
                            {'Daily'}
                        </Text>
                        <Image style={[styles.dropdownImageStyle, { marginRight: SCALE_SIZE(4), marginLeft: SCALE_SIZE(4) }]} resizeMode="contain" source={IMAGES.dropdown} />
                    </View>
                    <View style={styles.dailyStyle}>
                        <Text
                            style={styles.dailytxtStyle}
                            color={COLORS.contentTwo}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(14)}>
                            {'Country'}
                        </Text>
                        <Image style={[styles.dropdownImageStyle, { marginLeft: SCALE_SIZE(4) }]} resizeMode="contain" source={IMAGES.dropdown} />
                    </View>
                </View>
            </View>
            <FlatList
                data={leaderBordList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <LeaderBordItemList props={props} item={item} />
                    )
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
        paddingVertical: SCALE_SIZE(10),
        paddingHorizontal: SCALE_SIZE(16)
    },
    textStyle: {
        alignSelf: 'center',
        marginTop: SCALE_SIZE(-5)
    },
    shareViewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginRight: SCALE_SIZE(16)
    },
    shareImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginRight: SCALE_SIZE(8),
        alignSelf: 'center',
    },
    dropdownStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: SCALE_SIZE(24),
        marginBottom: SCALE_SIZE(8),
        alignItems: 'center'
    },
    topStyle: {
        marginLeft: SCALE_SIZE(16),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(8)
    },
    dailytxtStyle: {
        alignSelf: 'center',
    },
    dailyStyle: {
        flexDirection: 'row',
    },
    dropdownImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center',
        tintColor: COLORS.contentTwo,
        marginTop: SCALE_SIZE(3)
    },

})