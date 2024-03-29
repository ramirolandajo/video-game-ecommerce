import {Image, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import Card from "./Card";
import {useDispatch} from "react-redux";
import {setGameIdSelected} from "../features/shop/shopSlice";
import Animated, {FadeInLeft} from "react-native-reanimated";
import StyledText from "../styledComponents/StyledText";

export default function GenreItem({navigation, game}) {
    const dispatch = useDispatch();
    return (
        <Animated.View entering={FadeInLeft.duration(500)}>
            <Card style={styles.gameItem}>
                <Pressable
                    style={styles.wrapper}
                    onPress={() => {
                        dispatch(setGameIdSelected(game.id))
                        navigation.navigate("GameDetail")
                    }}
                >
                    <Image source={{uri: game.background_image}} style={styles.image}/>
                    <StyledText capitalized dark_fuchsia letters_spaced>{game.name}</StyledText>
                    <StyledText capitalized dark_fuchsia letters_spaced>${game.price}</StyledText>
                </Pressable>
            </Card>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        paddingVertical: 10
    },
    image: {
        height: 200,
        width: "100%"
    },
    gameItem: {
        marginTop: 0,
    }
})
