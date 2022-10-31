import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanan } from '../data'
import { ListKeranjang, Tombol } from '../components'
import { colors, fonts, getData, numberWithCommas, responsiveHeight } from '../utils'
import { connect } from 'react-redux'
import { getListKeranjang } from '../actions/KeranjangAction'

class Keranjang extends Component {

  componentDidMount() {
    getData('user').then((res) => {

      if (res) {
        this.props.dispatch(getListKeranjang(res.uid));
      } else {
        this.props.navigation.replace('Login');
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { deleteKeranjangResult } = this.props

    if (deleteKeranjangResult && prevProps.deleteKeranjangResult !== deleteKeranjangResult) {
      getData('user').then((res) => {

        if (res) {
          this.props.dispatch(getListKeranjang(res.uid));
        } else {
          this.props.navigation.replace('Login');
        }
      });
    }
  }


  render() {
    const { getListKeranjangResult } = this.props
    // console.log("Data Keranjang : ", this.props.getListKeranjangResult);
    // console.log("Data Keranjang : ", getListKeranjangResult.pesanan);
    return (
      <View style={styles.page}>
        <ListKeranjang {...this.props} />
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>Rp : {getListKeranjangResult ? numberWithCommas(getListKeranjangResult.totalHarga) : 0}</Text>
          </View>

          {getListKeranjangResult ? (<Tombol title="Beli" type="textIcon" fontsize={18} padding={responsiveHeight(15)} icon="shoppingcart-aktif" onPress={() => this.props.navigation.navigate('Checkout', {
            totalHarga: getListKeranjangResult.totalHarga,
            pesanan: getListKeranjangResult.pesanan,
          })} />
          ) : (<Tombol title="Beli" type="textIcon" fontsize={18} padding={responsiveHeight(15)} icon="shoppingcart-aktif" disabled={true} />)}

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getListKeranjangLoading: state.KeranjangReducer.getListKeranjangLoading,
  getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
  getListKeranjangError: state.KeranjangReducer.getListKeranjangError,

  deleteKeranjangLoading: state.KeranjangReducer.deleteKeranjangLoading,
  deleteKeranjangResult: state.KeranjangReducer.deleteKeranjangResult,
  deleteKeranjangError: state.KeranjangReducer.deleteKeranjangError,
})

export default connect(mapStateToProps)(Keranjang)

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
    shadowRadius: 6.84,
    elevation: 11,
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