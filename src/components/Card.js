import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Card({children, style}) {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginVertical: 16,
        shadowColor: "black",
        borderLeftColor: colors.fuchsia_400,
        borderTopColor: colors.fuchsia_400,
        borderRightColor: colors.light_blue,
        borderBottomColor: colors.light_blue,
        borderWidth: 5,
        shadowRadius: 100,
        padding: 10,
    }
})
