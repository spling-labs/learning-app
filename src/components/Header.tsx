import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANT
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text } from '../components'

export default function Header(props: any) {

    return (
        <View style={styles.container}>
            {props.onBackPress &&
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.backButton, { height: SCALE_SIZE(32), width: SCALE_SIZE(32), justifyContent: 'center', alignSelf: 'center' }]}
                    onPress={() => {
                        props.onBackPress()
                    }}>
                    <Image style={styles.backButton} resizeMode="contain" source={IMAGES.back} />
                </TouchableOpacity>
            }
            {props.title ?
                <View style={styles.textView}>
                    <Text
                        style={{ alignSelf: 'center', textAlign:'center' }}
                        color={COLORS.black}
                        align={'center'}                        
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(16)}>
                        {props.title}
                    </Text>
                </View>
                :
                <View style={styles.textView} />
            }
            {props.mask &&
                <View style={styles.maskView}>
                    <Image style={styles.maskImage} resizeMode="contain" source={IMAGES.mask} />
                    <Text
                        style={{ alignSelf: 'center', marginLeft: SCALE_SIZE(8) }}
                        color={COLORS.primary}
                        fontFamily={FONT.semiBold}
                        size={SCALE_SIZE(18)}>
                        {props.mask_number}
                    </Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'android' ? 56 : 44,
        backgroundColor: COLORS.white,
        elevation: 1,
        shadowColor: COLORS.black,
        shadowRadius: 5,
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowOpacity: 0.2,
        flexDirection: 'row',
        paddingHorizontal: SCALE_SIZE(16)
    },
    backButton: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    },
    textView: {
        flex: 1.0,
        alignSelf: 'center',
    },
    maskView: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    maskImage: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    }
})