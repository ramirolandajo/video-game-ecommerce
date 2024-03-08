import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useGetGenresQuery} from "../services/shopService";
import GenreItem from "./GenreItem";

export default function GenresList({navigation}) {
    const {data, isLoading, error} = useGetGenresQuery()

    return isLoading ? (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Loading...</Text>
        </View>
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
