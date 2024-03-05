import {Provider} from "react-redux";
import store from './src/store/index'
import TabNavigation from "./src/navigation/TabNavigation";
export default function App() {
    return (
        <Provider store={store}>
            <TabNavigation />
        </Provider>
    );
}
