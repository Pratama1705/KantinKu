import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanan } from '../data'
import { ListKeranjang, Tombol } from '../components'
import { colors, fonts, numberWithCommas, responsiveHeight } from '../utils'

export default class Keranjang extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pesanan: dummyPesanan[0]
    }
  }
  render() {
    const { pesanan } = this.state
    return (
      <View style={styles.page}>
        <ListKeranjang keranjangs={pesanan.pesanans} />
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>Rp : {numberWithCommas(pesanan.totalHarga)}</Text>
          </View>
          <Tombol title="Beli" type="textIcon" fontsize={18} padding={responsiveHeight(15)} icon="shoppingcart-aktif" onPress={() => this.props.navigation.navigate('Checkout')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingBottom: 30
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  textBold: {
    fontSize: 20,
    fontFamily: fonts.primary.bold
  }

})