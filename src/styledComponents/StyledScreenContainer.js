import {Platform, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function StyledScreenContainer({children, align_center, justify_center, pdHorizontal10, style}) {
    const viewStyle = [
        styles.general,
        align_center && styles.align_center,
        justify_center && styles.justify_center,
        pdHorizontal10 && styles.pdHorizontal10
    ]

    return (
        <SafeAreaView style={[viewStyle, {...style}]}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    general: {
        flex: 1,
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
    },
    align_center: {
        alignItems: "center"
    },
    justify_center: {
        justifyContent: "center"
    },
    pdHorizontal10: {
        paddingHorizontal: 10
    }
})
