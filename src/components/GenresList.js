import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {useGetGenresQuery} from "../services/shopService";
import GenreItem from "./GenreItem";
import {colors} from "../global/colors";
import Loader from "./Loader";

export default function GenresList({navigation}) {
    const {data, isLoading, error} = useGetGenresQuery()

    return isLoading ? (
        <Loader />
    ) : (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <GenreItem navigation={navigation} genre={item}/>
                )}
                keyExtractor={(item) => data.indexOf(item)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})
