import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import {usePostProfileImageMutation} from "../services/userService";
import {colors} from "../global/colors";
import Constants from "expo-constants";
import SubmitButton from "../styledComponents/SubmitButton";
import SimpleButton from "../styledComponents/SimpleButton";

export default function ImageSelector({ navigation }) {
    const [image, setImage] = useState(null);
    const { localId } = useSelector((state) => state.authReducer.value);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
    };

    const takePictureAsync = async () => {
        const isCameraOk = await verifyCameraPermissions();
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [9, 16],
            base64: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const confirmImage = () => {
        dispatch(setCameraImage(image));
        triggerSaveProfileImage({ localId, image });
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <SimpleButton onPress={takePictureAsync} title={"Take another photo"} />
                    <SubmitButton onPress={confirmImage} title={"Confirm photo"} />
                </>
            ) : (
                <View style={styles.noPhotoContainer}>
                    <Text style={styles.text}>No photo to show...</Text>
                    <SubmitButton title={"Open gallery"} onPress={pickImageAsync}/>
                    <SimpleButton title={"Take a photo"} onPress={takePictureAsync}/>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    noPhotoContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    text: {
        color: colors.fuchsia_400,
        fontFamily: "KodeMonoSemiBold",
        fontSize: 24
    }
});
