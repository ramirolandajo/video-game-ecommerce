import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Header({title}) {
    const [first, second] = title.split(" ")
    return (
        <View style={styles.container}>
            <Text style={styles.gameText}>{first}</Text>
            <Text style={styles.shopText}>{second}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 75,
        paddingTop: 30,
        backgroundColor: colors.black_800,
        gap: 10
    },
    gameText: {
        color: colors.fuchsia_400,
        fontSize: 40,
        fontFamily: "OrbitronSemiBold"
    },
    shopText: {
        color: colors.light_blue,
        fontSize: 40,
        fontFamily: "OrbitronSemiBold"
    }
})
