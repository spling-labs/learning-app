import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, Platform, ImageBackground, FlatList, TouchableOpacity } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType, availableCourseList } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//COMPONENT
import { Text, Button } from "../components";

//PACKAGES
import { useFocusEffect } from "@react-navigation/native";
import AvailableCoursesItemList from "../components/AvailableCoursesItemList";
import { LocalizationContext } from "../context/LocalizationProvider";
import AvaialbeCoursesBottomDialog from "../components/AvailableCoursesBottomDialog";

export default function Courses(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;
    const [modalVisible, setModalVisible] = useState(false);

    useFocusEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(COLORS.slider_unfill);
        StatusBar.setTranslucent(false);
    })

    return (
            <View style={styles.container}>
                <ImageBackground style={styles.container}
                    source={IMAGES.bgCreateProfile}
                    resizeMode="stretch">
                    <Text
                        style={styles.avaibleTxtStyle}
                        color={COLORS.black}
                        fontFamily={FONT.black}
                        size={SCALE_SIZE(24)}>
                        {getTranslation('available_courses')}
                    </Text>

                    <FlatList
                        data={availableCourseList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return <AvailableCoursesItemList props={props} item={item} modal={setModalVisible} />
                        }}
                    />
                </ImageBackground>
                <AvaialbeCoursesBottomDialog item={modalVisible} modalVisible={setModalVisible} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    avaibleTxtStyle: {
        marginTop: SCALE_SIZE(16),
        marginLeft: SCALE_SIZE(16)
    }
})