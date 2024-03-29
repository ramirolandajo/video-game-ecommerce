import {FlatList, Platform, SafeAreaView, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import GameItem from "../components/GameItem"
import {colors} from "../global/colors";
import Constants from "expo-constants";
import {useGetGamesByGenreQuery} from "../services/shopService";
import Search from "../components/Search";
import Loader from "../components/Loader";
export default function GamesByGenre({navigation}) {
    const genre = useSelector((state) => state.shopReducer.value.genreSelected)
    const {data: gamesFilteredByGenre, isLoading, error} = useGetGamesByGenreQuery(genre);
    const [games, setGames] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (gamesFilteredByGenre) {
            const gamesRaw = Object.values(gamesFilteredByGenre)
            const gamesFiltered = gamesRaw.filter((game) =>
                game.name.includes(keyword)
            );
            setGames(gamesFiltered);
        }
    }, [gamesFilteredByGenre, keyword]);

    return isLoading ? (
        <Loader />
    ) : (
        <SafeAreaView style={styles.container}>
            <Search onSearch={setKeyword}/>
            <FlatList
                style={{width: "100%"}}
                data={games}
                renderItem={({ item }) => (
                    <GameItem game={item} navigation={navigation}/>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black_800,
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        paddingHorizontal: 16
    }
})
