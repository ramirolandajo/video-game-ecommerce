import {StatusBar, StyleSheet} from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import TabNavigation from "./TabNavigation";
// import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
// import { setProfileImage, setUserLocation } from "../features/auth/authSlice";

export default function MainNavigator() {
    const {user, localId} = useSelector((state) => state.authReducer.value)
    // const {data, error, isLoading} = useGetProfileImageQuery(localId);
    // const {data: location } = useGetUserLocationQuery(localId);

    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     if(data) {
    //         console.log(data.image);
    //         dispatch(setProfileImage(data.image))
    //     }
    //     if(location) {
    //         dispatch(setUserLocation(location))
    //     }
    // }, [data, location])

    return (
        <NavigationContainer>
            <StatusBar style={"light"}/>
            {user ? <TabNavigation/> : <AuthStack/>}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
