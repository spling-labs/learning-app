import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, FlatList, TextInput } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, languageList } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text, Header } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";
import { LocalizationContext } from "../context/LocalizationProvider";

export default function ChangeLanguageScreen(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    const [search, setSearch] = useState<string>('')

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
            <Header
                type={2}
                title={getTranslation('change_language')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <View style={styles.input}>
                <Image style={styles.searchImage} resizeMode="center" source={IMAGES.search} />

                <TextInput
                    style={styles.inputStyles}
                    numberOfLines={1}
                    placeholder={getTranslation('search')}
                    value={search}
                    placeholderTextColor={COLORS.contentTwo}
                    onChangeText={text => setSearch(text)}>
                </TextInput>
            </View>
            <FlatList
                scrollEnabled={false}
                style={{ marginTop: SCALE_SIZE(8), marginHorizontal: SCALE_SIZE(16) }}
                data={languageList}
                ItemSeparatorComponent={ItemSeparatorView}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemViewStyle}>
                            <Text
                                style={styles.textStyle}
                                color={COLORS.questionColor}
                                fontFamily={FONT.medium}
                                size={SCALE_SIZE(16)}>
                                {item.title}
                            </Text>
                            {
                                item.select == "selected" &&
                                <Image style={styles.IconStyle} resizeMode="center" source={IMAGES.check} />
                            }

                        </View>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    searchImage: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center',
        tintColor: COLORS.questionColor
    },
    input: {
        flexDirection: 'row',
        paddingHorizontal: SCALE_SIZE(16),
        backgroundColor: COLORS.color_F6F6F6,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        marginTop: SCALE_SIZE(24)
    },
    inputStyles: {
        fontFamily: FONT.bold,
        color: COLORS.questionColor,
        marginLeft: SCALE_SIZE(16),
        fontSize: SCALE_SIZE(16),
        lineHeight: SCALE_SIZE(28),
        letterSpacing: -0.24
    },
    viewStyle: {
        height: SCALE_SIZE(1),
        width: '100%',
        backgroundColor: COLORS.contentThree,
    },
    itemViewStyle: {
        flexDirection: 'row',
    },
    textStyle: {
        marginVertical: SCALE_SIZE(8),
        alignSelf: 'center',
        flex: 1.0,
        letterSpacing: -0.24,
        lineHeight: SCALE_SIZE(24)
    },
    IconStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    },
})