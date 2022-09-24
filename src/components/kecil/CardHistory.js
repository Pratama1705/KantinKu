import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import Jarak from './Jarak'

const CardHistory = ({ pesanan }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tanggal}>{pesanan.tanggalPesanan}</Text>
            {pesanan.pesanans.map((history, index) => {
                return (
                    <View key={index} style={styles.history}>
                        <Text>
                            <Text style={styles.textBold}>{index + 1}.</Text>
                            <Image source={history.product.gambar} style={styles.gambar} />
                            <View style={styles.deskripsi}>
                                <Text style={styles.nama}>{history.product.nama}</Text>
                                <Text style={styles.harga}>Rp. {numberWithCommas(history.product.harga)}</Text>

                                <Jarak height={10}></Jarak>
                                <Text style={styles.textBold}>Pesanan: {history.product.jumlahPesan}</Text>
                                <Text style={styles.textBold}>Rp. {numberWithCommas(history.totalHarga)}</Text>
                            </View>
                        </Text>
                    </View>
                )
            })}

            <Jarak height={10}></Jarak>
            <View style={styles.footer}>
                <View style={styles.label}>
                    <Text style={styles.orange}>Status :</Text>
                    <Text style={styles.orange}>Total Harga :</Text>
                </View>
                <View style={styles.label}>
                    <Text style={styles.orange}>{pesanan.status}</Text>
                    <Text style={styles.orange}>Rp. {numberWithCommas(pesanan.totalHarga)}</Text>
                </View>

            </View>
        </View>
    )
}

export default CardHistory

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
    history: {
        flexDirection: 'row',
        marginTop: 10
    },
    gambar: {
        width: responsiveWidth(46),
        height: responsiveHeight(46),
        resizeMode: 'contain'
    },
    tanggal: {
        fontSize: 14,
        fontFamily: fonts.primary.bold
    },
    textBold: {
        fontSize: 11,
        fontFamily: fonts.primary.bold
    },
    deskripsi: {
        marginLeft: responsiveWidth(7)
    },
    nama: {
        fontSize: 13,
        fontFamily: fonts.primary.bold,
        textTransform: 'capitalize'
    },
    harga: {
        fontSize: 12,
        fontFamily: fonts.primary.regular
    },
    footer: {
        flexDirection: 'row'
    },
    label: {
        flex:1
    },
    orange: {
        fontSize: 14,
        fontFamily: fonts.primary.bold,
        color: colors.primary,
        textAlign: 'right',
        textTransform: 'uppercase'
    }

})