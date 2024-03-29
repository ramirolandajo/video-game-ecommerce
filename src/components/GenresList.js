import {FlatList, StyleSheet, View} from 'react-native'
import React from 'react'
import {useGetGenresQuery} from "../services/shopService";
import GenreItem from "./GenreItem";
import Loader from "./Loader";

export default function GenresList({navigation}) {
    const {data, isLoading, error} = useGetGenresQuery()

    return isLoading ? (
        <Loader/>
    ) : (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <GenreItem navigation={navigation} genre={item} duration={data.indexOf(item) * 300}/>
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
