import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import Jarak from './Jarak'

const CardPesanan = ({ pesanan, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pesanan Saya :</Text>
            {pesanan.pesanans.map((isi) => {
                return (
                    <View key={isi.id} style={styles.confirm}>
                        <View style={styles.deskripsi}>
                            <Text style={styles.nama}>{isi.product.nama}</Text>
                            <Text style={styles.textBold}>Pesanan : {isi.jumlahPesan}</Text>
                            <Text style={styles.textBold}>Keterangan : {isi.keterangan}</Text>
                        </View>
                    </View>
                )
            })}
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.ubah}>Ubah Pesanan</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardPesanan

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
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontFamily: fonts.primary.bold,
        textTransform: 'capitalize',
        color: colors.black
    },
    confirm: {
        flexDirection: 'row',
        marginTop: 10
    },
    gambar: {
        width: responsiveWidth(70),
        height: responsiveHeight(70),
        resizeMode: 'contain'
    },
    textBold: {
        fontSize: 11,
        fontFamily: fonts.primary.regular,
        color: colors.black,
    },
    deskripsi: {
        marginLeft: responsiveWidth(7)
    },
    nama: {
        fontSize: 13,
        fontFamily: fonts.primary.regular,
        textTransform: 'capitalize',
        color: colors.black
    },
    ubah: {
        fontSize: 11,
        color: '#22668A',
        textAlign: 'right',
        fontFamily: fonts.primary.bold,
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row'
    },

})