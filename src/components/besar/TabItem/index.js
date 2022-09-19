import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconHome, IconHomeAktif, IconMenu, IconMenuAktif, IconProfile, IconProfileAktif } from '../../../assets'
import { colors, fonts } from '../../../utils';

const TabItem = ({ isFocused, onLongPress, onPress, label }) => {

    const Icon = () => {
        if (label === 'Home') {
            return isFocused ? <IconHomeAktif /> : <IconHome />
        }
        if (label === 'Menu') {
            return isFocused ? <IconMenuAktif /> : <IconMenu />
        }
        if (label === 'Profile') {
            return isFocused ? <IconProfileAktif /> : <IconProfile />
        }

        return <IconHome />;
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TabItem

const styles = StyleSheet.create({
    container : {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        color: isFocused ? colors.white : colors.secondary,
        fontSize: 11,
        marginTop : 4,
        fontFamily: fonts.primary.bold
    })
})