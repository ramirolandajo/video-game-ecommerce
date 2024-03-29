import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Header from "../components/Header";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{header: () => <Header title={"GAME SHOP"}/>}}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    );
};

