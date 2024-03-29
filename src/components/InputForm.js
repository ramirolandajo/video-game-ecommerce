import {StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import Card from "../styledComponents/Card";
import {colors} from "../global/colors";
import StyledText from "../styledComponents/StyledText";

export default function InputForm({label, error, onChange, isSecure}) {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text);
    };

    return (
        <View style={styles.inputContainer}>
            <StyledText light_blue size20 style={styles.label}>{label}</StyledText>
            <Card style={{marginVertical: 30}}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}

                />
            </Card>
            {error ? <StyledText purple size16>* {error}</StyledText> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        width: "100%"
    },
    label: {
        fontFamily: "OrbitronSemiBold",
        position: "absolute",
        zIndex: 100,
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
    }
})
