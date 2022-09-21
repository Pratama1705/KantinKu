import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import Tombol from './Tombol'
const CardMenu = ({ menu, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={menu.gambar} style={styles.gambar} />
                <Text style={styles.text}>{menu.nama}</Text>
            </TouchableOpacity>
            <Tombol type="text" title="Detail" padding={7} onPress={() => navigation.navigate('DetailProduk', {menu}) }/>
        </View>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    card: {
        backgroundColor: colors.secondary,
        // width: responsiveWidth(150),
        // height: responsiveHeight(180),
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    gambar: {
        width: 124,
        height: 124,
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 13,
        color: colors.black,
        textTransform: 'capitalize',
    },
    
})