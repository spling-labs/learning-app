import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { ProgressSlider, Text, Button } from '../components';

export default function StartLearningModel(props: any) {

    const item = props.item

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.startLearning}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.opecity}
                    onPress={() => {
                        props.onClose()
                    }}
                />
                <View style={styles.item}>
                    <Text
                        color={COLORS.black}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(16)}>
                        {item?.title}
                    </Text>
                    <ProgressSlider
                        type={1}
                        style={styles.progress}
                        fillCount={0}
                        totalCount={3} />
                    <Text
                        style={{ marginTop: SCALE_SIZE(2), marginLeft: SCALE_SIZE(2) }}
                        color={COLORS.contentTwo}
                        fontFamily={FONT.medium}
                        size={SCALE_SIZE(16)}>
                        {'Chapter 1/9'}
                    </Text>
                    <Button
                        style={styles.btnContinue}
                        backgroundColor={COLORS.primary}
                        title={'Start Learning'}
                        size={SCALE_SIZE(16)}
                        color={COLORS.white}
                        family={FONT.bold}
                        onPress={() => {
                            props.onLearning()
                        }}
                    />
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
        backgroundColor: COLORS.white,
        paddingVertical: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        elevation: 2,
        borderRadius: 12
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