import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Orders from "../screens/Orders";
import Header from "../components/Header";

export default function OrderStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={
                () => ({
                    header: () => {
                        return (
                            <Header title={"MY ORDERS"}/>
                        )
                    }
                })
            }
        >
            <Stack.Screen name={"yes"} component={Orders}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
