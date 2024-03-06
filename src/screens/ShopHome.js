import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import GenresList from "../components/GenresList";
import {colors} from "../global/colors";

export default function ShopHome({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <GenresList navigation={navigation}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
});