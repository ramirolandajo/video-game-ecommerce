import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function StyledButton({
    onPress, font_colored, filled, orbitron, orbitron_bold, kodemono, text, ...props
}) {
    const textStyles = [
        font_colored && styles.font_colored,
        orbitron && styles.orbitron,
        orbitron_bold && styles.orbitron_bold,
        kodemono && styles.kodemono
    ]
    return (
        <Pressable onPress={onPress} style={[styles.generalButton, filled && styles.filled]}>
            <Text style={[textStyles, {...props}]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    generalButton: {
        height: 50,
        marginVertical: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderColor: colors.fuchsia_400,
        borderWidth: 2
    },
    font_colored: {
        color: colors.fuchsia_400
    },
    filled: {
        backgroundColor: colors.fuchsia_400
    },
    orbitron: {
        fontSize: 28,
        fontFamily: "OrbitronSemiBold"
    },
    orbitron_bold: {
        fontSize: 28,
        fontFamily: "OrbitronExtraBold"
    },
    kodemono: {
        fontSize: 24,
        fontFamily: "KodeMonoSemiBold"
    }
})
