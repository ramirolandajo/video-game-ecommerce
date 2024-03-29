import {Platform, Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {useLoginMutation} from "../services/authService";
import {useDispatch} from "react-redux";
import {setUser} from "../features/auth/authSlice";
import {loginSchema} from "../validations/loginSchema";
import {colors} from "../global/colors";
import Constants from "expo-constants";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import {insertSession} from "../db";
import StyledButton from "../styledComponents/StyledButton";
import StyledText from "../styledComponents/StyledText";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

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
        <StyledScreenContainer align_center>
            {!globalError ?
                (!result.isLoading ? (
                    <>
                        <StyledText size30>Login</StyledText>
                        <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
                        <InputForm
                            label={"Password"}
                            error={errorPassword}
                            onChange={setPassword}
                            isSecure={true}
                        />
                        <Pressable onPress={() => navigation.navigate("SignUp")}
                                   style={{marginTop: 10, marginBottom: 20}}>
                            <StyledText size20>Don't have an account?</StyledText>
                            <StyledText size20 light_blue>Sign up!</StyledText>
                        </Pressable>
                        <StyledButton text={"Login"} onPress={onSubmit} filled orbitron_bold/>
                    </>
                ) : (
                    <Loader/>
                )) : (
                    <>
                        <ErrorMessage
                            errorCode={result.error.data.error.code}
                            errorMessage={result.error.data.error.message}
                        />
                        <StyledButton text={"Go Back"} onPress={() => setGlobalError(false)} filled orbitron_bold/>
                    </>
                )}
        </StyledScreenContainer>
    );
};