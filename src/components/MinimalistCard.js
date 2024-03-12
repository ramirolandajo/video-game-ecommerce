import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function MinimalistCard({children, style}) {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 14,
        flex: 1,
        borderTopColor: colors.fuchsia_400,
        borderTopWidth: 1,
        paddingTop: 14
    }
})
