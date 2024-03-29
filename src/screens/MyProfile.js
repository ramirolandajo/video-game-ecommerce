import {Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import Constants from "expo-constants";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import SimpleButton from "../components/SimpleButton";
import {logout} from "../features/auth/authSlice";
import {deleteSession} from "../db";

export default function MyProfile({navigation}) {
    const {profileImage, imageCamera, user, localId} = useSelector((state) => state.authReducer.value);
    const [currentImage, setCurrentImage] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentImage(imageCamera ? imageCamera : profileImage)
    }, [profileImage, imageCamera])

    async function onLogout() {
        dispatch(logout());
        const deletedSession = await deleteSession({localId});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.main}>
                    {profileImage || imageCamera ? (
                        <Image
                            source={{uri: currentImage}}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            source={require("../../assets/defaultProfile.png")}
                            tintColor={colors.black_400}
                            style={styles.defaultImage}
                        />
                    )}
                    <View>
                        <Text style={styles.text}>{user}</Text>
                    </View>
                </View>
                {!currentImage ? (
                    <Pressable style={styles.button} onPress={() => navigation.navigate("ImageSelector")}>
                        <Text style={styles.buttonText}>Add image to profile</Text>
                    </Pressable>
                ) : (
                    <Pressable style={styles.button} onPress={() => navigation.navigate("ImageSelector")}>
                        <Text style={styles.buttonText}>Change profile image</Text>
                    </Pressable>
                )}
            </View>
            <View>
                <SimpleButton title={"Log Out"} onPress={() => onLogout()}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16,
        justifyContent: "space-between"
    },
    main: {
        flexDirection: "row",
        gap: 20
    },
    defaultImage: {
        width: 120,
        height: 120,
        resizeMode: "contain"
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200 / 2,
        resizeMode: "cover"
    },
    text: {
        color: colors.fuchsia_400,
        fontSize: 26,
        fontFamily: "KodeMonoSemiBold",
        paddingTop: 10
    },
    button: {
        width: "100%",
        backgroundColor: colors.fuchsia_400,
        height: 50,
        marginVertical: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 24,
        fontFamily: "KodeMonoSemiBold",
    }
});