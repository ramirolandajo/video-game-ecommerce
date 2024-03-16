import {StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function ErrorMessage({errorCode, errorMessage}) {
    return (
        <>
            <Text style={styles.error}>Error code: {errorCode}</Text>
            <Text style={styles.error}>
                {errorMessage.split("_").join(" ")}
            </Text>
        </>
    )
}
const styles = StyleSheet.create({
    error: {
        color: colors.purple_200,
        fontSize: 24,
        fontFamily: "KodeMonoSemiBold",
        textTransform: "capitalize",
    }
})
