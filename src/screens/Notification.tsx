import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button, Header } from "../components";


export default function Notification(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const notification = ['', '', '', '', '', '']

    return (
        <View style={styles.container}>
                        <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />

            <Header
                type={2}
                title={getTranslation('Notification')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <View style={styles.filter}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={selectedIndex == 0 ? styles.selected : styles.unselected}
                    onPress={() => {
                        setSelectedIndex(0)
                    }}>
                    <Text
                        color={selectedIndex == 0 ? COLORS.white : COLORS.contentTwo}
                        fontFamily={selectedIndex == 0 ? FONT.black : FONT.regular}
                        size={SCALE_SIZE(14)}>
                        {getTranslation('All')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={selectedIndex == 1 ? [styles.selected, { marginHorizontal: SCALE_SIZE(8) }] : [styles.unselected, { marginHorizontal: SCALE_SIZE(8) }]}
                    onPress={() => {
                        setSelectedIndex(1)
                    }}>
                    <Text
                        color={selectedIndex == 1 ? COLORS.white : COLORS.contentTwo}
                        fontFamily={selectedIndex == 1 ? FONT.black : FONT.regular}
                        size={SCALE_SIZE(14)}>
                        {getTranslation('Reminder')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={selectedIndex == 2 ? styles.selected : styles.unselected}
                    onPress={() => {
                        setSelectedIndex(2)
                    }}>
                    <Text
                        color={selectedIndex == 2 ? COLORS.white : COLORS.contentTwo}
                        fontFamily={selectedIndex == 2 ? FONT.black : FONT.regular}
                        size={SCALE_SIZE(14)}>
                        {getTranslation('Promotional')}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.txtMostRecent}
                color={COLORS.questionColor}
                fontFamily={FONT.black}
                size={SCALE_SIZE(24)}>
                {getTranslation('Most recent')}
            </Text>
            <ScrollView
                style={styles.scrolledContainer}
                showsVerticalScrollIndicator={false}>
                <>
                    {notification.map((item, index) => {
                        return (
                            <>
                                <View key={index} style={styles.itemContainer}>
                                    <Image style={styles.itemImage} resizeMode='contain' source={IMAGES.notification} />
                                    <View style={styles.itemView}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text
                                                style={{ flex: 1.0 }}
                                                color={COLORS.questionColor}
                                                fontFamily={FONT.black}
                                                size={SCALE_SIZE(14)}>
                                                {'Reminder!'}
                                            </Text>
                                            <Image style={styles.timerImage} resizeMode="contain" source={IMAGES.timerx} />
                                            <Text
                                                style={{ marginTop: -1 }}
                                                color={'#6B635E'}
                                                fontFamily={FONT.medium}
                                                size={SCALE_SIZE(14)}>
                                                {'1 hours ago'}
                                            </Text>
                                        </View>
                                        <Text
                                            style={styles.description}
                                            color={'#6B635E'}
                                            fontFamily={FONT.medium}
                                            size={SCALE_SIZE(14)}>
                                            {'Hey! jonathan its your learning time. We\nmissed you.'}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.devider}/>
                            </>
                        )
                    })}
                </>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    filter: {
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(8),
        flexDirection: 'row'
    },
    selected: {
        paddingHorizontal: SCALE_SIZE(24),
        paddingVertical: SCALE_SIZE(8),
        borderRadius: SCALE_SIZE(32),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        backgroundColor: COLORS.primary
    },
    unselected: {
        paddingHorizontal: SCALE_SIZE(24),
        paddingVertical: SCALE_SIZE(8),
        borderRadius: SCALE_SIZE(32),
        backgroundColor: '#F7F7F7'
    },
    txtMostRecent: {
        marginTop: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16)
    },
    scrolledContainer: {
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.white
    },
    itemContainer: {
        paddingVertical: SCALE_SIZE(16),
        flexDirection: 'row'
    },
    itemImage: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        alignSelf: 'center'
    },
    itemView: {
        marginLeft: SCALE_SIZE(16),
        flexDirection: 'column',
        alignSelf: 'center',
        flex: 1.0
    },
    timerImage: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        alignSelf: 'center',
        marginRight: SCALE_SIZE(8)
    },
    description: {
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(22)
    },
    devider: {
        height: 1,
        backgroundColor: '#F0EEEE'
    }
})