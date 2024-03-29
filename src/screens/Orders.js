import {FlatList, Image, View} from 'react-native'
import React from 'react'
import OrderItem from "../components/OrderItem";
import {useGetOrdersQuery} from "../services/userService";
import {useSelector} from "react-redux";
import {useFocusEffect} from "@react-navigation/native";
import StyledText from "../styledComponents/StyledText";
import empty_png from "../../assets/empty-png.png";
import Loader from "../components/Loader";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

export default function Orders() {
    const user = useSelector((state) => state.authReducer.value.user)
    const {data, isLoading, error, refetch} = useGetOrdersQuery(user);
    const orders = data ? Object.values(data) : [];

    useFocusEffect(
        React.useCallback(() => {
            refetch()
        })
    )

    return (
        <StyledScreenContainer>
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
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <StyledText size30>No orders placed.</StyledText>
                        <Image source={empty_png} style={{height: 200, width: 200}}/>
                    </View>
                )
            ) : (
                <Loader/>
            )}
        </StyledScreenContainer>
    )
}
