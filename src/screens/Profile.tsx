import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, achevementList, inProList, topicChooseList } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, InprogressListItem, TopicChooseItem, DailyLearningDialog, AchievementUserItem, CertificateListItem, TopicChooseDialog } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";

export default function Profile(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    const [modalVisible, setModalVisible] = useState(false);
    const [topicModalVisible, setTopicModalVisible] = useState(false);

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
            <View style={styles.header}>
                <Text
                    style={styles.headerTextStyles}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('my_profile')}
                </Text>
                <TouchableOpacity
                    style={styles.settingIconStyle}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.AccountSettingScreen.name)
                    }}>
                    <Image style={styles.settingIconStyle} resizeMode="contain" source={IMAGES.setting} />
                </TouchableOpacity>
            </View>
            <ScrollView style={[styles.container]}
                showsVerticalScrollIndicator={false}>
                <View style={styles.profileContainer}>
                    <View style={styles.horizontal}>
                        <View style={styles.userImageStyle} />
                        <View style={{ marginLeft: SCALE_SIZE(16), alignSelf: 'center' }}>
                            <Text
                                style={{ marginTop: -2 }}
                                color={COLORS.questionColor}
                                fontFamily={FONT.black}
                                size={SCALE_SIZE(16)}>
                                {'Alex Smith'}
                            </Text>
                            <Text
                                style={{ marginTop: -2 }}
                                color={COLORS.contentTwo}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(14)}>
                                {'0 Followers | 12 Following'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.snellViewStyle}>
                        <Text
                            style={styles.snellTextStyle}
                            color={COLORS.primary}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(12)}>
                            {'12,340 Snell'}
                        </Text>
                        <Text
                            style={styles.levelTextStyle}
                            color={COLORS.green}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(12)}>
                            {'4 Days Days streak'}
                        </Text>
                    </View>

                    <Text
                        style={styles.attachStyle}
                        color={COLORS.contentTwo}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(10)}>
                        {getTranslation('achievements')}
                    </Text>
                    <View style={[styles.horizontal]}>
                        <FlatList
                            style={{ marginTop: SCALE_SIZE(16) }}
                            data={achevementList}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <AchievementUserItem props={props} item={item} />
                                )
                            }}
                        />
                        <Image style={[styles.arrowImageStyle, {}]} resizeMode="center" source={IMAGES.ic_arrow} />
                    </View>
                </View>
                <Text
                    style={styles.inProgressStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(20)}>
                    {getTranslation('in_progress')}
                </Text>
                <FlatList
                    style={styles.listStyle}
                    data={inProList}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={({ item }) => {
                        return (
                            <InprogressListItem props={props} item={item} />
                        )
                    }}
                />
                <Text
                    style={styles.certificateStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(20)}>
                    {getTranslation('certificates')}
                </Text>
                <FlatList
                    style={styles.listStyle}
                    data={inProList}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={({ item }) => {
                        return <CertificateListItem props={props} item={item} />
                    }}
                />

                <Text
                    style={styles.certificateStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(20)}>
                    {getTranslation('topics_chosen')}
                </Text>
                <FlatList
                    style={styles.listStyle}
                    data={topicChooseList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return <TopicChooseItem props={props} item={item} topicSetModal={setTopicModalVisible} topicModalVisible={topicModalVisible} />
                    }}
                />
                <Text
                    style={styles.certificateStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(20)}>
                    {getTranslation('daily_goal')}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}>
                    <View style={[styles.listStyle, { flexDirection: 'row' }]}>
                        <View style={{ flexDirection: 'row', paddingVertical: SCALE_SIZE(16), paddingHorizontal: SCALE_SIZE(16), flex: 1.0 }}>
                            <Image style={styles.alamrImageStyle} resizeMode="contain" source={IMAGES.ic_alarm} />
                            <View style={{ flex: 1.0, marginLeft: SCALE_SIZE(16) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        color={COLORS.questionColor}
                                        fontFamily={FONT.bold}
                                        size={SCALE_SIZE(16)}>
                                        {'30 Min Daily'}
                                    </Text>
                                    <Text
                                        style={styles.activityTextStyle}
                                        color={COLORS.green}
                                        fontFamily={FONT.regular}
                                        size={SCALE_SIZE(12)}>
                                        {'Activate'}
                                    </Text>
                                </View>
                                <Text
                                    style={{ marginTop: -6 }}
                                    color={COLORS.contentTwo}
                                    fontFamily={FONT.medium}
                                    size={SCALE_SIZE(12)}>
                                    {'Serious Learner'}
                                </Text>
                            </View>
                        </View>
                        <Image style={[styles.arrowImageStyle, { marginRight: SCALE_SIZE(16) }]} resizeMode="center" source={IMAGES.ic_arrow} />
                    </View>
                </TouchableOpacity>
                <View style={{ height: SCALE_SIZE(24) }} />
            </ScrollView>
            <DailyLearningDialog item={modalVisible} modalVisible={setModalVisible} />
            <TopicChooseDialog topicModalVisible={topicModalVisible} topicSetModal={setTopicModalVisible} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    header: {
        flexDirection: 'row',
        paddingVertical: SCALE_SIZE(10),
        paddingHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.white
    },
    headerTextStyles: {
        alignSelf: 'center',
        flex: 1.0,
        letterSpacing: -0.24,
        marginTop: -2
    },
    settingIconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    },
    profileContainer: {
        marginHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        borderWidth: SCALE_SIZE(1),
        marginTop: SCALE_SIZE(24),
        borderColor: COLORS.contentThree,
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16)
    },
    horizontal: {
        flexDirection: 'row'
    },
    userImageStyle: {
        height: SCALE_SIZE(64),
        width: SCALE_SIZE(64),
        alignSelf: 'center',
        borderRadius: 64 / 2,
        backgroundColor: COLORS.color_E7E3E2
    },
    alamrImageStyle: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'center'
    },
    arrowImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
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
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(8),
    },
    activityTextStyle: {
        alignSelf: 'center',
        backgroundColor: COLORS.green_bck_color,
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(8),
        paddingVertical: SCALE_SIZE(4),
        marginLeft: SCALE_SIZE(10)
    },
    levelTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: COLORS.green_bck_color,
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(8),
    },
    hrTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8)
    },
    snellViewStyle: {
        flexDirection: 'row',
        marginTop: SCALE_SIZE(16)
    },
    attachStyle: {
        marginTop: SCALE_SIZE(20),
        marginLeft: SCALE_SIZE(8),
        letterSpacing: 0.76
    },
    inProgressStyle: {
        marginTop: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16),
        letterSpacing: -0.24
    },
    certificateStyle: {
        marginLeft: SCALE_SIZE(16),
        letterSpacing: -0.24,
        marginTop: SCALE_SIZE(16)
    },
    listStyle: {
        marginTop: SCALE_SIZE(16),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
    },
    viewStyle: {
        height: SCALE_SIZE(1),
        width: '100%',
        backgroundColor: COLORS.contentThree,
    },
})