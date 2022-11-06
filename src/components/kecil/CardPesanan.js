import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import Jarak from './Jarak'

const CardPesanan = ({ pesanan, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pesanan Saya :</Text>
            {Object.keys(pesanan).map((key) => {
                return (
                    <View key={key} style={styles.confirm}>
                        <Text style={styles.nama}>{pesanan[key].menu.namaMenu}</Text>
                        <Text style={styles.textBold}>Pesan : {pesanan[key].jumlahPesanan}</Text>
                        <Text style={styles.textBold}>Keterangan : {pesanan[key].keteranganPesanan}</Text>
                        <Text style={styles.textBold}>Harga Pesanan : Rp.{numberWithCommas(pesanan[key].totalHargaPesanan)}</Text>
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
        flexDirection: 'column',
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