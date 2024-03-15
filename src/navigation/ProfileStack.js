import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Mockup from "../components/Mockup";
import Cart from "../screens/Cart";
import Header from "../components/Header";
import MyProfile from "../screens/MyProfile"
export default function CartStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={
                () => ({
                    header: () => {
                        return (
                            <Header title={"MY PROFILE"}/>
                        )
                    }
                })
            }
        >
            <Stack.Screen name={"Profile"} component={MyProfile}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})