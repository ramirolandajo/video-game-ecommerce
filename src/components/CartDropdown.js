import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {Dropdown} from "react-native-element-dropdown";
import {colors} from "../global/colors";
import {addItem} from "../features/shop/cartSlice";
import {useDispatch} from "react-redux";

export default function CartDropdown({game}) {
    const [isFocus, setIsFocus] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(1)
    const dispatch = useDispatch();

    const data = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '4', value: 4},
        {label: '5', value: 5},
        {label: '6', value: 6},
        {label: '7', value: 7},
        {label: '8', value: 8},
        {label: '9', value: 9},
        {label: '10', value: 10},
    ];
    const renderLabel = () => {
        if (dropdownValue || isFocus) {
            return (
                <Text style={[styles.label, isFocus && {color: colors.fuchsia_400}]}>
                    Quantity
                </Text>
            );
        }
        return null;
    };

    function handleDropdown(item) {
        setDropdownValue(item.value)
        dispatch(addItem({...game, quantity: item.value}))
    }

    return (
        <>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                data={data}
                labelField="label"
                valueField="value"
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                containerStyle={styles.dropdownContainer}
                itemTextStyle={styles.containerText}
                activeColor={colors.black_400}
                onChange={(item) => handleDropdown(item)}
                value={dropdownValue}
                placeholder={"1"}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            />
        </>
    )
}
const styles = StyleSheet.create({

    dropdown: {
        height: 40,
        width: 100,
        borderColor: colors.fuchsia_400,
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    dropdownContainer: {
        backgroundColor: colors.black_400,
    },
    containerText: {
        color: colors.fuchsia_400,
        fontSize: 20
    },
    label: {
        position: 'absolute',
        backgroundColor: colors.black_800,
        color: colors.light_blue,
        top: -10,
        left: 15,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 20,
        color: colors.light_blue
    },
    selectedTextStyle: {
        fontSize: 20,
        color: colors.light_blue,
        fontWeight: "bold"
    }
})
