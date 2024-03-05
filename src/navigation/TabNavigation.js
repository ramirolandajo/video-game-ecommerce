import {StyleSheet} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"shopTab"} />
                <Tab.Screen name={"CartTab"} />
                <Tab.Screen name={"OrderTab"} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})
