import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Mockup from "../components/Mockup";

export default function OrderStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={"yes"} component={Mockup}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({})
