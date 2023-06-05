import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

//ASSETS
import { COLORS, IMAGES } from "../assets";
import { FONT } from "../constants/font";

//TYPES
import { LocalizationContextType } from '../types';

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

const Tabbar = (props: any) => {


    function onPress(name: string, index: number) {
        props.navigation.emit(
            {
                type: 'onPress',
                target: name,
                canPreventDefault: true
            }
        )
        props.navigation.navigate(name)
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.tabContainer}>
                {props.state.routes.map((route: any, index: number) => {
                    return (
                        <Item
                            key={index}
                            onPress={() => onPress(route.name, index)}
                            title={route.name}
                            index={index}
                            selected={props.state.index == index}
                        />
                    )
                })}
            </View>
            <SafeAreaView />
        </View>
    )
}

const Item = (props: any) => {
    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const images = [IMAGES.home, IMAGES.courses, IMAGES.leaderboard, IMAGES.comment, IMAGES.profile]
    const name = [getTranslation('Home'), getTranslation('Courses'), getTranslation('Leaderboard'), getTranslation('Community'), getTranslation('Profile')]

    return (
        <TouchableOpacity onPress={props.onPress}
            style={styles.itemContainer}>
            <View style={{ flex: 1.0, justifyContent: 'center' }}>
                <Image style={props.selected ? styles.itemImageSelected : styles.itemImage}
                    resizeMode='contain'
                    source={images[props.index]} />
                <Text style={{ marginTop: SCALE_SIZE(2) }}
                    color={props.selected ? COLORS.primary : COLORS.contentTwo}
                    fontFamily={FONT.bold}
                    size={SCALE_SIZE(10)}>
                    {name[props.index]}
                </Text>
            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    mainView: {
        backgroundColor: COLORS.white,
        shadowColor: '#F9F9F9',
        shadowOffset: {
            height: 1,
            width: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        borderTopLeftRadius: SCALE_SIZE(16),
        borderTopRightRadius: SCALE_SIZE(16),
        elevation: 6
    },
    tabContainer: {
        height: SCALE_SIZE(85),
        flexDirection: 'row'
    },
    itemContainer: {
        flex: 1.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImageSelected: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        tintColor: COLORS.primary,
        alignSelf: 'center'
    },
    itemImage: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        tintColor: COLORS.contentTwo,
        alignSelf: 'center'
    }
})

export default Tabbar