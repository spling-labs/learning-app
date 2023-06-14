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
        StatusBar.setBackgroundColor(modalVisible ? 'transparent' : COLORS.slider_unfill);
        StatusBar.setTranslucent(true);
    })

    return (
        <ImageBackground style={styles.container}
            source={IMAGES.bgCreateProfile}
            resizeMode='stretch'>
            <Text
                style={styles.avaibleTxtStyle}
                color={COLORS.black}
                fontFamily={FONT.black}
                size={SCALE_SIZE(24)}>
                {getTranslation('available_courses')}
            </Text>
            <FlatList
                data={availableCourseList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <AvailableCoursesItemList props={props} item={item} modal={setModalVisible} />
                }}
            />
            <AvaialbeCoursesBottomDialog
                item={modalVisible}
                modalVisible={setModalVisible}
                onClose={()=>{
                    setModalVisible(false)
                }} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    avaibleTxtStyle: {
        marginTop: StatusBar.currentHeight + SCALE_SIZE(8),
        marginLeft: SCALE_SIZE(16)
    }
})