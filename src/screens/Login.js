import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {useLoginMutation} from "../services/authService";
import {useDispatch} from "react-redux";
import {setUser} from "../features/auth/authSlice";
import {loginSchema} from "../validations/loginSchema";
import {colors} from "../global/colors";
import Constants from "expo-constants";
import InputForm from "../components/InputForm";
import SubmitButton from "../styledComponents/SubmitButton";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import {insertSession} from "../db";

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [globalError, setGlobalError] = useState(false);
    const [triggerLogin, result] = useLoginMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        if (result.error) {
            setGlobalError(true)
        }
        if (result.data) {
            dispatch(setUser(result.data));
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken
            })
                .then((result) => console.log(result))
                .catch(err => console.log(err.message))
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
            {!globalError ?
                (!result.isLoading ? (
                    <>
                        <Text style={[styles.text, {fontSize: 30}]}>Login</Text>
                        <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
                        <InputForm
                            label={"Password"}
                            error={errorPassword}
                            onChange={setPassword}
                            isSecure={true}
                        />
                        <Pressable onPress={() => navigation.navigate("SignUp")}
                                   style={{marginTop: 10, marginBottom: 20}}>
                            <Text style={styles.text}>Don't have an account?</Text>
                            <Text style={[styles.text, {color: colors.light_blue}]}>Sign up!</Text>
                        </Pressable>
                        <SubmitButton title={"Login"} onPress={onSubmit}/>
                    </>
                ) : (
                    <Loader/>
                )) : (
                    <>
                        <ErrorMessage
                            errorCode={result.error.data.error.code}
                            errorMessage={result.error.data.error.message}
                        />
                        <SubmitButton title={"Go Back"} onPress={() => setGlobalError(false)}/>
                    </>
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
