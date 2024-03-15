import {Provider} from "react-redux";
import store from './src/store/index'
import {useFonts} from "expo-font";
import {fonts} from "./src/global/fonts"
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
    const [fontsLoaded, fontError] = useFonts(fonts);
    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
}
