import {Image, Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import Card from "./Card";
import {colors} from "../global/colors";
import {useDispatch} from "react-redux";
import {setGameIdSelected} from "../features/shop/shopSlice";
import Animated, {FadeInLeft} from "react-native-reanimated";

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
                    <Text style={styles.text}>{game.name}</Text>
                    <Text style={styles.text}>${game.price}</Text>
                </Pressable>
            </Card>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    text: {
        textTransform: "capitalize",
        fontSize: 24,
        color: colors.fuchsia_600,
        fontFamily: "KodeMonoSemiBold",
        letterSpacing: 2
    },
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
