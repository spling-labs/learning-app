import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";

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
import { Text, Button } from "../components";


export default function GetStarted(props: any) {

    const { setI18nConfig, getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <ImageBackground style={styles.container}
            resizeMode="cover"
            source={IMAGES.backgroundWelcome}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
            <View style={{ flex: 1.0 }}>
            </View>
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <Image resizeMode="contain" style={styles.image} source={IMAGES.logo} />
                <Text
                    style={styles.description}
                    color={COLORS.white}
                    align={'center'}
                    fontFamily={FONT.black}
                    numberOfLines={2}
                    size={SCALE_SIZE(32)}>
                    {getTranslation('starting_msg')}
                </Text>
                <Text
                    style={{ marginTop: SCALE_SIZE(8), marginHorizontal:SCALE_SIZE(32) }}
                    color={COLORS.desColor}
                    align={'center'}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(18)}>
                    {getTranslation('starting_des')}
                </Text>
            </View>
            <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                <Button
                    style={styles.btnGetStarted}
                    backgroundColor={COLORS.white}
                    title={getTranslation('get_started')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.primary}
                    family={FONT.bold}
                    onPress={() => {
                        props.navigation.navigate(SCREENS.ChooseTopic.name)
                    }}
                />
                <Button
                    style={styles.btnAccount}
                    backgroundColor={COLORS.transparent_primaty}
                    title={getTranslation('have_account')}
                    size={SCALE_SIZE(16)}
                    color={COLORS.white}
                    family={FONT.bold}
                    onPress={()=>{
                        
                    }}
                />
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 88,
        alignSelf: 'center'
    },
    description: {
        marginHorizontal: SCALE_SIZE(24),
        marginTop: SCALE_SIZE(24)
    },
    btnAccount: {
        marginTop: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(32),
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.shadow_color
    },
    btnGetStarted: {
        marginHorizontal: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.shadow_color
    }

})