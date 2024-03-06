import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.gameText}>GAME</Text>
            <Text style={styles.shopText}>SHOP</Text>
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
        backgroundColor: colors.black_800
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
