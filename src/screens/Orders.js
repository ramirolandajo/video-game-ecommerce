import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function Orders() {


    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
    }
})
