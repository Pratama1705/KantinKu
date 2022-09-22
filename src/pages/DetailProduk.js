import { Text, StyleSheet, Image, View } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight, numberWithCommas, heightMobileUI, responsiveWidth } from '../utils'
import { Inputan, Jarak, Tombol } from '../components'
import { RFValue } from 'react-native-responsive-fontsize'

export default class DetailProduk extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: this.props.route.params.menu,
      images: this.props.route.params.menu.gambar,
      deskripsi: this.props.route.params.menu.deskripsi,
    }
  }
  render() {
    const { navigation } = this.props
    const { menu, images } = this.state
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol icon="arrow-left" padding={7} onPress={() => navigation.goBack()} />
        </View>
        <Image source={menu.gambar} style={styles.gambar} />
        <View style={styles.container}>
          <View style={styles.desc}>
            <Text style={styles.nama}>{menu.nama}</Text>
            <Text style={styles.harga}>Harga : Rp. {numberWithCommas(menu.harga)}</Text>
            <View style={styles.garis} />
            <Text style={styles.deskripsi}>{menu.deskripsi}</Text>
            <Inputan label="Jumlah" width={responsiveWidth(166)} height={responsiveHeight(33)} fontSize={13}/>
            <Inputan textarea label="Keterangan" fontSize={13} placeholder="Isi jika ingin custom pesanan"/>
            <Jarak height={10}/>
            <Tombol title="Masuk Keranjang" type="textIcon" icon="shoppingcart-aktif" padding={responsiveHeight(12)} fontSize={16}/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(493),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  button: {
    position: 'absolute',
    marginLeft: 30,
    marginTop: 30,
  },
  desc: {
    marginHorizontal: 30,
    marginTop: 15
  },
  nama: {
    fontSize: RFValue(30, heightMobileUI),
    fontFamily: fonts.primary.bold,
    color: colors.black,
  },
  harga: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.regular,
    color: colors.black,
    textTransform: 'capitalize',
    marginTop: 5,
  },
  deskripsi: {
    color: colors.black,
    fontSize: RFValue(18, heightMobileUI),
    textAlign: 'justify',
    fontFamily: fonts.primary.regular
  },
  garis: {
    marginVertical: 5,
    borderWidth: 0.2,
  },
  gambar: {
    width: responsiveHeight(260),
    height: responsiveHeight(260),
    marginTop: 60,
    alignSelf: 'center',
  }
})
