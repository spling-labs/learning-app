import React, { useEffect, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

export default function ProgressSlider(props: any) {

    const fillCount = props.fillCount
    const totalCount = props.totalCount

    const progress = (fillCount * 100) / totalCount
    console.log(progress)
    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.fillProgress, {
                width: `${progress}%`
            }]}>
                <Image style={styles.stripImage} resizeMode='contain' source={IMAGES.strip} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.slider_unfill,
        borderRadius: SCALE_SIZE(8),
        height: SCALE_SIZE(16),
        flexDirection: 'row'
    },
    fillProgress: {
        borderRadius: SCALE_SIZE(8),
        height: SCALE_SIZE(16),
        backgroundColor: COLORS.primary,
        justifyContent:'center'
    },
    stripImage:{
        width:'90%',
        alignSelf:'center'
    }
})