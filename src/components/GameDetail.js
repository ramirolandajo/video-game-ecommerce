import {ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {AntDesign} from "@expo/vector-icons";
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../features/shop/cartSlice";
import Animated, {FadeInUp} from "react-native-reanimated";
import StyledButton from "../styledComponents/StyledButton";
import StyledText from "../styledComponents/StyledText";

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
                        <StyledText size36 letters_spaced>{game.name}</StyledText>
                        <StyledText size20 letters_spaced style={{textTransform: "capitalize"}}>
                            Genre: {game.genres}
                        </StyledText>
                        <StyledText size30 letters_spaced light_blue style={{paddingTop: 10}}>
                            ${game.price}
                        </StyledText>
                        {!loading ? !gameAdded ? (
                            <StyledButton onPress={() => addToCart()} text={"BUY NOW"} filled orbitron_bold />
                        ) : (
                            <StyledButton onPress={() => removeFromCart()} text={"ADDED TO CART"} filled orbitron_bold />
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
