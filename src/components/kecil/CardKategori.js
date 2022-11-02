import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { connect } from 'react-redux'
import { getMenuByKategori } from '../../actions/MenuAction'

const CardKategori = ({ kategori, navigation, id, dispatch }) => {
    // console.log("Liga : ", id)
    const toMenuByKategori = (id, namaKategori) => {
        // ke Menu Action
        dispatch(getMenuByKategori(id, namaKategori));
        // navigate ke Menu
        navigation.navigate('Menu');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={() => toMenuByKategori(id, kategori.namaKategori)}>
            <Image source={{uri: kategori.gambarKategori}} style={styles.logo} />
        </TouchableOpacity>
    )
}

export default connect()(CardKategori);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        paddingTop: 15,
        borderRadius: 15,
    },
    logo: {
        width: responsiveHeight(65),
        height: responsiveHeight(65),
    }
})