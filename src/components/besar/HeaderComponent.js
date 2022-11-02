import { StyleSheet, View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { colors, fonts, getData, responsiveHeight } from '../../utils';
import { IconCari } from '../../assets';
import { Jarak, Tombol } from '../kecil';
import { saveKeywordMenu } from '../../actions/MenuAction';
import { connect } from 'react-redux';
import { getListKeranjang } from '../../actions/KeranjangAction';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: "",
    }
  }

  componentDidMount() {
    getData('user').then((res) => {
      if (res) {
        this.props.dispatch(getListKeranjang(res.uid));
      }
    });
  }

  selesaiCari = () => {
    const { page, navigation, dispatch } = this.props;
    const { search } = this.state;

    // jalankan fungsi saveKeyword
    dispatch(saveKeywordMenu(search));

    // navigate ke menu jika tidak pada halaman menu
    if (page !== "Menu") {
      navigation.navigate("Menu");
    }

    // kembalikan state search ke kondisi kosong
    this.setState({
      search: ''
    })
  }


  render() {
    const { search } = this.state
    const { navigation, getListKeranjangResult } = this.props;

    let totalKeranjang;

    if(getListKeranjangResult) {
      totalKeranjang = Object.keys(getListKeranjangResult.pesanan).length;
    }
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>

          {/* input pencarian */}
          <View style={styles.searchSection}>
            <IconCari />
            <TextInput placeholder='Cari Jajanan...' style={styles.input} value={search} onChangeText={(search) => this.setState({ search })} onSubmitEditing={() => this.selesaiCari()} />
          </View>
          <Jarak width={10} />
          <Tombol icon='keranjang' totalKeranjang={totalKeranjang} padding={10} onPress={() => navigation.navigate('Keranjang')} />

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
})

export default connect(mapStateToProps)(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(100)
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center'
  },
  input: {
    fontSize: 14,
    fontFamily: fonts.primary.regular
  }
})
