import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

export default function SimpleButton({onPress, title}){
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        marginVertical: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderColor: colors.fuchsia_400,
        borderWidth: 2
    },
    text: {
        fontSize: 28,
        fontFamily: "OrbitronSemiBold",
        color: colors.fuchsia_400
    }
});

