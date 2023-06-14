import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, quiz } from "../types";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";


//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text } from '.'

export default function ImageChosse(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.opecity}
                    onPress={() => {

                    }}
                />
                <View style={[styles.cancelBtn, { marginBottom: SCALE_SIZE(8) }]}>
                    <Text
                        style={styles.btnCancel}
                        color={COLORS.questionColor}
                        fontFamily={FONT.medium}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('Set a new picture or view the current one')}
                    </Text>
                    <View style={styles.devider} />
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        activeOpacity={1}
                        onPress={() => {
                            props.chossePicture()
                        }}>
                        <Text
                            style={styles.btnCancel}
                            color={COLORS.questionColor}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('Choose picture')}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.devider} />
                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        activeOpacity={1}
                        onPress={() => {
                            props.takePicture()
                        }}>
                        <Text
                            style={styles.btnCancel}
                            color={COLORS.questionColor}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('take picture')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.cancelBtn}
                    activeOpacity={1}
                    onPress={() => {
                        props.onClosed()
                    }}>
                    <Text
                        style={styles.btnCancel}
                        color={COLORS.delete_color}
                        fontFamily={FONT.medium}
                        size={SCALE_SIZE(16)}>
                        {getTranslation('Cancel')}
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(59, 66, 74, 0.33)',

    },
    item: {
        backgroundColor: 'rgba(59, 66, 74, 0.33)',
    },
    opecity: {
        flex: 1.0,
    },
    cancelBtn: {
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(24)
    },
    btnCancel: {
        alignSelf: 'center',
        letterSpacing: 0.24,
        marginTop: -3
    },
    devider: {
        backgroundColor: '#E5E5E5',
        height: SCALE_SIZE(1),
        marginVertical: SCALE_SIZE(16)
    }

})

