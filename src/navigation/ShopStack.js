import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GamesByGenre from "../screens/GamesByGenre";
import GamesDetail from "../screens/GamesDetail";
import ShopHome from "../screens/ShopHome";
import Header from "../components/Header";

export default function ShopStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                () => ({
                    header: () => {
                        return (
                            <Header/>
                        )
                    }
                })
            }
        >
            <Stack.Screen name="Home" component={ShopHome}/>
            <Stack.Screen name="GamesByGenre" component={GamesByGenre}/>
            <Stack.Screen name="GameDetail" component={GamesDetail}/>
        </Stack.Navigator>
    );
};
