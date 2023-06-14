import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";

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
import { Text } from "../components";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import InprogressListItem from "../components/InprogressListItem";
import TopicChooseItem from "../components/TopicChoose";
import DailyLearningDialog from "../components/DailyLearningDialog";
import AchievementUserItem from "../components/AchievementUserItem";
import CertificateListItem from "../components/CertificatesListItem";
import TopicChooseDialog from "../components/TopicChooseDialog";

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
                        <Text style={styles.levelTextStyle} color={COLORS.green} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'4 Days Days streak'}</Text>
                    </View>

                    <Text
                        style={styles.attachStyle}
                        color={COLORS.contentColor}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(10)}>
                        {getTranslation('achievements')}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            style={{ marginTop: SCALE_SIZE(16), marginLeft: SCALE_SIZE(8) }}
                            data={achevementList}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return <AchievementUserItem props={props} item={item} />
                            }}
                        />
                        <Image style={[styles.arrowImageStyle, { marginLeft: SCALE_SIZE(8) }]} resizeMode="contain" source={IMAGES.ic_arrow} />

                    </View>

                </View>
                <Text
                    style={styles.inProgressStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
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
                        return <InprogressListItem props={props} item={item} />
                    }}
                />
                <Text
                    style={styles.certificateStyle}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
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
                    fontFamily={FONT.black}
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
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(20)}>
                    {getTranslation('daily_goal')}
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}>
                    <View style={[styles.listStyle, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.alamrImageStyle} resizeMode="contain" source={IMAGES.ic_alarm} />
                            <View style={{ marginLeft: SCALE_SIZE(16) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        color={COLORS.questionColor}
                                        fontFamily={FONT.black}
                                        size={SCALE_SIZE(16)}>
                                        {'30 Min Daily'}
                                    </Text>
                                    <Text style={styles.activityTextStyle} color={COLORS.green} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'Activate'}</Text>
                                </View>
                                <Text color={COLORS.contentTwo} fontFamily={FONT.regular} size={SCALE_SIZE(12)}>{'Serious Learner'}</Text>
                            </View>
                        </View>
                        <Image style={styles.arrowImageStyle} resizeMode="contain" source={IMAGES.ic_arrow} />

                    </View>
                </TouchableOpacity>

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
    alamrImageStyle: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        marginLeft: SCALE_SIZE(16),
        alignSelf: 'center'
    },
    arrowImageStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        alignSelf: 'center',
        marginRight: SCALE_SIZE(8)
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
    activityTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: COLORS.green_bck_color,
        borderRadius: SCALE_SIZE(32),
        paddingHorizontal: SCALE_SIZE(8),
        paddingVertical: SCALE_SIZE(2)
    },
    levelTextStyle: {
        alignSelf: 'center',
        marginLeft: SCALE_SIZE(8),
        backgroundColor: COLORS.green_bck_color,
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
    certificateStyle: {
        marginLeft: SCALE_SIZE(16)
    },
    listStyle: {
        marginTop: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(8),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
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