import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text } from "../components";

export default function LactureItems(props: any) {

    const item = props.item
    const index = props.index

    return (
        <TouchableOpacity
            style={[styles.container,
            { marginTop: index == 0 ? SCALE_SIZE(0) : SCALE_SIZE(8) }]}
            onPress={() => {
                props.onPress(item)
            }}>
            <Image style={styles.lactureImage} resizeMode="contain" source={IMAGES.lactureImage} />
            <View style={styles.verticalView}>
                <Text
                    color={COLORS.questionColor}
                    fontFamily={FONT.black}
                    size={SCALE_SIZE(16)}>
                    {item.title}
                </Text>
                <Text
                    style={{ marginTop: SCALE_SIZE(-2) }}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.semiBold}
                    size={SCALE_SIZE(12)}>
                    {item.lactures.length + " Lessons | 12 Snell"}
                </Text>
            </View>
            <Image style={styles.lockImage} resizeMode="contain" source={item.isLock ? IMAGES.lactureLock : IMAGES.completed} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        marginHorizontal: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        flexDirection: 'row',
        borderRadius: SCALE_SIZE(8)
    },
    lactureImage: {
        height: 37,
        width:  37,
        alignSelf: 'center'
    },
    verticalView: {
        flex: 1.0,
        flexDirection: 'column',
        marginHorizontal: SCALE_SIZE(16),
        alignSelf: 'center'
    },
    lockImage: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center'
    }
})