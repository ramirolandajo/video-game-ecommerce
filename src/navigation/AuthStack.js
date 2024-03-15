import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { Pressable, Text } from "react-native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{ header: () => <Header title={"GAME SHOP"} />}}
        >
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

