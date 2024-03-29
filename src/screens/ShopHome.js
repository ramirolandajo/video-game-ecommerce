import React from 'react'
import GenresList from "../components/GenresList";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

export default function ShopHome({navigation}) {
    return (
        <StyledScreenContainer align_center>
            <GenresList navigation={navigation}/>
        </StyledScreenContainer>
    )
}