import {FlatList, Image, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {usePostOrderMutation} from "../services/shopService";
import Loader from "../components/Loader";
import {emptyCart} from "../features/shop/cartSlice";
import {randomUUID} from "expo-crypto";
import empty_cart_png from "../../assets/empty-shopping-cart.png";
import order_placed_png from "../../assets/order-placed-png.png";
import StyledText from "../styledComponents/StyledText";
import StyledButton from "../styledComponents/StyledButton";
import CartItem from "../components/CartItem";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

export default function Cart() {
    const user = useSelector((state) => state.authReducer.value.user)
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
        triggerPost({id: randomUUID(), total, cartItems, user, date: new Date().toLocaleString()});
        setOrderConfirmed(true);
    }

    return (
        <StyledScreenContainer pdHorizontal10>
            {!orderConfirmed ? (
                cartItems.length > 0 ? (
                    <>
                        <FlatList
                            data={cartItems}
                            renderItem={({item}) => <CartItem game={item}/>}
                            keyExtractor={(item) => item.id}
                        />
                        <StyledText size30 light_blue style={{paddingTop: 10}}>Total: ${total}</StyledText>
                        <StyledButton filled onPress={() => confirmCartOrder()} text={"Confirm Order"} kodemono/>
                    </>
                ) : (
                    <View style={styles.main}>
                        <StyledText size30>No games added to cart.</StyledText>
                        <Image source={empty_cart_png} style={styles.image}/>
                    </View>
                )
            ) : (
                !result.isLoading ? (
                    <View style={styles.main}>
                        <StyledText size36>Order Placed!</StyledText>
                        <Image source={order_placed_png} style={{height: 150, width: 150}}/>
                    </View>
                ) : (
                    <Loader/>
                )
            )}
        </StyledScreenContainer>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 250,
        width: 250
    }
})
