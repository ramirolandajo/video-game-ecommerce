import {Image, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {colors} from "../global/colors";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../features/auth/authSlice";
import {deleteSession} from "../db";
import StyledButton from "../styledComponents/StyledButton";
import StyledText from "../styledComponents/StyledText";
import StyledScreenContainer from "../styledComponents/StyledScreenContainer";

export default function MyProfile({navigation}) {
    const {profileImage, imageCamera, user, localId} = useSelector((state) => state.authReducer.value);
    const [currentImage, setCurrentImage] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentImage(imageCamera ? imageCamera : profileImage)
    }, [profileImage, imageCamera])

    async function onLogout() {
        dispatch(logout());
        const deletedSession = await deleteSession({localId});
    }

    return (
        <StyledScreenContainer style={{justifyContent: "space-between"}}>
            <View>
                <View style={styles.main}>
                    {profileImage || imageCamera ? (
                        <Image
                            source={{uri: currentImage}}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            source={require("../../assets/defaultProfile.png")}
                            tintColor={colors.black_400}
                            style={styles.defaultImage}
                        />
                    )}
                    <View>
                        <StyledText style={{paddingTop: 10}}>{user}</StyledText>
                    </View>
                </View>
                {!currentImage ? (
                    <StyledButton onPress={() => navigation.navigate("ImageSelector")} text={"Add image to profile"}
                                  kodemono filled/>
                ) : (
                    <StyledButton onPress={() => navigation.navigate("ImageSelector")} text={"Change profile image"}
                                  kodemono filled/>
                )}
            </View>
            <View>
                <StyledButton text={"Log Out"} onPress={() => onLogout()} font_colored orbitron/>
            </View>
        </StyledScreenContainer>
    )
}
const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        gap: 20
    },
    defaultImage: {
        width: 120,
        height: 120,
        resizeMode: "contain"
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200 / 2,
        resizeMode: "cover",
        marginBottom: 20
    }
});