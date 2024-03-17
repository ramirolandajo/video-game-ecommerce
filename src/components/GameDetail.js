import {ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {AntDesign} from "@expo/vector-icons";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../features/shop/cartSlice";
import Animated, {FadeInUp} from "react-native-reanimated";
import SubmitButton from "./SubmitButton";

export default function GameDetail({navigation}) {
    const game = useSelector((state) => state.shopReducer.value.gameSelected)
    const gamesAdded = useSelector((state) => state.cartReducer.value.items)
    const gameAdded = !!gamesAdded.find((item) => item.id === game.id)
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    function addToCart() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            dispatch(addItem({...game, quantity: 1}))
        }, 1000)
    }

    function removeFromCart() {
        dispatch(removeItem({...game}))
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Animated.View entering={FadeInUp.duration(1000)}>
                <Pressable onPress={() => navigation.goBack()} style={{marginBottom: 16}}>
                    <AntDesign name={"leftcircle"} size={32} color={colors.fuchsia_400}/>
                </Pressable>
                <View style={styles.main}>
                    <Image source={{uri: game.background_image}} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.gameName}>{game.name}</Text>
                        <Text style={styles.genre}>Genre: {game.genres}</Text>
                        <Text style={styles.price}>${game.price}</Text>
                        {!loading ? !gameAdded ? (
                            <SubmitButton onPress={() => addToCart()} title={"BUY NOW"}/>
                        ) : (
                            <SubmitButton onPress={() => removeFromCart()} title={"ADDED TO CART"}/>
                        ) : (
                            <View style={styles.falseButton}>
                                <ActivityIndicator size={40} color={"black"}/>
                            </View>
                        )}
                    </View>
                </View>
            </Animated.View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 16,
        flexGrow: 1,
    },
    main: {
        backgroundColor: colors.black_400,
        flex: 1,
        borderRadius: 10,
        marginBottom: 30
    },
    image: {
        width: "100%",
        borderWidth: 2,
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        marginBottom: 10
    },
    textContainer: {
        paddingHorizontal: 10
    },
    gameName: {
        color: colors.fuchsia_400,
        fontSize: 36,
        fontFamily: "KodeMonoSemiBold",
        letterSpacing: 2
    },
    genre: {
        color: colors.fuchsia_400,
        fontSize: 20,
        fontFamily: "KodeMonoSemiBold",
        letterSpacing: 2,
        textTransform: "capitalize"
    },
    price: {
        paddingTop: 20,
        color: colors.light_blue,
        fontSize: 30,
        fontFamily: "KodeMonoSemiBold",
        letterSpacing: 2,
    },
    falseButton: {
        height: 50,
        backgroundColor: colors.fuchsia_400,
        marginVertical: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }
})
