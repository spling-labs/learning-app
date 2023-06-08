import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, TouchableHighlight } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";

//COMPONENT
import Text from "./Text";
import { FONT } from "../constants/font";
import { LocalizationContext } from "../context/LocalizationProvider";
import { LocalizationContextType } from "../types";
import { SCREENS } from "../screens";

export default function LeaderBordItemList(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [containerSelected, setContainerSelected] = useState(false);

    const containerBackgroundStyle = () => {
        return containerSelected ? style.selectContainerViewStyle : style.container;
    }

    const containerSelect = () => {
        props.props.navigation.navigate(SCREENS.ShareFacebookScreen.name)

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

                <View style={style.nameStyle}>
                    <View>
                        <Text
                            style={style.textStyle}
                            color={COLORS.black}
                            fontFamily={FONT.black}
                            size={SCALE_SIZE(16)}>
                            {props.item.userName}
                        </Text>
                        <Text
                            style={style.textStyle}
                            color={COLORS.contentColor}
                            fontFamily={FONT.regular}
                            size={SCALE_SIZE(12)}>
                            {props.item.programName}
                        </Text>
                    </View>

                </View>

                <View style={style.snellStyle}>
                    <View>
                        <Text
                            style={style.textStyle}
                            color={COLORS.questionColor}
                            fontFamily={FONT.regular}
                            size={SCALE_SIZE(16)}>
                            {props.item.snellItem}
                        </Text>
                        <Text
                            style={style.textStyle}
                            color={COLORS.contentColor}
                            fontFamily={FONT.regular}
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
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: SCALE_SIZE(12),
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.contentThree,
        height: SCALE_SIZE(64),
        borderBottomColor: COLORS.contentThree,
        borderBottomWidth: 3,

    },
    selectContainerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundColor,
        borderRadius: SCALE_SIZE(12),
        marginTop: SCALE_SIZE(16),
        marginHorizontal: SCALE_SIZE(16),
        borderWidth: SCALE_SIZE(1),
        borderColor: COLORS.borderShadow,
        height: SCALE_SIZE(64),
        borderBottomColor: COLORS.borderShadow,
        borderBottomWidth: 3,
    },
    ViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SCALE_SIZE(16)
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
        alignItems: 'center',
    },
    snellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: SCALE_SIZE(24)
    },
})