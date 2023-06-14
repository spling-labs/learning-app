import React, { useContext, useState } from "react";
import { View, StyleSheet, StatusBar, ImageBackground, TextInput } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Text, Button, Header } from "../components";
import { useFocusEffect } from "@react-navigation/native";


export default function ShareFacebookScreen(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    const [title, setTitle] = useState('');

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.white);
        StatusBar.setTranslucent(false);
    })

    return (
        <View style={styles.container}>
            <Header
                type={1}
                title={getTranslation('share_on_facebook')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />

            <View style={{ flex: 1.0 }}>
                <View style={styles.shareStyle}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground style={styles.userImageStyle} source={IMAGES.background} />
                        <Text
                            color={COLORS.black}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(16)}>
                            {'Faruk Ahmed'}
                        </Text>
                    </View>
                    <TextInput
                        style={styles.titleInputText}
                        placeholder={'Say somethings about this achievement...'}
                        value={title}
                        placeholderTextColor={COLORS.contentColor}
                        onChangeText={text => setTitle(text)}
                    />
                    <View style={styles.programmingStyle}>
                        <View >
                            <ImageBackground style={styles.logoImageStyle} source={IMAGES.background} />
                            <Text
                                style={styles.cornerTextStyle}
                                color={COLORS.white}
                                align={'center'}
                                fontFamily={FONT.regular}
                                size={SCALE_SIZE(12)}>
                                {'Level 3'}
                            </Text>
                        </View>
                        <View style={{ marginLeft: SCALE_SIZE(8) }}>
                            <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(16)}>{'Programming Ninja'}</Text>
                            <Text color={COLORS.contentColor} fontFamily={FONT.regular} size={SCALE_SIZE(16)}>{'It is a great achievement for you. '}</Text>
                            <Text color={COLORS.black} fontFamily={FONT.black} size={SCALE_SIZE(14)}>{'122 Nft | Badge1 | 12,37 XP'}</Text>
                        </View>

                    </View>
                </View>

            </View>
            <Button style={styles.btnContinue} backgroundColor={COLORS.primary} title={getTranslation('share_now')} size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.bold}
                onPress={() => {
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        marginBottom: SCALE_SIZE(24),
        borderBottomColor: COLORS.drop_shadow
    },
    shareStyle: {
        padding: SCALE_SIZE(8),
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
        borderBottomColor: COLORS.contentThree,
        borderBottomWidth: 3,
    },
    userImageStyle: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'center',
        marginRight: SCALE_SIZE(8),
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        backgroundColor: COLORS.contentThree,
        borderColor: '#eee',
        textAlign: 'center',
    },
    titleInputText: {
        fontSize: SCALE_SIZE(16),
    },
    programmingStyle: {
        flexDirection: 'row',
        backgroundColor: COLORS.color_F6F6F6,
        paddingBottom: SCALE_SIZE(8),
        borderRadius: SCALE_SIZE(8),
        paddingLeft: SCALE_SIZE(16),
        paddingTop: SCALE_SIZE(8)
    },
    cornerTextStyle: {
        backgroundColor: '#FF9900',
        borderRadius: SCALE_SIZE(24),
        paddingLeft: SCALE_SIZE(8),
        paddingRight: SCALE_SIZE(8),
        marginTop: SCALE_SIZE(54),
        position: 'absolute',
        alignSelf: "center"
    },
    logoImageStyle: {
        height: SCALE_SIZE(64),
        width: SCALE_SIZE(64),
        alignSelf: 'center',
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderBottomWidth: 4,
        borderBottomColor: COLORS.image_shadow,
        backgroundColor: COLORS.contentThree,
    },
})