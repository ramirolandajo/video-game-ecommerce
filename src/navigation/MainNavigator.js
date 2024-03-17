import {StatusBar, StyleSheet} from "react-native";
import React, {useEffect} from "react";
import AuthStack from "./AuthStack";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import TabNavigation from "./TabNavigation";
import {useGetProfileImageQuery} from "../services/userService";
import {setProfileImage} from "../features/auth/authSlice";

export default function MainNavigator() {
    const {user, localId} = useSelector((state) => state.authReducer.value)
    const {data, error, isLoading} = useGetProfileImageQuery(localId);

    const dispatch = useDispatch();

    useEffect(()=> {
        if(data) {
            console.log(data.image);
            dispatch(setProfileImage(data.image))
        }
    }, [data])

    return (
        <NavigationContainer>
            <StatusBar style={"light"}/>
            {user ? <TabNavigation/> : <AuthStack/>}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
