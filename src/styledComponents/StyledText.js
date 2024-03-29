import {StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function StyledText({
    children, letters_spaced, dark_fuchsia, purple, light_blue, capitalized, size16, size20, size28, size30, size36, numberOfLines, style}) {
    const textStyle = [
        styles.general,
        light_blue && styles.light_blue,
        letters_spaced && styles.letters_spaced,
        dark_fuchsia && styles.dark_fuchsia,
        purple && styles.purple,
        capitalized && styles.capitalized,
        size16 && styles.size16,
        size20 && styles.size20,
        size28 && styles.size28,
        size30 && styles.size30,
        size36 && styles.size36
    ]

    return (
        <Text numberOfLines={numberOfLines} style={[textStyle, {...style}]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    general: {
        fontSize: 24,
        fontFamily: "KodeMonoSemiBold",
        color: colors.fuchsia_400
    },
    letters_spaced: {
        letterSpacing: 2
    },
    capitalized: {
        textTransform: "capitalize"
    },
    light_blue: {
        color: colors.light_blue
    },
    purple: {
        color: colors.purple_200
    },
    dark_fuchsia: {
        color: colors.fuchsia_600
    },
    size16: {
        fontSize: 16
    },
    size20: {
        fontSize: 20
    },
    size28: {
        fontSize: 28
    },
    size30: {
        fontSize: 30
    },
    size36: {
        fontSize: 36
    }
})
