import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import MinimalistCard from "../components/MinimalistCard";
import {colors} from "../global/colors";

export default function OrderItem({order}) {
    return (
        <MinimalistCard style={{flexDirection: "column"}}>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.text}>Order ID: </Text>
                <Text style={styles.secondText}>{order.id}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.text}>Total: </Text>
                <Text style={[styles.secondText, {letterSpacing: 2}]}>${order.total}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.text}>Date: </Text>
                <Text style={styles.secondText}>{order.date}</Text>
            </View>
        </MinimalistCard>
    )
}
const styles = StyleSheet.create({
    text: {
        color: colors.fuchsia_400,
        fontFamily: "KodeMonoSemiBold",
        fontSize: 20
    },
    secondText: {
        color: colors.light_blue,
        fontFamily: "KodeMonoSemiBold",
        fontSize: 20,
        flex: 1,
    }
})
