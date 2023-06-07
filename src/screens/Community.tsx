import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity, Modal, Dimensions } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, userCommunityList } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button, CommunityListItem, BottomSheetDialog } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";

export default function Community(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    const [modalVisible, setModalVisible] = useState(false);

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
            <View style={styles.headerRowStyle}>
                <View>
                    <Text
                        color={COLORS.black}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(24)}>
                        {getTranslation('Community')}
                    </Text>
                    <Text
                        color={COLORS.contentTwo}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('otther_meet_msg')}
                    </Text>
                </View>
                <View style={styles.headerImageStyle}>
                    <Image style={styles.headerIcon} resizeMode="contain" source={IMAGES.search} />
                    <Image style={styles.headerIcon} resizeMode="contain" source={IMAGES.shortby} />
                </View>
            </View>
            <View style={styles.viewStyle} />
            <View style={{ flex: 1 }}>
                <View >
                    <FlatList
                        data={userCommunityList}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return <CommunityListItem props={props} item={item} modalVisible={setModalVisible} />
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.postBackGroundStyle}
                onPress={() => {
                    console.log("dsakh")
                }}>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={styles.editPostIcon} resizeMode="contain" source={IMAGES.editpost} />

                    <Text
                        style={styles.postTextStyle}
                        color={COLORS.white}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('post')}
                    </Text>
                </View>

            </TouchableOpacity>

            <BottomSheetDialog item={modalVisible} modalVisible={setModalVisible} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
    headerRowStyle: {
        flexDirection: 'row',
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        justifyContent: 'space-between',
    },
    headerIcon: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(16)
    },
    headerImageStyle: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    viewStyle: {
        marginBottom: SCALE_SIZE(16),
        height: SCALE_SIZE(3),
        width: '100%',
        backgroundColor: COLORS.contentThree,
    },
    postBackGroundStyle: {
        position: 'absolute',
        bottom: 0,
        right: 5,
        backgroundColor: COLORS.primary,
        borderRadius: SCALE_SIZE(32),
        padding: SCALE_SIZE(8),
        marginBottom: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(16)
    },
    editPostIcon: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        marginLeft: SCALE_SIZE(8)
    },
    postTextStyle: {
        marginRight: SCALE_SIZE(8),
        marginLeft: SCALE_SIZE(8)
    }
})