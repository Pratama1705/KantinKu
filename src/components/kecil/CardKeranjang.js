import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import { IconSampah } from '../../assets'
import Jarak from './Jarak'
import { connect } from 'react-redux'
import { deleteKeranjang } from '../../actions/KeranjangAction'

const CardKeranjang = ({ keranjang, keranjangUtama, id, dispatch }) => {
  // console.log("keranjang", keranjang)
  const hapusKeranjang = () => {
    dispatch(deleteKeranjang(id, keranjangUtama, keranjang))
  }
  
  return (
    <View style={styles.container}>
      <Image source={{uri : keranjang.menu.gambarMenu}} style={styles.gambar} />
      <Jarak width={responsiveWidth(14)} />

      <View style={styles.deskripsi}>
        <Text style={styles.nama}>{keranjang.menu.namaMenu}</Text>
        <Text style={styles.text}>Rp. {numberWithCommas(keranjang.menu.harga)}</Text>

        <Jarak height={responsiveHeight(14)} />

        <Text style={styles.textBold}>Pesan : <Text style={styles.text}>{keranjang.jumlahPesanan}</Text></Text>
        <Text style={styles.textBold}>Total harga: <Text style={styles.text}>Rp. {numberWithCommas(keranjang.totalHargaPesanan)}</Text></Text>
        <Text style={styles.textBold}>Keterangan:</Text>
        <Text style={styles.text}>{keranjang.keteranganPesanan}</Text>
      </View>

      <TouchableOpacity style={styles.sampah} onPress={() => hapusKeranjang()}>
        <IconSampah />
      </TouchableOpacity>
    </View>
  )
}

export default connect()(CardKeranjang)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
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