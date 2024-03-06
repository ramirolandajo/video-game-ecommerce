import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Mockup from "../components/Mockup";

export default function CartStack() {
    const Stack = createNativeStackNavigator();

    return (
        // TODO
        <Stack.Navigator>
            <Stack.Screen name={"cart"} component={Mockup}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
