import {FlatList, Platform, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {usePostOrderMutation} from "../services/shopService";
import CartItem from "../components/CartItem";
import {colors} from "../global/colors";
import Constants from "expo-constants";
import Loader from "../components/Loader";
import {emptyCart} from "../features/shop/cartSlice";

export default function Cart() {
    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation();
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (orderConfirmed && !result.isLoading) {
            const timer = setTimeout(() => {
                setOrderConfirmed(false);
                dispatch(emptyCart());
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [orderConfirmed, result.isLoading, dispatch]);

    function confirmCartOrder() {
        triggerPost({total, cartItems, user: "loggedUser"});
        setOrderConfirmed(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            {!orderConfirmed ? (
                cartItems.length > 0 ? (
                    <>
                        <FlatList
                            data={cartItems}
                            renderItem={({item}) => <CartItem game={item}/>}
                            keyExtractor={(item) => item.id}
                        />
                        <Text style={styles.totalText}>Total: ${total}</Text>
                        <Pressable style={styles.confirmButton} onPress={() => confirmCartOrder()}>
                            <Text style={styles.confirmText}>Confirm Order</Text>
                        </Pressable>
                    </>
                ) : (
                    <Text style={styles.text}>No games added to cart.</Text>
                )
            ) : (
                !result.isLoading ? (
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={[styles.text, {fontSize: 36}]}>Order Placed!</Text>
                    </View>
                ) : (
                    <Loader/>
                )
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 10
    },
    text: {
        fontFamily: "KodeMonoSemiBold",
        fontSize: 24,
        color: colors.fuchsia_400
    },
    confirmText: {
        fontFamily: "KodeMonoSemiBold",
        fontSize: 24,
    },
    confirmButton: {
        width: "100%",
        height: 50,
        backgroundColor: colors.fuchsia_400,
        borderRadius: 10,
        marginVertical: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    totalText: {
        fontSize: 30,
        color: colors.light_blue,
        fontFamily: "KodeMonoSemiBold",
        paddingTop: 10
    }
})
