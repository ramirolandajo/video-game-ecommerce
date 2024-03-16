import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {useSignUpMutation} from "../services/authService";
import {signupSchema} from "../validations/signupSchema";
import {setUser} from "../features/auth/authSlice";
import {colors} from "../global/colors";
import Constants from "expo-constants";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function SignUp({navigation}) {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [globalError, setGlobalError] = useState(false);
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        try {
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");

            signupSchema.validateSync({password, confirmPassword, email});
            triggerSignup({email, password});
            console.log("Registro exitoso");

        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
        }
    }, [result]);

    return (
        <SafeAreaView style={styles.container}>
            {!globalError ?
                (!result.isLoading ? (
                    <>
                        <Text style={[styles.text, {fontSize: 30}]}>Sign Up</Text>
                        <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
                        <InputForm
                            label={"Password"}
                            error={errorPassword}
                            onChange={setPassword}
                            isSecure={true}
                        />
                        <InputForm
                            label={"Confirm password"}
                            error={errorConfirmPassword}
                            onChange={setConfirmPassword}
                            isSecure={true}
                        />
                        <Pressable onPress={() => navigation.navigate("Login")}
                                   style={{marginTop: 10, marginBottom: 20}}>
                            <Text style={styles.text}>Already have an account?</Text>
                            <Text style={[styles.text, {color: colors.light_blue}]}>Log in</Text>
                        </Pressable>
                        <SubmitButton title={"Register"} onPress={onSubmit}/>
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
    )
}
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
})
