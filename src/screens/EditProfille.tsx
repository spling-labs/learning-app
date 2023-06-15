import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity, Alert } from "react-native";

//ASSETS
import { COLORS, IMAGES } from "../assets";

//TYPES
import { LocalizationContextType } from "../types";

//SCREENS
import { SCREENS } from ".";

//CONSTANTS
import { SCALE_SIZE } from "../constants/uttils";
import { FONT } from "../constants/font";

//CONTEXT
import { LocalizationContext } from "../context/LocalizationProvider";

//COMPONENT
import { Header, Input, Text, Button, ImageChosse } from '../components'

//PACKAGES
import ImagePicker from 'react-native-image-crop-picker';


export default function EditProfile(props: any) {

    const { getTranslation } = useContext(LocalizationContext) as LocalizationContextType;

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [imagePicker, setImagePicker] = useState<boolean>(false)
    const [images, setImages] = useState<string>('')
    const [isNewPassword, setIsNewPassword] = useState<boolean>(false)
    const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false)


    function onCaptureImage() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImages(image.path)
        });
    }

    function selectImages() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImages(image.path)
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={imagePicker ? 'rgba(59, 66, 74, 0.33)' : COLORS.white} />
            <Header
                type={2}
                title='Edit Profile'
                onBackPress={() => {
                    props.navigation.goBack()
                }} />
            <ScrollView style={[styles.container]}
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.imageView}
                    activeOpacity={1}
                    onPress={() => {
                        setImagePicker(true)
                    }}>
                    {images ?
                        <Image style={styles.profilePic} resizeMode="cover" source={{ uri: images }} />
                        :
                        <View style={styles.profilePic} />
                    }
                    <Image style={styles.editIcon} resizeMode="contain" source={IMAGES.edit} />
                </TouchableOpacity>
                <Text
                    style={styles.txtLable}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(14)}>
                    {getTranslation('Name')}
                </Text>
                <Input
                    style={[styles.input, { marginTop: SCALE_SIZE(8) }]}
                    numberOfLines={1}
                    placeholder={getTranslation('Name')}
                    value={name}
                    onChangeText={(text: string) => {
                        setName(text)
                    }}
                />
                <Text
                    style={[styles.txtLable, { marginTop: SCALE_SIZE(16) }]}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(14)}>
                    {getTranslation('Email')}
                </Text>
                <Input
                    style={[styles.input, { marginTop: SCALE_SIZE(8) }]}
                    numberOfLines={1}
                    placeholder={getTranslation('Email')}
                    value={email}
                    onChangeText={(text: string) => {
                        setEmail(text)
                    }}
                />
                <Text
                    style={[styles.txtLable, { marginTop: SCALE_SIZE(16) }]}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(14)}>
                    {getTranslation('New Password')}
                </Text>
                <Input
                    style={[styles.input, { marginTop: SCALE_SIZE(8), flex: 1.0 }]}
                    numberOfLines={1}
                    isHide
                    placeholder={getTranslation('New Password')}
                    secureTextEntry={isNewPassword ? false : true}
                    value={password}
                    onPress={()=>{
                        setIsNewPassword(!isNewPassword)
                    }}
                    onChangeText={(text: string) => {
                        setPassword(text)
                    }}
                />
                <Text
                    style={[styles.txtLable, { marginTop: SCALE_SIZE(16) }]}
                    color={COLORS.contentTwo}
                    fontFamily={FONT.medium}
                    size={SCALE_SIZE(14)}>
                    {getTranslation('Confirm Password')}
                </Text>
                <Input
                    style={[styles.input, { marginTop: SCALE_SIZE(8), flex: 1.0 }]}
                    isHide
                    numberOfLines={1}
                    placeholder={getTranslation('Confirm Password')}
                    value={confirmPassword}
                    secureTextEntry={isConfirmPassword ? false : true}
                    onPress={()=>{
                        setIsConfirmPassword(!isConfirmPassword)
                    }}
                    onChangeText={(text: string) => {
                        setConfirmPassword(text)
                    }}
                />
            </ScrollView>
            <Button
                style={styles.btnContinue}
                backgroundColor={COLORS.primary}
                title={getTranslation('Save to Change')}
                size={SCALE_SIZE(16)}
                color={COLORS.white}
                family={FONT.bold}
                onPress={() => {

                }}>

            </Button>
            <ImageChosse
                isVisible={imagePicker}
                chossePicture={() => {
                    setImagePicker(false)
                    selectImages()
                }}
                takePicture={() => {
                    setImagePicker(false)
                    onCaptureImage()
                }}
                onClosed={() => {
                    setImagePicker(false)
                }} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS.white,
    },
    imageView: {
        height: SCALE_SIZE(106),
        width: SCALE_SIZE(106),
        alignSelf: 'center',
        marginTop: SCALE_SIZE(24)
    },
    profilePic: {
        height: SCALE_SIZE(96),
        width: SCALE_SIZE(96),
        alignSelf: 'center',
        backgroundColor: COLORS.borderShadow,
        borderRadius: 96 / 2
    },
    editIcon: {
        height: SCALE_SIZE(40),
        width: SCALE_SIZE(40),
        position: 'absolute',
        right: 0,
        bottom: 5
    },
    input: {
        marginHorizontal: SCALE_SIZE(16)
    },
    txtLable: {
        marginHorizontal: SCALE_SIZE(18),
        marginTop: SCALE_SIZE(46),
        letterSpacing: 0.24
    },
    btnContinue: {
        marginHorizontal: SCALE_SIZE(16),
        marginBottom: SCALE_SIZE(32),
        marginTop: SCALE_SIZE(16),
        borderBottomWidth: 4,
        borderBottomColor: COLORS.drop_shadow
    },
})
