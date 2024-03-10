import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {colors} from "../global/colors";
import {Dropdown} from "react-native-element-dropdown";
import {FontAwesome} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../features/shop/cartSlice";
import CartDropdown from "./CartDropdown";

export default function CartItem({game}) {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Image source={{uri: game.background_image}} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text numberOfLines={2} style={styles.text}>{game.name}</Text>
                <Text numberOfLines={3} style={[styles.text, {color: colors.light_blue}]}>${game.price}</Text>
            </View>
            <View style={{gap: 20}}>
                <CartDropdown game={game} />
                <Pressable style={styles.deleteButton} onPress={() => dispatch(removeItem({...game}))}>
                    <FontAwesome name="trash" size={36} color={colors.fuchsia_400}/>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textContainer: {
        flex: 1
    },
    container: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 14,
        flex: 1,
        borderTopColor: colors.fuchsia_400,
        borderTopWidth: 1,
        paddingTop: 14
    },
    deleteButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "KodeMonoSemiBold",
        fontSize: 24,
        color: colors.fuchsia_400,
    },
    image: {
        height: 100,
        width: 100
    }
})
