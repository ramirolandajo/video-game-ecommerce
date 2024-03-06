import {Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Card from "./Card";
import {colors} from "../global/colors";
import {useDispatch} from "react-redux";
import {setGenreSelected} from "../features/shop/shopSlice";

export default function GenreItem({navigation, genre}) {
    const dispatch = useDispatch();
    return (
        <Card>
            <Pressable
                style={styles.wrapper}
                onPress={() => {
                    dispatch(setGenreSelected(genre))
                    navigation.navigate("GamesByGenre")
                }}
            >
                <Text style={styles.text}>{genre.split("-").join(" ")}</Text>
            </Pressable>
        </Card>
    )
}
const styles = StyleSheet.create({
    text: {
        textTransform: "capitalize",
        fontSize: 36,
        color: colors.fuchsia_600,
        fontFamily: "KodeMonoSemiBold"
    },
    wrapper: {
        justifyContent: "center",
    }
})
