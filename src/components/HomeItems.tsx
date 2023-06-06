import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANT
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import Text from "./Text";

export default function HomeItems(props: any) {

    const item = props.item
    const index = props.index

    return (
        <>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.container, { marginTop: index == 0 ? SCALE_SIZE(16) : SCALE_SIZE(8) }]}
                onPress={() => {
                    props.onPress(item)
                }}>
                <View style={styles.innerView}>
                    <Text
                        style={{ alignSelf: 'center' }}
                        color={COLORS.black}
                        fontFamily={FONT.bold}
                        size={SCALE_SIZE(10)}>
                        {item.title}
                    </Text>
                    <Image style={styles.image} resizeMode='contain' source={item.image} />
                </View>
                {item.isLock &&
                    <Image style={styles.lockImage} resizeMode='cover' source={IMAGES.lock} />
                }
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 96,
        width: 96,
        borderRadius: 96 / 2,
        elevation: 2,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    innerView: {
        height: 88,
        width: 88,
        borderRadius: 88 / 2,
        alignSelf: 'center',
        backgroundColor: COLORS.slider_unfill,
        justifyContent: 'center'
    },
    image: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(2)
    },
    lockImage: {
        height: SCALE_SIZE(32),
        width: SCALE_SIZE(32),
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 2,
        right: 13
    }
})