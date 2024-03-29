import {Pressable, StyleSheet} from 'react-native'
import React from 'react'
import Card from "../styledComponents/Card";
import {useDispatch} from "react-redux";
import {setGenreSelected} from "../features/shop/shopSlice";
import Animated, {FadeInLeft} from "react-native-reanimated";
import StyledText from "../styledComponents/StyledText";

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
                    <StyledText size36 capitalized dark_fuchsia>{genre.split("-").join(" ")}</StyledText>
                </Pressable>
            </Card>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
    }
})
