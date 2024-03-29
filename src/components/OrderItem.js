import {View} from 'react-native'
import React from 'react'
import MinimalistCard from "../styledComponents/MinimalistCard";
import StyledText from "../styledComponents/StyledText";
import Animated, {FadeIn} from "react-native-reanimated";

export default function OrderItem({order}) {
    return (
        <Animated.View entering={FadeIn.duration(300)}>
            <MinimalistCard style={{flexDirection: "column"}}>
                <View style={{flexDirection: "row"}}>
                    <StyledText size20>Order ID: </StyledText>
                    <StyledText size20 light_blue style={{flex: 1}}>{order.id}</StyledText>
                </View>
                <View style={{flexDirection: "row"}}>
                    <StyledText size20>Total: </StyledText>
                    <StyledText size20 light_blue letters_spaced>${order.total}</StyledText>
                </View>
                <View style={{flexDirection: "row"}}>
                    <StyledText size20>Date: </StyledText>
                    <StyledText size20 light_blue>{order.date}</StyledText>
                </View>
            </MinimalistCard>
        </Animated.View>
    )
}