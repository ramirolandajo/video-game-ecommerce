import React from 'react'
import GameDetail from "../components/GameDetail";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

export default function GamesDetail({navigation}) {
    return (
        <StyledScreenContainer>
            <GameDetail navigation={navigation}/>
        </StyledScreenContainer>
    )
}
