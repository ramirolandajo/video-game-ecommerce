import {StyleSheet, View} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import ProfileStack from "./ProfileStack";
import {Entypo, FontAwesome, Ionicons} from '@expo/vector-icons';
import {colors} from "../global/colors";
import CustomCartIcon from "../components/CustomCartIcon";
import {useSelector} from "react-redux";

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    const amountItems = useSelector((state) => state.cartReducer.value.items)

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen
                name={"shopTab"}
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={styles.tabContainer}>
                                <Ionicons name="game-controller" size={38}
                                          color={focused ? colors.fuchsia_400 : "gray"}/>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"CartTab"}
                component={CartStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={styles.tabContainer}>
                                <CustomCartIcon focused={focused} amount={amountItems}/>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"OrderTab"}
                component={OrderStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={styles.tabContainer}>
                                <Entypo name="list" size={38} color={focused ? colors.fuchsia_400 : "gray"}/>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={"ProfileStack"}
                component={ProfileStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style={styles.tabContainer}>
                                <FontAwesome name="user-circle-o" size={34}
                                             color={focused ? colors.fuchsia_400 : "gray"}/>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.black_400,
        height: "10%",
    },
    tabContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})
