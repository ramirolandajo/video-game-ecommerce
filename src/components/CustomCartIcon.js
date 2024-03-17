import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Entypo, FontAwesome5} from "@expo/vector-icons";
import {colors} from "../global/colors";

export default function CustomCartIcon({focused, amount}) {
    return (
        <>
            <FontAwesome5 name="shopping-cart" size={30} color={focused ? colors.fuchsia_400 : "gray"}/>
            {amount.length > 0 ? (
                <View style={[styles.circle, {backgroundColor: focused? colors.fuchsia_400 : "gray"}]}>
                    <Text style={[styles.amount, {color: focused ? "black" : colors.light_blue}]}>{amount.length}</Text>
                </View>
            ) : null}
        </>
    )
}
const styles = StyleSheet.create({
    circle: {
        borderWidth: 2,
        borderColor: colors.black_800,
        backgroundColor: "gray",
        borderRadius: 1000000,
        position: "absolute",
        height: 24,
        width: 24,
        zIndex: 2,
        top: -13,
        right: -15
    },
    amount: {
        fontSize: 18,
        position: "absolute",
        fontFamily: "KodeMonoSemiBold",
        top: -2,
        right: 4
    }
})
