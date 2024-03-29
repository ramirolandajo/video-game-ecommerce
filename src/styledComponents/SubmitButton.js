import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

export default function SubmitButton({onPress, title}){
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: colors.fuchsia_400,
        marginVertical: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    text: {
        fontSize: 28,
        fontFamily: "OrbitronExtraBold"
    }
});

