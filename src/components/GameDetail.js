import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons";
import {colors} from "../global/colors";
import {useSelector} from "react-redux";

export default function GameDetail({navigation}) {
    const game = useSelector((state) => state.shopReducer.value.gameSelected)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={{marginBottom: 16}}>
                <AntDesign name={"leftcircle"} size={32} color={colors.fuchsia_400}/>
            </Pressable>
            <View style={styles.main}>
                <Image source={{uri: game.background_image}} style={styles.image}/>
                <View style={styles.textContainer}>
                    <Text style={styles.gameName}>{game.name}</Text>
                    <Text style={styles.genre}>Genre: {game.genres}</Text>
                    <Text style={styles.price}>${game.price}</Text>
                </View>
                <Pressable style={styles.buyButton}>
                    <Text style={styles.buyText}>BUY NOW</Text>
                </Pressable>
            </View>
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
        padding: 20
    },
    textContainer: {
        padding: 10
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
        color: colors.fuchsia_400,
        fontSize: 30,
        fontFamily: "KodeMonoSemiBold",
        letterSpacing: 2,
    },
    buyButton: {
        height: 50,
        backgroundColor: colors.fuchsia_400,
        margin: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    buyText: {
        fontSize: 28,
        fontFamily: "OrbitronExtraBold"
    }
})
