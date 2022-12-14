import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack, IconKeranjang, IconKeranjangAktif, IconSubmit } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TextIcon = ({ icon, padding, onPress, title, fontSize, disabled }) => {

    const Icon = () => {
        if (icon === 'keranjang') {
            return <IconKeranjang />
        } else if (icon === 'arrow-left') {
            return <IconBack />
        } else if (icon === 'shoppingcart-aktif') {
            return <IconKeranjangAktif />
        } else if (icon === 'submit') {
            return <IconSubmit />
        }
        return <IconKeranjang />
    }

    return (
        <TouchableOpacity style={styles.container(padding, disabled)} onPress={onPress}>
            <Icon />
            <Text style={styles.title(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextIcon

const styles = StyleSheet.create({
    container: (padding, disabled) => ({
        backgroundColor: disabled ? colors.border : colors.primary,
        padding: padding,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }),
    title: (fontSize) => ({
        color: colors.white,
        fontSize: fontSize ? fontSize : 15,
        fontFamily: fonts.primary.bold
    })
})