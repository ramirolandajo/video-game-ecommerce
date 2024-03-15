import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import React, {useEffect, useState} from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import {useLoginMutation} from "../services/authService";
import {useDispatch} from "react-redux";
import {setUser} from "../features/auth/authSlice";
import {loginSchema} from "../validations/loginSchema";
import Loader from "../components/Loader";
import {colors} from "../global/colors";
import Constants from "expo-constants";

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerLogin, result] = useLoginMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(result);
        if (result.data) {
            dispatch(setUser(result.data));
        }
    }, [result]);

    const onSubmit = () => {
        try {
            loginSchema.validateSync({password, email});
            triggerLogin({email, password});
        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {!result.isLoading ? (
                <>
                    <Text style={[styles.text, {fontSize: 30}]}>Login</Text>
                    <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
                    <InputForm
                        label={"Password"}
                        error={errorPassword}
                        onChange={setPassword}
                        isSecure={true}
                    />
                    <Pressable onPress={() => navigation.navigate("SignUp")} style={{marginTop: 10, marginBottom: 20}}>
                        <Text style={styles.text}>Don't have an account?</Text>
                        <Text style={[styles.text, {color: colors.light_blue}]}>Sign up!</Text>
                    </Pressable>
                    <SubmitButton title={"Login"} onPress={onSubmit}/>
                </>
            ) : (
                <Loader/>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
    },
    text: {
        fontFamily: "KodeMonoSemiBold",
        fontSize: 20,
        color: colors.fuchsia_400
    }
});
