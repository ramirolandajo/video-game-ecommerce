import {Platform, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import GameDetail from "../components/GameDetail";
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function GamesDetail({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <GameDetail navigation={navigation}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
    }
})
