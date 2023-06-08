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
import { ProgressSlider, Text, Button } from '../components';

export default function QuizModel(props: any) {

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
                        props.onClose()
                    }}
                />
                <View style={styles.item}>
                    <Image style={styles.image} resizeMode="contain" source={IMAGES.quizLogo} />
                    <Text
                        style={{ alignSelf: 'center', marginTop: SCALE_SIZE(24) }}
                        color={COLORS.questionColor}
                        fontFamily={FONT.black}
                        align={'center'}
                        size={SCALE_SIZE(24)}>
                        {'You earned 20 out of\n32 snell'}
                    </Text>
                    <Text
                        style={{ marginTop: SCALE_SIZE(24) }}
                        color={COLORS.contentTwo}
                        fontFamily={FONT.regular}
                        size={SCALE_SIZE(14)}>
                        {'You make 4 mistakes. Re-take quiz again?'}
                    </Text>
                    <Button
                        style={[styles.btnContinue]}
                        backgroundColor={COLORS.primary}
                        title={getTranslation('re_take_quiz')}
                        size={SCALE_SIZE(16)}
                        color={COLORS.white}
                        family={FONT.bold}
                        onPress={() => {
                            props.retackQuiz()
                        }}
                    />
                    <TouchableOpacity style={{ marginVertical: SCALE_SIZE(16), alignSelf: 'center' }}
                        onPress={() => {
                            props.skip()
                        }}>
                        <Text
                            color={COLORS.primary}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('skip_lession')}
                        </Text>
                    </TouchableOpacity>
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
    image: {
        width: SCALE_SIZE(136),
        height: SCALE_SIZE(120),
        alignSelf: 'center'
    },
    btnContinue: {
        marginTop: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },

})
