import {Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import Card from "./Card";
import {colors} from "../global/colors";
import {useDispatch} from "react-redux";
import {setGenreSelected} from "../features/shop/shopSlice";
import Animated, {FadeInLeft, FadeInUp} from "react-native-reanimated";

export default function GenreItem({navigation, genre, duration}) {
    const dispatch = useDispatch();
    return (
        <Animated.View entering={FadeInLeft.duration(duration)}>
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
        </Animated.View>
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
