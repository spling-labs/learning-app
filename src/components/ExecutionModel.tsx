import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { ProgressSlider, Text, Button } from '../components';

export default function ExecutionModel(props: any) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isvisible}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.opecity}
                    onPress={() => {
                        props.onClose()
                    }}
                />
                <View style={styles.item}>
                    <Text
                        style={{ marginTop: SCALE_SIZE(16) }}
                        color={COLORS.white}
                        fontFamily={FONT.medium}
                        size={SCALE_SIZE(16)}>
                        {'Hello World'}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.opecity}
                    onPress={() => {
                        props.onClose()
                    }}
                />
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
        backgroundColor: COLORS.questionColor,
        paddingHorizontal: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        elevation: 2,
        borderRadius: 12,
        height: SCALE_SIZE(160),
    },
    opecity: {
        flex: 1.0,
    },
    progress: {
        marginTop: SCALE_SIZE(16)
    },
    btnContinue: {
        marginTop: SCALE_SIZE(24),
        marginBottom: SCALE_SIZE(8),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
})