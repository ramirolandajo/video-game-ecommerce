import {Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import {colors} from "../global/colors";
import {useSelector} from "react-redux";

export default function MyProfile({navigation}) {
    const { profileImage, imageCamera, user } = useSelector((state) => state.authReducer.value);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                {profileImage || imageCamera ? (
                    <Image
                        source={{uri: profileImage || imageCamera}}
                        style={styles.image}
                    />
                ): (
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
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
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