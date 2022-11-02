import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { HeaderComponent, ListKategori, ListMenu, Jarak, Tombol } from '../components';
import { colors, fonts } from '../utils';
import { connect } from 'react-redux';
import { getListMenu } from '../actions/MenuAction';
import { getListKategori } from '../actions/KategoriAction';

class Menu extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      const { idKategori, keyword } = this.props;
      this.props.dispatch(getListKategori());
      this.props.dispatch(getListMenu(idKategori, keyword));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const { idKategori, keyword } = this.props

    if (idKategori && prevProps.idKategori !== idKategori) {
      this.props.dispatch(getListMenu(idKategori, keyword));
    }

    if (keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getListMenu(idKategori, keyword));
    }
  }

  render() {
    const { navigation, namaKategori, keyword } = this.props

    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="Menu" />
        <ScrollView>
          <View style={styles.pilihKategori}>
            <Text style={styles.label}>Pilih Kategori</Text>
            <ListKategori navigation={navigation} />
          </View>
          <View style={styles.pilihMenu}>
            {keyword ? <Text style={styles.label}>
              Cari : <Text style={styles.boldLabel}>{keyword}</Text>
            </Text> : <Text style={styles.label}>
              Pilih <Text style={styles.boldLabel}>{namaKategori ? namaKategori : 'Menu'}</Text> Yang Anda Inginkan</Text>}

            <ListMenu navigation={navigation} />
          </View>

          <Jarak height={80} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  idKategori: state.MenuReducer.idKategori,
  namaKategori: state.MenuReducer.namaKategori,
  keyword: state.MenuReducer.keyword,
});

export default connect(mapStateToProps, null)(Menu)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  pilihKategori: {
    marginHorizontal: 30,
    marginTop: 5,
  },
  pilihMenu: {
    marginHorizontal: 30,
    marginTop: 10
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
  boldLabel: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: colors.black,
  }
})