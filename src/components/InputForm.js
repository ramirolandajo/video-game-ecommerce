import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import Card from "./Card";
import {colors} from "../global/colors";

export default function InputForm({label, error, onChange, isSecure}) {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <Card style={{marginVertical: 30}}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}

                />
            </Card>
            {error ? <Text style={styles.error}>* {error}</Text> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        width: "100%"
    },
    label: {
        fontFamily: "OrbitronSemiBold",
        color: colors.light_blue,
        fontSize: 20,
        position: "absolute",
        zIndex: 2,
        backgroundColor: colors.black_800,
        top: 10,
        left: 15,
        padding: 10
    },
    input: {
        padding: 5,
        fontSize: 20,
        color: colors.light_blue,
        fontFamily: "KodeMonoSemiBold"
    },
    error: {
        color: colors.purple_200,
        fontSize: 16,
        fontFamily: "KodeMonoSemiBold"
    }
})
