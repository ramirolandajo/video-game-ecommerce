import {Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import SimpleButton from "../components/SimpleButton";
import {logout} from "../features/auth/authSlice";
import {deleteSession} from "../db";
import Animated from "react-native-reanimated";

export default function MyProfile({navigation}) {
    const {profileImage, imageCamera, user, localId} = useSelector((state) => state.authReducer.value);

    const dispatch = useDispatch();

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
                            source={{uri: profileImage || imageCamera}}
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
                <Pressable style={styles.button} onPress={() => navigation.navigate("ImageSelector")}>
                    <Text style={styles.buttonText}>Add image to profile</Text>
                </Pressable>
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
        width: 100,
        height: 100,
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