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

export default function Rate(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [ratting, setRatting] = useState<number>(0)

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={COLORS.white} />
            <Header
                type={2}
                title={getTranslation('Rate Us')}
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <View style={styles.feedbackContainer}>
                <View style={styles.starContainer}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.starImage, { margin: 4 }]}
                        onPress={() => {
                            setRatting(1)
                        }}>
                        <Image style={styles.starImage} resizeMode="contain" source={ratting < 1 ? IMAGES.starUnfill : IMAGES.star} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.starImage, { margin: 4 }]}
                        activeOpacity={1}
                        onPress={() => {
                            setRatting(2)
                        }}>
                        <Image style={styles.starImage} resizeMode="contain" source={ratting < 2 ? IMAGES.starUnfill : IMAGES.star} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.starImage, { margin: 4 }]}
                        activeOpacity={1}
                        onPress={() => {
                            setRatting(3)
                        }}>
                        <Image style={styles.starImage} resizeMode="contain" source={ratting < 3 ? IMAGES.starUnfill : IMAGES.star} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.starImage, { margin: 4 }]}
                        activeOpacity={1}
                        onPress={() => {
                            setRatting(4)
                        }}>
                        <Image style={styles.starImage} resizeMode="contain" source={ratting < 4 ? IMAGES.starUnfill : IMAGES.star} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.starImage, { margin: 4 }]}
                        activeOpacity={1}
                        onPress={() => {
                            setRatting(5)
                        }}>
                        <Image style={styles.starImage} resizeMode="contain" source={ratting < 5 ? IMAGES.starUnfill : IMAGES.star} />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{ marginTop: SCALE_SIZE(10), letterSpacing: -0.24 }}
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    align={'center'}
                    size={SCALE_SIZE(24)}>
                    {getTranslation('Your feedback is important')}
                </Text>
                <Text
                    style={{ letterSpacing: -0.24, marginHorizontal: SCALE_SIZE(16), lineHeight: SCALE_SIZE(24) }}
                    color={COLORS.questionColor}
                    fontFamily={FONT.medium}
                    align={'center'}
                    size={SCALE_SIZE(15)}>
                    {getTranslation('feedback_msg')}
                </Text>
                <View style={styles.btnGood}>
                    <Text
                        style={{ letterSpacing: -0.24, lineHeight: SCALE_SIZE(24) }}
                        color={COLORS.questionColor}
                        fontFamily={FONT.bold}
                        align={'center'}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('Not Good')}
                    </Text>
                </View>
            </View>
            <View style={{justifyContent:'flex-end', flex:0.4}}>
                <Button
                    style={styles.btnSubmit}
                    backgroundColor={COLORS.primary}
                    title={getTranslation('Submit')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={() => {

                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white
    },
    feedbackContainer: {
        flex: 0.6,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    starContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    starImage: {
        height: SCALE_SIZE(35),
        width: SCALE_SIZE(35),
        alignSelf: 'center'
    },
    btnGood: {
        marginTop: SCALE_SIZE(32),
        alignSelf: 'center',
        paddingVertical: SCALE_SIZE(8),
        paddingHorizontal: SCALE_SIZE(24),
        borderRadius: SCALE_SIZE(12),
        backgroundColor: COLORS.contentThree
    },
    btnSubmit: {
        marginBottom: SCALE_SIZE(32),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow,
        alignSelf: 'center'
    }
})

