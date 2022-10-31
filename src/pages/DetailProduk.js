import { Text, StyleSheet, Image, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight, numberWithCommas, heightMobileUI, responsiveWidth, getData } from '../utils'
import { Inputan, Jarak, Tombol } from '../components'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import { masukKeranjang } from '../actions/KeranjangAction'

class DetailProduk extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: this.props.route.params.menu,
      deskripsi: this.props.route.params.menu.deskripsi,
      jumlahPesanan: "",
      keteranganPesanan: "",
      uid: "",
    }
  }

  componentDidUpdate(prevProps) {
    const { saveKeranjangResult } = this.props

    if(saveKeranjangResult && prevProps.saveKeranjangResult !== saveKeranjangResult) {
      this.props.navigation.navigate("Keranjang")
    }

  }

  inputKeranjang = () => {
    const { jumlahPesanan, keteranganPesanan } = this.state

    getData('user').then((res) => {

      if (res) {

        this.setState({
          uid: res.uid
        })

        if (jumlahPesanan && keteranganPesanan) {
          this.props.dispatch(masukKeranjang(this.state))
        } else {
          Alert.alert('Error', 'Jumlah dan Keterangan Wajib Diisi')
        }

      } else {
        Alert.alert('Error', 'Silahkan Login Terlebih Dahulu')
        this.props.navigation.replace('Login')
      }
    })
  }

  render() {
    const { navigation, saveKeranjangLoading } = this.props
    const { menu, jumlahPesanan, keteranganPesanan } = this.state
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol icon="arrow-left" padding={7} onPress={() => navigation.goBack()} />
        </View>
        <Image source={{ uri: menu.gambarMenu }} style={styles.gambar} />
        <View style={styles.container}>
          <View style={styles.desc}>
            <Text style={styles.nama}>{menu.namaMenu}</Text>
            <Text style={styles.harga}>Harga : Rp. {numberWithCommas(menu.harga)} </Text>
            <View style={styles.garis} />
            <Text style={styles.deskripsi}>{menu.deskripsi}</Text>
            <Inputan label="Jumlah" width={responsiveWidth(166)} height={responsiveHeight(33)} fontSize={13} value={jumlahPesanan} onChangeText={(jumlahPesanan) => this.setState({ jumlahPesanan })} keyboardType="number-pad" />
            <Inputan textarea label="Keterangan" fontSize={13} placeholder="Isi jika ingin custom pesanan" value={keteranganPesanan} onChangeText={(keteranganPesanan) => this.setState({ keteranganPesanan })} />
            <Jarak height={10} />
            <Tombol title="Masuk Keranjang" type="textIcon" icon="shoppingcart-aktif" padding={responsiveHeight(12)} fontSize={16} onPress={() => this.inputKeranjang()} loading={saveKeranjangLoading}/>
            <Jarak height={10} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  saveKeranjangLoading: state.KeranjangReducer.saveKeranjangLoading,
  saveKeranjangResult: state.KeranjangReducer.saveKeranjangResult,
  saveKeranjangError: state.KeranjangReducer.saveKeranjangError,
})

export default connect(mapStateToProps, null)(DetailProduk);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(530),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // marginBottom: 40,
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
