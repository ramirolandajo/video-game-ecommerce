import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Header from "../components/Header";

export default function CartStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={
                () => ({
                    header: () => {
                        return (
                            <Header title={"MY CART"}/>
                        )
                    }
                })
            }
        >
            <Stack.Screen name={"Cart"} component={Cart}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
