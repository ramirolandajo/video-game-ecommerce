import {StyleSheet, View, Text} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import {StatusBar} from "expo-status-bar";
import {Entypo, FontAwesome5, Ionicons} from '@expo/vector-icons';
import {colors} from "../global/colors";

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar style={"light"}/>
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
                                    <Ionicons name="game-controller" size={38} color={focused ? colors.fuchsia_400 : "gray"} />
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
                                    <FontAwesome5 name="shopping-cart" size={30} color={focused ? colors.fuchsia_400 : "gray"} />
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
                                    <Entypo name="list" size={38} color={focused ? colors.fuchsia_400 : "gray"} />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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
