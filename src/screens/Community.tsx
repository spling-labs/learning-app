import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity } from "react-native";

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
    const [modalActionVisible, setModalActionVisible] = useState('');

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
                        color={COLORS.questionColor}
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
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(true)
                            setModalActionVisible('actions')
                        }}>
                        <Image style={styles.headerIcon} resizeMode="contain" source={IMAGES.shortby} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewStyle} />
            
            <View style={{ flex: 1 }}>
                <View >
                    <FlatList
                        data={userCommunityList}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => {
                            return <CommunityListItem props={props} item={item} modalVisible={setModalVisible} modalActionVisible={setModalActionVisible} />
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
                        fontFamily={FONT.bold}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('post')}
                    </Text>
                </View>
            </TouchableOpacity>
            <BottomSheetDialog item={modalVisible} modalVisible={setModalVisible} modalActionVisible={modalActionVisible} />
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
        marginLeft: SCALE_SIZE(20)
    },
    headerImageStyle: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    viewStyle: {
        height: SCALE_SIZE(3),
        width: '100%',
        backgroundColor: COLORS.contentThree,
    },
    postBackGroundStyle: {
        position: 'absolute',
        bottom: 16,
        right: 5,
        backgroundColor: COLORS.primary,
        paddingHorizontal:SCALE_SIZE(32),
        paddingVertical:SCALE_SIZE(16),
        borderRadius: SCALE_SIZE(32),              
        borderBottomColor: COLORS.drop_shadow,
        borderBottomWidth: 4,
    },
    editPostIcon: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),        
        alignSelf:'center'
    },
    postTextStyle: {
        marginLeft: SCALE_SIZE(8),
        marginTop:SCALE_SIZE(-3)
    }
})