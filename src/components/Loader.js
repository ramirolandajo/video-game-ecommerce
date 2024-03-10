import {ActivityIndicator, StyleSheet, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={80} color={colors.fuchsia_400}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        justifyContent: "center",
        alignItems: "center"
    }
})
