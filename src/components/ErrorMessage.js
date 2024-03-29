import React from 'react'
import {colors} from "../global/colors";
import StyledText from "../styledComponents/StyledText";

export default function ErrorMessage({errorCode, errorMessage}) {
    return (
        <>
            <StyledText capitalized style={{color: colors.purple_200}}>
                Error code: {errorCode}
            </StyledText>
            <StyledText capitalized style={{color: colors.purple_200}}>
                {errorMessage.split("_").join(" ")}
            </StyledText>
        </>
    )
}
