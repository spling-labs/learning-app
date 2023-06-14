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
import { Text } from '../components'

export default function Lock(props: any) {

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
                <View style={styles.item}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.image} resizeMode='contain' source={IMAGES.lockImage} />
                        <Text
                            style={{ marginLeft: SCALE_SIZE(8), marginTop: SCALE_SIZE(-2) }}
                            color={COLORS.black}
                            fontFamily={FONT.black}
                            align={'center'}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('lession_locked')}
                        </Text>
                    </View>
                    <Text
                        style={{ marginTop: SCALE_SIZE(16) }}
                        color={COLORS.contentTwo}
                        fontFamily={FONT.semiBold}
                        size={SCALE_SIZE(14)}>
                        {getTranslation('lession_locked_msg')}
                    </Text>
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}
                        activeOpacity={1}
                        onPress={()=>{
                            props.onOk()
                        }}>
                        <Text
                            style={{ marginTop: SCALE_SIZE(16), alignSelf: 'flex-end' }}
                            color={COLORS.contentTwo}
                            fontFamily={FONT.bold}
                            size={SCALE_SIZE(16)}>
                            {getTranslation('Ok')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.opecity}
                    onPress={() => {

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
        width: SCALE_SIZE(24),
        height: SCALE_SIZE(24),
    },

})
