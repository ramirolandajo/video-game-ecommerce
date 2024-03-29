import {Image, StyleSheet, View} from "react-native";
import React, {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import {useDispatch, useSelector} from "react-redux";
import {setCameraImage} from "../features/auth/authSlice";
import {usePostProfileImageMutation} from "../services/userService";
import StyledButton from "../styledComponents/StyledButton";
import StyledText from "../styledComponents/StyledText";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

export default function ImageSelector({navigation}) {
    const [image, setImage] = useState(null);
    const {localId} = useSelector((state) => state.authReducer.value);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
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
        triggerSaveProfileImage({localId, image});
        navigation.goBack();
    };

    return (
        <StyledScreenContainer align_center justify_center>
            {image ? (
                <>
                    <Image source={{uri: image}} style={styles.image}/>
                    <StyledButton onPress={() => setImage(null)} text={"Change photo"} font_colored orbitron/>
                    <StyledButton onPress={confirmImage} text={"Confirm photo"} filled orbitron_bold/>
                </>
            ) : (
                <View style={styles.noPhotoContainer}>
                    <StyledText size28>No photo to show...</StyledText>
                    <StyledButton text={"Open gallery"} onPress={pickImageAsync} filled orbitron_bold/>
                    <StyledButton text={"Take a photo"} onPress={takePictureAsync} font_colored orbitron/>
                </View>
            )}
        </StyledScreenContainer>
    );
};

const styles = StyleSheet.create({
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
    }
});
