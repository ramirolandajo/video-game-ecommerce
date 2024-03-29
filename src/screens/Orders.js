import {FlatList, Platform, SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";
import Constants from "expo-constants";
import Loader from "../components/Loader";
import OrderItem from "../components/OrderItem";
import {useGetOrdersQuery} from "../services/userService";
import {useSelector} from "react-redux";

export default function Orders() {
    const user = useSelector((state) => state.authReducer.value.user)
    const {data, isLoading, error} = useGetOrdersQuery(user);
    const orders = data ? Object.values(data) : [];
    return (
        <SafeAreaView style={styles.container}>
            {!isLoading ? (
                orders.length > 0 ? (
                    <FlatList
                        style={{width: "100%"}}
                        data={orders}
                        renderItem={({item}) => (
                            <OrderItem order={item}/>
                        )}
                    />
                ) : (
                    <Text style={styles.text}>No orders placed.</Text>
                )
            ) : (
                <Loader/>
            )}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
    },
    text: {
        fontFamily: "KodeMonoSemiBold",
        fontSize: 24,
        color: colors.fuchsia_400
    },
})
