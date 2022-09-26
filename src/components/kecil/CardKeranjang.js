import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import { IconSampah } from '../../assets'
import Jarak from './Jarak'

const CardKeranjang = ({ keranjang }) => {
  return (
    <View style={styles.container}>
      <Image source={keranjang.product.gambar} style={styles.gambar} />
      
      <View style={styles.deskripsi}>
        <Text style={styles.nama}>{keranjang.product.nama}</Text>
        <Text style={styles.text}>Rp. {numberWithCommas(keranjang.product.harga)}</Text>

        <Jarak height={responsiveHeight(14)}/>

        <Text style={styles.textBold}>Pesan : {keranjang.jumlahPesan}</Text>
        <Text style={styles.textBold}>Total harga: Rp. {numberWithCommas(keranjang.totalHarga)}</Text>
        <Text style={styles.textBold}>Keterangan:</Text>
        <Text style={styles.textBold}>{keranjang.keterangan}</Text>
      </View>
      
      <View style={styles.sampah}>
        <IconSampah />
      </View>
    </View>
  )
}

export default CardKeranjang

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundCoolor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  gambar: {
    width: responsiveWidth(77),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  sampah: {
    flex: 1,
    alignItems: 'flex-end'
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize'
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 11
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: 11
  }
})