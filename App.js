import {Provider} from "react-redux";
import store from './src/store/index'
import TabNavigation from "./src/navigation/TabNavigation";
import {useFonts} from "expo-font";
import {fonts} from "./src/global/fonts"
export default function App() {
    const [fontsLoaded, fontError] = useFonts(fonts);
    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <Provider store={store}>
            <TabNavigation />
        </Provider>
    );
}
