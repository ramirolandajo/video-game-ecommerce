import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";
import {FontAwesome} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {removeItem} from "../features/shop/cartSlice";
import CartDropdown from "./CartDropdown";
import MinimalistCard from "./MinimalistCard";

export default function CartItem({game}) {
    const dispatch = useDispatch();

    return (
        <MinimalistCard>
            <Image source={{uri: game.background_image}} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text numberOfLines={2} style={styles.text}>{game.name}</Text>
                <Text numberOfLines={3} style={[styles.text, {color: colors.light_blue}]}>${game.price}</Text>
            </View>
            <View style={{gap: 20}}>
                <CartDropdown game={game}/>
                <Pressable style={styles.deleteButton} onPress={() => dispatch(removeItem({...game}))}>
                    <FontAwesome name="trash" size={36} color={colors.fuchsia_400}/>
                </Pressable>
            </View>
        </MinimalistCard>
    )
}
const styles = StyleSheet.create({
    textContainer: {
        flex: 1
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
