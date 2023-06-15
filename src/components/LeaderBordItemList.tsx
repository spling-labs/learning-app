import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, TouchableHighlight } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//SCREENS
import { SCREENS } from "../screens";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//TYPES
import { LocalizationContextType } from "../types";

//COMPONENT
import Text from "./Text";


export default function LeaderBordItemList(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [containerSelected, setContainerSelected] = useState(false);

    const containerBackgroundStyle = () => {
        return containerSelected ? style.selectContainerViewStyle : style.container;
    }

    const containerSelect = () => {

    }

    return (
        <TouchableHighlight
            underlayColor={COLORS.transparent_primaty}
            onPress={() => {
                containerSelect()
            }}
            onShowUnderlay={() => setContainerSelected(true)}
            onHideUnderlay={() => setContainerSelected(false)}>
            <View style={containerBackgroundStyle()}>
                <View style={style.ViewStyle}>
                    <Image style={style.userImageStyle} resizeMode="contain" source={IMAGES.winner} />
                    <Text
                        style={style.textStyle}
                        color={COLORS.black}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(16)}>
                        {props.item.id}
                    </Text>
                </View>

                <View>
                    <Text
                        color={COLORS.questionColor}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(16)}>
                        {props.item.userName}
                    </Text>
                    <Text
                        color={COLORS.contentTwo}
                        fontFamily={FONT.medium}
                        size={SCALE_SIZE(12)}>
                        {props.item.programName}
                    </Text>
                </View>

                <View style={style.snellStyle}>
                    <View>
                        <Text
                            color={COLORS.questionColor}
                            fontFamily={FONT.semiBold}
                            size={SCALE_SIZE(14)}>
                            {props.item.snellItem}
                        </Text>
                        <Text
                            color={COLORS.contentTwo}
                            fontFamily={FONT.medium}
                            size={SCALE_SIZE(12)}>
                            {props.item.NFT}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        borderBottomColor: COLORS.contentThree,
        borderBottomWidth: 3,
        marginTop: SCALE_SIZE(16),
        borderColor: COLORS.contentThree,
        borderWidth: SCALE_SIZE(1)        
    },
    selectContainerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.backgroundColor,
        borderRadius: SCALE_SIZE(12),
        marginHorizontal: SCALE_SIZE(16),
        paddingVertical: SCALE_SIZE(16),
        paddingHorizontal: SCALE_SIZE(16),
        borderBottomColor: COLORS.borderShadow,
        borderBottomWidth: 3,
        marginTop: SCALE_SIZE(16),
        borderColor:  COLORS.borderShadow,
        borderWidth: SCALE_SIZE(1)        
    },
    ViewStyle: {
        flexDirection: 'row',
        alignSelf:'center'
    },
    IconStyle: {
        height: SCALE_SIZE(16),
        width: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16),
    },
    arrowStyle: {
        height: SCALE_SIZE(8),
        width: SCALE_SIZE(16),
        marginRight: SCALE_SIZE(8),

    },
    textStyle: {
        marginLeft: SCALE_SIZE(16),
    },
    userImageStyle: {
        height: SCALE_SIZE(24),
        width: SCALE_SIZE(24),
        alignSelf: 'center',
    },
    nameStyle: {
        flexDirection: 'row',
    },
    snellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: SCALE_SIZE(24)
    },
})