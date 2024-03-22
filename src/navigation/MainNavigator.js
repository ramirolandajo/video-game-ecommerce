import {StatusBar, StyleSheet} from "react-native";
import React, {useEffect} from "react";
import AuthStack from "./AuthStack";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import TabNavigation from "./TabNavigation";
import {useGetProfileImageQuery} from "../services/userService";
import {setProfileImage, setUser} from "../features/auth/authSlice";
import {fetchSession} from "../db";
import {colors} from "../global/colors";

export default function MainNavigator() {
    const {user, localId} = useSelector((state) => state.authReducer.value)
    const {data, error, isLoading} = useGetProfileImageQuery(localId);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const session = await fetchSession();
                console.log("local", session.rows._array);
                if (session?.rows.length) {
                    const user = session.rows._array[0];
                    dispatch(setUser(user));
                }
            } catch (error) {
                console.log(error.message);
            }
        })();

    }, []);


    useEffect(() => {
        if (data) {
            console.log(data.image);
            dispatch(setProfileImage(data.image))
        }
    }, [data])

    return (
        <NavigationContainer>
            <StatusBar style={"light"} backgroundColor={colors.black_800}/>
            {user ? <TabNavigation/> : <AuthStack/>}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
